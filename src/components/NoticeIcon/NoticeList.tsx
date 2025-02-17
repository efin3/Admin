import { List, Avatar, Button } from 'antd';
import React from 'react';
import classNames from 'classnames';
import styles from './NoticeList.less';
import { getEventType } from '@/pages/Notifications';
import { format } from 'date-fns';
import { DATETIME_FORMAT } from '@/consts/dates';
import { FormattedMessage } from 'umi';

export type NoticeIconTabProps = {
  count?: number;
  showClear?: boolean;
  showViewMore?: boolean;
  style?: React.CSSProperties;
  title: string;
  tabKey: string;
  onClick?: (item: API.Notification) => void;
  onClear?: () => void;
  emptyText?: string;
  clearText?: string;
  viewMoreText?: string;
  list: API.Notification[];
  onViewMore?: (e: any) => void;
  listLength?: number;
  lastElementRef: (node: HTMLDivElement) => void;
};
const NoticeList: React.FC<NoticeIconTabProps> = ({
  list = [],
  onClick,
  onClear,
  // title,
  // onViewMore,
  emptyText,
  showClear = true,
  clearText,
  // viewMoreText,
  // showViewMore = false,
  // event,
  listLength = 0,
  lastElementRef,
}) => {
  if (!list || list.length === 0) {
    return (
      <div className={styles.notFound}>
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg"
          alt="not found"
        />
        <div>{emptyText}</div>
      </div>
    );
  }

  return (
    <div>
      <List<API.Notification>
        className={styles.list}
        dataSource={list}
        renderItem={(item, i) => {
          const itemCls = classNames(styles.item, {
            [styles.read]: item.read_at,
          });
          // eslint-disable-next-line no-nested-ternary
          const leftIcon = (
            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>!</Avatar>
          );
          const isLastElement = i === listLength - 1;

          return (
            <List.Item
              className={itemCls}
              key={item.id || i}
              onClick={() => {
                onClick?.(item);
              }}
            >
              <List.Item.Meta
                className={styles.meta}
                avatar={leftIcon}
                title={
                  <div className={styles.title}>
                    {item.event && (
                      <FormattedMessage id={`notifications.${getEventType(item.event)}`} />
                    )}
                    {/* <div className={styles.extra}>Notify</div> */}
                  </div>
                }
                description={
                  isLastElement ? (
                    <div ref={lastElementRef}>
                      {/* <div className={styles.description}>{item.description}</div> */}
                      <div className={styles.datetime}>
                        {format(new Date(item.created_at), DATETIME_FORMAT)}
                      </div>
                    </div>
                  ) : (
                    <div>
                      {/* <div className={styles.description}>{item.description}</div> */}
                      <div className={styles.datetime}>
                        {format(new Date(item.created_at), DATETIME_FORMAT)}
                      </div>
                    </div>
                  )
                }
              />
            </List.Item>
          );
        }}
      />
      {/* TODO: if you need bottom bar for some action ex: clear all */}
      <div className={styles.bottomBar}>
        {showClear ? (
          <div>
            <Button type="primary" key="primary" onClick={onClear}>
              {clearText}
            </Button>
          </div>
        ) : null}
        {/* {showViewMore ? (
          <div
            onClick={(e) => {
              if (onViewMore) {
                onViewMore(e);
              }
            }}
          >
            {viewMoreText}
          </div>
        ) : null} */}
      </div>
    </div>
  );
};

export default NoticeList;
