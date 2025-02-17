import React, { useContext, useMemo } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { ProFormTreeSelect } from '@ant-design/pro-form';
import { Context } from '@/components/ProgramForm/Context';
import type { DefaultOptionType } from 'antd/es/select';

type TreeData = Omit<DefaultOptionType, 'label'>;

const traverse = (
  lessons: API.Lesson[],
  disabledLessonId?: number,
  disableNested?: boolean,
): TreeData[] =>
  lessons.reduce<TreeData[]>((acc, lesson) => {
    const disabled = disabledLessonId === lesson.id;

    return [
      ...acc,
      {
        value: lesson.id,
        title: lesson.title,
        label: lesson.title,
        disabled: disableNested || disabled,
        children: traverse(lesson?.lessons ?? [], disabledLessonId, disabled || disableNested),
      },
    ];
  }, []);

interface Props {
  name: string;
  currentLessonId?: number;
}

export const ParentLesson: React.FC<Props> = ({ name, currentLessonId }) => {
  const intl = useIntl();
  const { state } = useContext(Context);

  const treeData: TreeData[] = useMemo(
    () => [
      {
        // This have to be empty string
        value: '',
        title: intl.formatMessage({
          id: 'root',
          defaultMessage: 'Root',
        }),
        label: intl.formatMessage({
          id: 'root',
          defaultMessage: 'Root',
        }),
        children: traverse(state?.lessons ?? [], currentLessonId),
      },
    ],
    [state, currentLessonId],
  );

  return (
    <div className="tree-select">
      <ProFormTreeSelect
        name={name}
        label={<FormattedMessage id="parent_lesson" />}
        fieldProps={{ treeData, treeDefaultExpandAll: true, treeLine: true }}
      />
    </div>
  );
};
