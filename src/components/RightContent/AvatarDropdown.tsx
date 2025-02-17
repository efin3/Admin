import React, { useCallback } from 'react';
import { LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { Spin, message } from 'antd';
import type { MenuProps } from 'antd';
import { history, useModel, FormattedMessage } from 'umi';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';
import { logout } from '@/services/escola-lms/auth';
import type { MenuInfo } from 'rc-menu/lib/interface';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = () => {
  const { initialState, setInitialState } = useModel('@@initialState');

  const loginOut = useCallback(async () => {
    const msg = await logout();
    if (msg.success) {
      localStorage.removeItem('TOKEN');
      message.success(msg.message);

      const { query = {} } = history.location;
      const { redirect } = query;
      if (window.location.pathname !== '/user/login' && !redirect) {
        setInitialState({ ...initialState, currentUser: undefined });
      }
    } else {
      message.error(msg.message);
    }
  }, [initialState, setInitialState]);

  const onMenuClick = useCallback(
    (event: MenuInfo) => {
      const { key } = event;
      if (key === 'logout' && initialState) {
        loginOut();
        return;
      }
      history.push(`/${key}`);
    },
    [initialState, setInitialState],
  );

  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );

  if (!initialState) {
    return loading;
  }

  const { currentUser } = initialState;

  if (!currentUser || !currentUser?.id) {
    return loading;
  }

  const menu2: MenuProps = {
    selectedKeys: [],
    onClick: (info) => onMenuClick(info),
    items: [
      {
        label: (
          <React.Fragment>
            <SettingOutlined /> <FormattedMessage id="my_profile" />
          </React.Fragment>
        ),
        key: 'my-profile',
      },
      {
        type: 'divider',
      },
      {
        label: (
          <React.Fragment>
            <LogoutOutlined /> <FormattedMessage id="logout" />
          </React.Fragment>
        ),
        key: 'logout',
      },
    ],
  };

  return (
    <HeaderDropdown menu={menu2} className="avatar-dropdown">
      <span className={`${styles.action} ${styles.account}`}>
        <span className={`${styles.name} anticon`}>{currentUser.name}</span>
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
