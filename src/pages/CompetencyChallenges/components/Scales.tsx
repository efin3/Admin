import React, { useMemo, useRef, useState } from 'react';
import { FormattedMessage, useIntl, useParams } from 'umi';
import { Button, Popconfirm, Tooltip } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import ProForm, { type ProFormInstance } from '@ant-design/pro-form';
import { EditableProTable } from '@ant-design/pro-table';
import type { ActionType, EditableFormInstance, ProColumns } from '@ant-design/pro-table';

import {
  createCompetencyChallengeScale,
  deleteCompetencyChallengeScale,
  updateCompetencyChallengeScale,
} from '@/services/escola-lms/competency-challenges';
import { CompetencyChallengeCategoryTree } from './CompetencyChallengeCategoryTree';
import { useCompetencyChallengeContext } from '../context';

type DataSourceType = {
  id: React.Key;
  scale_min: number;
  category_id: number;
  category_name: string;
};

const staticColumns: ProColumns<DataSourceType>[] = [
  {
    title: <FormattedMessage id="ID" />,
    dataIndex: 'id',
    editable: false,
    render: (_n, record) => {
      if (typeof record.id !== 'string') return '-';
      const [state, id] = record.id.split('-');

      if (state === 'new') return '-';

      return id;
    },
  },
  {
    title: <FormattedMessage id="min_points" />,
    dataIndex: 'scale_min',
    valueType: 'digit',
    formItemProps: {
      rules: [
        {
          required: true,
          message: <FormattedMessage id="field_required" />,
        },
        {
          type: 'number',
          min: 0,
          max: 100,
          message: <FormattedMessage id="number_between" values={{ min: 0 }} />,
        },
      ],
    },
    fieldProps: {
      min: 0,
    },
  },
  {
    title: <FormattedMessage id="category" />,
    dataIndex: 'category_id',
    render: (_n, record) => record.category_name,
    formItemProps: {
      rules: [
        {
          required: true,
          message: <FormattedMessage id="field_required" />,
        },
      ],
    },
    renderFormItem: (_s, _c, form) => {
      const disabledNodes: number[] = (form.getFieldValue('table') ?? []).map(
        (record: DataSourceType) => record.category_id,
      );

      return <CompetencyChallengeCategoryTree disabledNodes={disabledNodes} />;
    },
  },
];

const getDefaultData = (scales: API.CompetencyChallengeScale[]): DataSourceType[] =>
  scales.map(({ id, scale_min, category }) => ({
    // due to key errors
    id: `old-${id}`,
    scale_min,
    category_id: category.id,
    category_name: category.name_with_breadcrumbs,
  }));

export const Scales: React.FC = () => {
  const { competencyChallenge, refreshData } = useCompetencyChallengeContext();
  const params = useParams<{ id?: string }>();
  const competency_challenge_id = Number(params.id);
  const scales = competencyChallenge?.data?.scales ?? [];

  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);

  const intl = useIntl();
  const formRef = useRef<ProFormInstance>();
  const editableFormRef = useRef<EditableFormInstance>();
  const actionRef = useRef<ActionType>();

  const defaultData = useMemo(() => getDefaultData(scales), [scales]);

  const columns: ProColumns<DataSourceType>[] = useMemo(() => {
    return [
      ...staticColumns,

      {
        valueType: 'option',
        title: <FormattedMessage id="options" />,
        render: (_n, record, _i, action) => [
          <Tooltip key="edit" title={<FormattedMessage id="edit" defaultMessage="edit" />}>
            <Button
              type="primary"
              icon={<EditOutlined />}
              onClick={() => action?.startEditable(record.id)}
            />
          </Tooltip>,
          <Popconfirm
            key="delete"
            title={
              <FormattedMessage
                id="deleteQuestion"
                defaultMessage="Are you sure to delete this record?"
              />
            }
            onConfirm={async () => {
              if (typeof record.id !== 'string') return;
              const [state, idStr] = record.id.split('-');

              if (state === 'new') {
                const currentData: DataSourceType[] = formRef.current?.getFieldValue('table');

                formRef.current?.setFieldValue(
                  'table',
                  currentData.filter(({ id }) => id !== record.id),
                );
                return;
              }

              const response = await deleteCompetencyChallengeScale(+idStr);
              if (response.success) {
                await refreshData();
              }
            }}
            okText={<FormattedMessage id="ok" />}
            cancelText={<FormattedMessage id="cancel" />}
          >
            <Tooltip title={<FormattedMessage id="delete" defaultMessage="delete" />}>
              <Button type="primary" icon={<DeleteOutlined />} danger />
            </Tooltip>
          </Popconfirm>,
        ],
      },
    ];
  }, []);

  return (
    <ProForm<{
      table: DataSourceType[];
    }>
      formRef={formRef}
      initialValues={{
        table: defaultData,
      }}
      submitter={false}
    >
      <EditableProTable<DataSourceType>
        rowKey={(r) => r.id}
        editableFormRef={editableFormRef}
        controlled
        actionRef={actionRef}
        name="table"
        columns={columns}
        recordCreatorProps={{
          creatorButtonText: <FormattedMessage id="CompetencyChallenges.addNewRow" />,
          disabled: editableKeys.length > 0,
          record: (index) => ({ id: `new-${index}` } as DataSourceType),
        }}
        editable={{
          onlyOneLineEditorAlertMessage: intl.formatMessage({
            id: 'CompetencyChallenges.onlyOneRowIsEditable',
          }),
          onSave: async (_k, { scale_min, category_id, ...record }) => {
            if (typeof record.id !== 'string') return;

            const [state, idStr] = record.id.split('-');
            if (state === 'new') {
              const res = await createCompetencyChallengeScale({
                scale_min,
                category_id,
                competency_challenge_id,
              });

              if (res.success) {
                await refreshData();
              }

              return;
            }

            const res = await updateCompetencyChallengeScale(+idStr, {
              scale_min,
              category_id,
              competency_challenge_id,
            });
            if (res.success) {
              await refreshData();
            }
            return;
          },
          deletePopconfirmMessage: <FormattedMessage id="deleteQuestion" />,
          actionRender: (record, _c, dom) => {
            if (typeof record.id !== 'string') return [];

            const [state] = record.id.split('-');
            if (state === 'new') return [dom.save, dom.delete];

            return [dom.save, dom.cancel];
          },
          type: 'single',
          editableKeys,
          onChange: setEditableRowKeys,
        }}
      />
    </ProForm>
  );
};
