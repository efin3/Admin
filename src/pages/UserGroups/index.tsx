import { Button, Tooltip, Popconfirm, Tag, Spin, Modal } from 'antd';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { useIntl, FormattedMessage, Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { userGroups, deleteUserGroup, userGroupsTree } from '@/services/escola-lms/user_groups';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import UserGroupSelect from '@/components/UserGroupSelect';
import TypeButtonDrawer from '@/components/TypeButtonDrawer';

import { Tree } from '@/components/Tree';
import { createTableOrderObject } from '@/utils/utils';

const handleRemove = async (id: number) => {
  await deleteUserGroup(id);
  return true;
};

export const TableColumns: ProColumns<API.UserGroup>[] = [
  {
    title: <FormattedMessage id="name" defaultMessage="name" />,
    dataIndex: 'search',
    hideInSearch: false,
    hideInTable: true,
    hideInDescriptions: true,
    tooltip: <FormattedMessage id="search_tooltip_user_groups" />,
  },
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'id',
    hideInSearch: true,
    sorter: true,
    width: '80px',
  },
  {
    title: <FormattedMessage id="full_name" defaultMessage="full_name" />,
    dataIndex: 'name_with_breadcrumbs',
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="name" defaultMessage="name" />,
    dataIndex: 'name',
    hideInSearch: true,
    sorter: true,
  },
  {
    title: <FormattedMessage id="registerable" defaultMessage="registerable" />,
    dataIndex: 'registerable',
    hideInForm: true,
    hideInSearch: true,
    render: (_, record) => (
      <Tag color={record.registerable ? 'success' : 'error'}>
        <FormattedMessage
          id={record.registerable ? 'true' : 'false'}
          defaultMessage={record.registerable ? 'true' : 'false'}
        />
      </Tag>
    ),
  },
  {
    hideInSearch: false,
    hideInTable: true,
    title: <FormattedMessage id="parent_id_group" defaultMessage="parent_id_group" />,
    tooltip: <FormattedMessage id="parent_id_group_tooltip" />,
    dataIndex: 'parent_id',
    renderFormItem: (item, { type, defaultRender, ...rest }, form) => {
      if (type === 'form') {
        return null;
      }
      const stateType = form.getFieldValue('state');
      return (
        <UserGroupSelect
          {...rest}
          state={{
            type: stateType,
          }}
        />
      );
    },
  },
  {
    hideInSearch: true,
    title: <FormattedMessage id="parent_id_group" defaultMessage="parent_id_group" />,
    dataIndex: 'parent_id',
    render: (_, record) => {
      if (record.parent_id) {
        return (
          <TypeButtonDrawer
            type={'EscolaLms\\Auth\\Models\\UserGroup'}
            type_id={record.parent_id}
          />
        );
      }
      return (
        <React.Fragment>
          <FormattedMessage id="none" />
        </React.Fragment>
      );
    },
  },
];

const TreeModal: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [userGroupsWithChildren, setUserGroupsWithChildren] = useState<API.UserGroup[]>([]);

  useEffect(() => {
    setLoading(true);
    userGroupsTree({ per_page: -1, page: -1 })
      .then((data) => {
        if (data.success) {
          setUserGroupsWithChildren(data.data);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spin />;
  }

  return (
    <Tree
      branch={userGroupsWithChildren}
      titlePropName="name"
      childrenPropName="subgroups"
      keyPropName="id"
    />
  );
};

const TableList: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [data, setData] = useState<API.UserGroup[]>([]);
  const [showTree, setShowTree] = useState(false);

  const intl = useIntl();

  const groupHasChildren = useCallback(
    (id: number) => {
      return !!data.some((userGroup) => userGroup.parent_id === id);
    },
    [data],
  );

  return (
    <PageContainer>
      <Modal open={showTree} onCancel={() => setShowTree(false)} onOk={() => setShowTree(false)}>
        {showTree && <TreeModal />}
      </Modal>
      <ProTable<API.UserGroup, API.UserGroupsParams>
        headerTitle={intl.formatMessage({
          id: 'menu.Users.User Groups',
          defaultMessage: 'User Groups',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          layout: 'vertical',
        }}
        toolBarRender={() => [
          <Button key={'show_tree'} onClick={() => setShowTree(true)}>
            <FormattedMessage id="show_tree" defaultMessage="Show Tree" />
          </Button>,
          <Link to="/users/groups/new" key="new">
            <Button type="primary" key="primary">
              <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
            </Button>
          </Link>,
        ]}
        request={({ pageSize, current, search, parent_id }, sort) => {
          return userGroups({
            per_page: pageSize,
            page: current,
            search: search || undefined,
            parent_id,
            ...createTableOrderObject(sort, 'created_at'),
          }).then((response) => {
            if (response.success) {
              setData(response.data);
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
          ...TableColumns,
          {
            hideInSearch: true,
            title: <FormattedMessage id="pages.searchTable.titleOption" />,
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record) => [
              <Link to={`/users/groups/${record.id}`} key="edit">
                <Tooltip title={<FormattedMessage id="edit" defaultMessage="edit" />}>
                  <Button type="primary" icon={<EditOutlined />} />
                </Tooltip>
              </Link>,
              groupHasChildren(record.id) ? (
                <Tooltip
                  key="delete"
                  title={
                    <FormattedMessage
                      id="cantDelete"
                      defaultMessage="You can't delete this category because it's parent to others"
                    />
                  }
                >
                  <Button disabled={true} type="primary" icon={<DeleteOutlined />} danger />
                </Tooltip>
              ) : (
                <Popconfirm
                  key="delete"
                  title={
                    <FormattedMessage
                      id="deleteQuestion"
                      defaultMessage="Are you sure to delete this record?"
                    />
                  }
                  onConfirm={async () => {
                    const success = await handleRemove(record.id);
                    if (success) {
                      if (actionRef.current) {
                        actionRef.current.reload();
                      }
                    }
                  }}
                  okText={<FormattedMessage id="yes" />}
                  cancelText={<FormattedMessage id="no" />}
                >
                  <Tooltip title={<FormattedMessage id="delete" defaultMessage="delete" />}>
                    <Button type="primary" icon={<DeleteOutlined />} danger />
                  </Tooltip>
                </Popconfirm>
              ),
            ],
          },
        ]}
      />
    </PageContainer>
  );
};

export default TableList;
