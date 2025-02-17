import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Tooltip, Popconfirm, message, Tag } from 'antd';
import React, { useCallback, useRef, useState } from 'react';
import { useIntl, FormattedMessage, Link } from 'umi';
import { format } from 'date-fns';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { templates, deleteTemplate } from '@/services/escola-lms/templates';
import { DATETIME_FORMAT } from '@/consts/dates';
import type { channelType } from '..';

const TableList: React.FC<{ templateType: string; channel: channelType }> = ({
  templateType,
  channel,
}) => {
  const actionRef = useRef<ActionType>();
  const intl = useIntl();
  const [loading, setLoading] = useState(false);

  const columns: ProColumns<API.TemplateListItem>[] = [
    {
      title: <FormattedMessage id="ID" defaultMessage="ID" />,
      dataIndex: 'id',
      hideInSearch: true,
      sorter: true,
      width: '80px',
    },
    {
      title: <FormattedMessage id="created_at" defaultMessage="created_at" />,
      dataIndex: 'created_at',
      hideInSearch: true,
      sorter: true,
      render: (_, record) =>
        record.created_at && format(new Date(record.created_at), DATETIME_FORMAT),
    },
    {
      title: <FormattedMessage id="name" defaultMessage="name" />,
      dataIndex: 'name',
      hideInSearch: false,
      sorter: true,
    },
    {
      title: <FormattedMessage id="event" defaultMessage="event" />,
      dataIndex: 'event',
      hideInSearch: true,
      sorter: false,
      render: (_, record) => <FormattedMessage id={record.event} defaultMessage={record.event} />,
    },
    {
      title: <FormattedMessage id="templates.is_default" />,
      dataIndex: 'default',
      hideInSearch: true,
      valueEnum: {
        true: (
          <Tag color="success">
            <FormattedMessage id="yes" />
          </Tag>
        ),
        false: (
          <Tag color="error">
            <FormattedMessage id="no" />
          </Tag>
        ),
      },
    },
  ];

  const handleRemove = useCallback(
    async (id: number) => {
      setLoading(true);
      const hide = message.loading(<FormattedMessage id="loading" defaultMessage="loading" />);
      try {
        await deleteTemplate(id).then((response) => {
          setLoading(false);
          if (response.success) {
            message.success(response.message);
          }
        });
        hide();
        setLoading(false);
        actionRef.current?.reload();
        return true;
      } catch (error) {
        hide();
        message.error(<FormattedMessage id="error" defaultMessage="error" />);
        setLoading(false);
        return false;
      }
    },
    [actionRef],
  );

  return (
    <ProTable<API.TemplateListItem, API.TemplatesParams>
      headerTitle={intl.formatMessage({
        id: 'templates',
        defaultMessage: 'templates',
      })}
      loading={loading}
      actionRef={actionRef}
      rowKey="id"
      search={{
        layout: 'vertical',
      }}
      toolBarRender={() => [
        <Link key={'new'} to={`/configuration/templates/${templateType}/new`}>
          <Button type="primary" key="primary">
            <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
          </Button>
        </Link>,
      ]}
      request={({ pageSize, current, name }, sort) => {
        setLoading(true);
        const sortArr = sort && Object.entries(sort)[0];
        return templates({
          per_page: pageSize,
          page: current,
          channel,
          name: name || undefined,
          order_by: sortArr && sortArr[0],
          order: sortArr ? (sortArr[1] === 'ascend' ? 'ASC' : 'DESC') : undefined,
        }).then((response) => {
          if (response.success) {
            setLoading(false);
            return {
              data: response.data,
              total: response.meta.total,
              success: true,
            };
          }
          return [];
        });
      }}
      columns={[
        ...columns,
        {
          hideInSearch: true,
          title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="option" />,
          dataIndex: 'option',
          valueType: 'option',
          render: (_, record) => [
            <Link to={`/configuration/templates/${templateType}/${record.id}`} key="edit">
              <Tooltip title={<FormattedMessage id="edit" defaultMessage="edit" />}>
                <Button type="primary" icon={<EditOutlined />} />
              </Tooltip>
            </Link>,
            <Popconfirm
              key="delete"
              title={
                <FormattedMessage
                  id="deleteQuestion"
                  defaultMessage="Are you sure to delete this record?"
                />
              }
              onConfirm={() => handleRemove(record.id)}
              okText={<FormattedMessage id="yes" />}
              cancelText={<FormattedMessage id="no" />}
            >
              <Tooltip title={<FormattedMessage id="delete" defaultMessage="delete" />}>
                <Button type="primary" icon={<DeleteOutlined />} danger />
              </Tooltip>
            </Popconfirm>,
          ],
        },
      ]}
    />
  );
};

export default TableList;
