import React, { useState, useEffect, useRef } from 'react';
import { Select, Spin } from 'antd';

import {
  userGroups as fetchUserGroups,
  userGroup as fetchUserGroup,
} from '@/services/escola-lms/user_groups';

import { FormattedMessage } from 'umi';
import { useCallback } from 'react';

export const UserGroupSelect: React.FC<{
  state?: {
    type: number;
  };
  multiple?: boolean;
  value?: string | string[] | number | number[];
  onChange?: (value: string | string[] | number | number[]) => void;
  onSelect?: (value: string | number) => void;
  onDeselect?: (value: string | number) => void;
  onClear?: () => void;
  loading?: boolean;
  disabled?: boolean;
}> = ({ value, onChange, onSelect, onDeselect, onClear, loading, disabled, multiple = false }) => {
  const [userGroups, setUserGroups] = useState<API.UserGroup[]>([]);
  const [fetching, setFetching] = useState(false);

  const cache = useRef<API.UserGroup[]>();
  const abortController = useRef<AbortController>();

  const setUsersFromResponse = useCallback((responseUserGroups: API.UserGroup[]) => {
    setUserGroups((prevUsers) =>
      [...prevUsers, ...responseUserGroups].filter(
        (userGroup, index, arr) =>
          arr.findIndex((fuserGroup) => fuserGroup.id === userGroup.id) === index,
      ),
    );
  }, []);

  useEffect(() => {
    cache.current = userGroups;
  }, [userGroups]);

  const fetch = useCallback(
    (search?: string) => {
      setFetching(true);
      if (abortController.current) {
        abortController.current.abort();
      }

      abortController.current = new AbortController();
      fetchUserGroups({ search, per_page: 30 }, { signal: abortController.current.signal })
        .then((response) => {
          if (response.success) {
            setUsersFromResponse(response.data);
          }
          setFetching(false);
        })
        .catch(() => setFetching(false));
    },
    [setUsersFromResponse],
  );

  const onSearch = useCallback(
    (search: string) => {
      fetch(search);
    },
    [fetch],
  );

  useEffect(() => {
    const controller = new AbortController();

    if (value) {
      const values = Array.isArray(value) ? value : [value];

      values
        .filter((id) => !cache.current?.find((user) => user.id === id))
        .forEach((v) => {
          fetchUserGroup(Number(v), { signal: controller.signal }).then((response) => {
            if (response && response.success) {
              setUsersFromResponse([response.data]);
            }
          });
        });
    }
    return () => {
      controller.abort();
    };
  }, [value, setUsersFromResponse]);

  return (
    <Select
      onSelect={onSelect}
      onDeselect={onDeselect}
      onClear={onClear}
      loading={loading}
      disabled={disabled}
      onFocus={() => fetch()}
      allowClear
      style={{ width: '100%' }}
      value={value}
      onChange={onChange}
      mode={multiple ? 'multiple' : undefined}
      showSearch
      onSearch={onSearch}
      placeholder={<FormattedMessage id="select_user_group" defaultMessage="Select user group" />}
      optionFilterProp="children"
      filterOption={(input, option) => {
        if (option && option.children) {
          return option?.children?.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
        return true;
      }}
      notFoundContent={fetching ? <Spin size="small" /> : null}
    >
      {userGroups.map((userGroup) => (
        <Select.Option key={userGroup.id} value={userGroup.id}>
          {userGroup.name_with_breadcrumbs}
        </Select.Option>
      ))}
    </Select>
  );
};

export default UserGroupSelect;
