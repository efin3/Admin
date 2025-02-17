import type { ModelTypes } from '@/pages/Questionnaire/form';
import React, { useCallback, useRef } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {
  assignQuestionnaire,
  questionnaire,
  unassignQuestionnaire,
} from '@/services/escola-lms/questionnaire';
import { message, Switch } from 'antd';
import TypeButtonDrawer from '../TypeButtonDrawer';

const ModelNames = {
  1: 'course',
};

const TableColumns: ProColumns<API.Questionnaire>[] = [
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'id',
    hideInSearch: true,
    sorter: true,
    width: '80px',
  },
  {
    title: <FormattedMessage id="title" defaultMessage="title" />,
    dataIndex: 'title',
    hideInSearch: true,
    sorter: true,
    width: '80%',
    render: (_, record) => (
      <TypeButtonDrawer type={'Questionnaire'} type_id={Number(record.id)} text={record.title} />
    ),
  },
];

const AssignQuestionnary: React.FC<{ modelType: ModelTypes; id: number }> = ({ modelType, id }) => {
  const actionRef = useRef<ActionType>();

  const intl = useIntl();

  const handleChange = useCallback(
    async (qId: number, value: boolean) => {
      const hide = message.loading(
        intl.formatMessage({
          id: 'loading',
        }),
      );

      try {
        const request = value
          ? await assignQuestionnaire(ModelNames[modelType], id, qId)
          : await unassignQuestionnaire(ModelNames[modelType], id, qId);
        if (request.success) {
          hide();
          message.success(request.message);
          actionRef.current?.reload();
        }
        return;
      } catch (error) {
        hide();
        message.error(<FormattedMessage id="error" defaultMessage="error" />);

        return false;
      }
    },
    [modelType, id],
  );

  return (
    <ProTable<API.Questionnaire>
      headerTitle={intl.formatMessage({
        id: 'questionnaires',
        defaultMessage: 'questionnaires',
      })}
      actionRef={actionRef}
      rowKey="id"
      search={false}
      request={({}, sort) => {
        const sortArr = sort && Object.entries(sort)[0];
        return questionnaire({
          order_by: sortArr && sortArr[0],
          order: sortArr ? (sortArr[1] === 'ascend' ? 'ASC' : 'DESC') : undefined,
        }).then((response) => {
          if (response.success) {
            return {
              data: response.data,
              success: true,
            };
          }
          return [];
        });
      }}
      columns={[
        ...TableColumns,
        {
          title: <FormattedMessage id="assign" defaultMessage="assign" />,
          dataIndex: 'option',
          valueType: 'option',

          render: (_, record) => [
            <Switch
              key="assign"
              defaultChecked={
                record.models && record.models?.filter((m) => m.model_id === id).length > 0
              }
              onChange={(value) => handleChange(Number(record.id), value)}
            />,
          ],
        },
      ]}
    />
  );
};

export default AssignQuestionnary;
