import React, { useCallback, useRef } from 'react';
import { format } from 'date-fns';
import { useIntl, FormattedMessage, Link } from 'umi';
import { Button, Tag, Tooltip } from 'antd';
import ProTable from '@ant-design/pro-table';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { FileSearchOutlined } from '@ant-design/icons';

import type { ProTableRequest } from '@/types';
import { DATETIME_FORMAT } from '@/consts/dates';
import { getQuizAttempts } from '@/services/escola-lms/gift_quiz';
import UserSelect from '@/components/UserSelect';
import CourseSelect from '@/components/CourseSelect';
import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import { createTableOrderObject } from '@/utils/utils';

export const GiftQuizTableColumns: ProColumns<API.GiftQuiz>[] = [
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'id',
    width: '80px',
  },
  {
    title: <FormattedMessage id="value" defaultMessage="value" />,
    dataIndex: 'value',
  },
  {
    title: <FormattedMessage id="max_attempts" defaultMessage="max_attempts" />,
    dataIndex: 'max_attempts',
  },
  {
    title: <FormattedMessage id="max_execution_time" defaultMessage="max_execution_time" />,
    dataIndex: 'max_execution_time',
  },
];

export const TableColumns: ProColumns<API.QuizAttempt>[] = [
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'id',
    hideInSearch: true,
    sorter: true,
    defaultSortOrder: 'descend',
    width: '80px',
  },
  {
    title: <FormattedMessage id="gift_quiz" defaultMessage="GIFT Quiz" />,
    dataIndex: 'topic_gift_quiz_id',
    hideInSearch: true,
    render: (_, record) => (
      <TypeButtonDrawer
        type="EscolaLms\TopicTypeGift\Models\GiftQuiz"
        type_id={record.topic_gift_quiz_id}
      />
    ),
  },
  {
    title: <FormattedMessage id="dateRange" defaultMessage="Date Range" />,
    dataIndex: 'dateRange',
    hideInSearch: false,
    hideInForm: true,
    hideInTable: true,
    valueType: 'dateRange',
    fieldProps: {
      allowEmpty: [true, true],
    },
  },
  {
    title: <FormattedMessage id="course" />,
    dataIndex: 'course_id',
    renderFormItem: (_s, { type, ...rest }, form) => {
      if (type === 'form') {
        return null;
      }
      const stateType = form.getFieldValue('state');
      return (
        <CourseSelect
          {...rest}
          state={{
            type: stateType,
          }}
        />
      );
    },
    render: (_n, record) =>
      typeof record?.course?.id === 'number' ? (
        <TypeButtonDrawer
          type="EscolaLms\Cart\Models\Course"
          type_id={record.course.id}
          text={record?.course?.title}
        />
      ) : (
        '-'
      ),
  },
  {
    title: <FormattedMessage id="student" defaultMessage="Student" />,
    dataIndex: 'user_id',
    renderFormItem: (_s, { type, ...rest }, form) => {
      if (type === 'form') {
        return null;
      }
      const stateType = form.getFieldValue('state');
      return (
        <UserSelect
          {...rest}
          state={{
            type: stateType,
          }}
        />
      );
    },
    render: (_, record) => (
      <TypeButtonDrawer
        type="EscolaLms\Core\Models\User"
        type_id={record.user_id}
        text={
          record?.user?.first_name && record?.user?.last_name
            ? `${record.user.first_name} ${record.user.last_name}`
            : undefined
        }
      />
    ),
  },
  {
    title: <FormattedMessage id="result_score" defaultMessage="Result score" />,
    dataIndex: 'result_score',
    hideInSearch: true,
    sorter: true,
  },
  {
    title: <FormattedMessage id="max_score" defaultMessage="Max score" />,
    dataIndex: 'max_score',
    hideInSearch: true,
    sorter: true,
  },
  {
    title: <FormattedMessage id="started_at" defaultMessage="Started at" />,
    dataIndex: 'started_at',
    hideInSearch: true,
    sorter: true,
    render: (_, record) => format(new Date(record.started_at), DATETIME_FORMAT),
  },
  {
    title: <FormattedMessage id="end_at" defaultMessage="End at" />,
    dataIndex: 'end_at',
    hideInSearch: true,
    sorter: true,
    render: (_, record) =>
      record.end_at ? (
        format(new Date(record.end_at), DATETIME_FORMAT)
      ) : (
        <Tag>
          <FormattedMessage id="uncompleted" defaultMessage="uncompleted" />
        </Tag>
      ),
  },
  {
    hideInSearch: true,
    title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="option" />,
    dataIndex: 'option',
    valueType: 'option',
    render: (_, record) => (
      <Link to={`/courses/quiz-reports/${record.id}`} key="details">
        <Tooltip title={<FormattedMessage id="details" defaultMessage="details" />}>
          <Button icon={<FileSearchOutlined />} />
        </Tooltip>
      </Link>
    ),
  },
];

const QuizAttempts: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const intl = useIntl();

  const onRequest = useCallback<ProTableRequest<API.QuizAttempt, API.QuizAttemptsParams>>(
    async ({ current, pageSize, topic_gift_quiz_id, dateRange, course_id, user_id }, sort) => {
      const date_from = dateRange?.[0]
        ? format(new Date(dateRange[0]), DATETIME_FORMAT)
        : undefined;
      const date_to = dateRange?.[1] ? format(new Date(dateRange[1]), DATETIME_FORMAT) : undefined;

      const res = await getQuizAttempts({
        per_page: pageSize,
        page: current,
        topic_gift_quiz_id,
        date_from,
        date_to,
        course_id,
        user_id,
        ...createTableOrderObject(sort, 'id'),
      });

      if (!res.success) {
        return { data: [], total: 0, success: false };
      }

      return {
        data: res.data,
        total: res.meta.total,
        success: true,
      };
    },
    [],
  );

  return (
    <PageContainer>
      <ProTable<API.QuizAttempt, API.QuizAttemptsParams>
        headerTitle={intl.formatMessage({
          id: 'quiz_reports',
          defaultMessage: 'Quiz Reports',
        })}
        search={{
          layout: 'vertical',
        }}
        actionRef={actionRef}
        rowKey="id"
        request={onRequest}
        columns={TableColumns}
      />
    </PageContainer>
  );
};

export default QuizAttempts;
