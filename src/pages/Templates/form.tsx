import React, { useState, useEffect } from 'react';
import { Divider, message, Space, Spin, Tag, Typography } from 'antd';
import ProForm, { ProFormText, ProFormSelect, ProFormCheckbox } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import {
  template as fetchTemplate,
  updateTemplate,
  createTemplate,
} from '@/services/escola-lms/templates';
import { PageContainer } from '@ant-design/pro-layout';
import PreviewButton from './components/PreviewButton';
import { useParams, history, useIntl, FormattedMessage } from 'umi';
import { useCallback } from 'react';
import TemplateFields from '@/components/TemplateFields';
import { variables as fetchVariables } from '@/services/escola-lms/templates';

const objectToKeysDict = (obj: Object): Record<string, string> =>
  obj ? Object.keys(obj).reduce((acc, curr) => ({ ...acc, [curr]: curr }), {}) : {};

// creates sections collections for post template
const createEntries = (data: Record<string, string>) => {
  return Object.entries(data).map((entry) => {
    return {
      key: entry[0],
      content: entry[1],
    };
  });
};

const objectFlatten = (data: Record<string, string>[]): Record<string, string> =>
  Object.assign({}, ...data);

// helper function that throws away unnecessary keys to create a sections collection
const filterNotAllowedKeys = (values: object) => {
  const notAllowedKeys = ['name', 'event', 'default'];
  return Object.keys(values)
    .filter((key) => !notAllowedKeys.includes(key))
    .reduce((obj, key) => {
      obj[key] = values[key];
      return obj;
    }, {});
};

type Tokens = {
  assignableClass: string | null;
  class: string;
  required_variables: string[];
  variables: string[];
  sections: {
    [key: string]: API.TemplateField;
  };
};

const channels = {
  email: 'EscolaLms\\TemplatesEmail\\Core\\EmailChannel',
};

export default () => {
  const intl = useIntl();
  const params = useParams<{ template: string; id: string }>();

  const { template, id } = params;

  const isNew = id === 'new';

  const [saved, setSaved] = useState<boolean>(false);
  const [form] = ProForm.useForm();
  const [variables, setVariables] = useState<API.TemplateVariables>();
  const [tokens, setTokens] = useState<Tokens | undefined>(undefined);

  useEffect(() => {
    fetchVariables().then((response) => {
      setVariables(response.success ? response.data : {});
    });
  }, []);

  useEffect(() => {
    const values = form.getFieldsValue();

    const defaultValues =
      tokens &&
      Object.keys(tokens.sections).map((section) => {
        return {
          [section]: tokens.sections[section].default_content,
        };
      });

    if (defaultValues && isNew) {
      form.setFieldsValue({
        ...values,
        ...objectFlatten(defaultValues),
      });
    }
  }, [tokens]);

  const handleSetTokens = useCallback(
    (event: string) => {
      if (event && template) {
        const _tokens = variables && (variables[event][channels[template]] as unknown);

        setTokens(_tokens as Tokens);
      }
    },
    [variables, id],
  );

  const fetchData = useCallback(async () => {
    const response = await fetchTemplate(Number(id));
    if (response.success) {
      const map =
        response.data.sections &&
        response.data.sections.map((item) => {
          return {
            [item.key]: item.content,
          };
        });

      const obj = map && objectFlatten(map);

      form.setFieldsValue({
        ...response.data,
        ...obj,
      });
      handleSetTokens(String(response.data.event));
      setSaved(true);
    }
  }, [id, variables]);

  const onFormFinish = useCallback(
    async (values: Partial<API.Template>) => {
      let response: API.DefaultResponse<API.Template>;

      const postData: Partial<API.Template> = {
        ...values,
        channel: channels[template],
        sections: createEntries(filterNotAllowedKeys(values)),
      };

      if (isNew) {
        response = await createTemplate(postData);
        if (response.success) {
          history.push(`/templates/${response.data.id}`);
        }
      } else {
        response = await updateTemplate(Number(id), postData);
      }
      setSaved(true);
      message.success(response.message);
    },
    [variables, id],
  );

  useEffect(() => {
    if (isNew) {
      return;
    }

    fetchData();
  }, [id, variables]);

  return (
    <PageContainer
      title={
        isNew ? <FormattedMessage id="new_template" /> : <FormattedMessage id="new_template" />
      }
    >
      <ProCard size="small">
        <ProForm
          initialValues={{}}
          onFinish={onFormFinish}
          form={form}
          onValuesChange={() => {
            const values = form.getFieldsValue();
            handleSetTokens(values.event);
            setSaved(false);
          }}
        >
          <ProForm.Group>
            <ProFormText
              width="sm"
              name="name"
              label={<FormattedMessage id="name" />}
              placeholder={intl.formatMessage({
                id: 'name',
              })}
              rules={[{ required: true, message: <FormattedMessage id="select" /> }]}
            />
            <ProFormSelect
              name="event"
              width="lg"
              label={<FormattedMessage id="event" />}
              valueEnum={variables ? objectToKeysDict(variables) : {}}
              placeholder={intl.formatMessage({
                id: 'event',
              })}
              rules={[{ required: true, message: <FormattedMessage id="select" /> }]}
            />

            <ProForm.Item label={<FormattedMessage id="templates.set_as_default_template" />}>
              <ProFormCheckbox name="default" />
            </ProForm.Item>
            {!isNew && (
              <ProForm.Item label={<FormattedMessage id="preview" />}>
                <PreviewButton disabled={!saved} id={Number(template)} />
              </ProForm.Item>
            )}
          </ProForm.Group>

          {!tokens && !isNew ? (
            <Spin />
          ) : (
            tokens &&
            tokens.sections &&
            Object.keys(tokens.sections).map((section, index) => {
              const fieldItem = tokens.sections && tokens.sections[section];

              return (
                <React.Fragment>
                  {index === 0 && (
                    <React.Fragment>
                      <Divider>
                        <FormattedMessage id="templates.tokens" />
                      </Divider>
                      <Space>
                        <Typography>
                          {tokens.variables.map((token) => (
                            <Tag color="orange" key={token}>
                              {token}
                            </Tag>
                          ))}
                        </Typography>
                      </Space>
                    </React.Fragment>
                  )}
                  <Divider />
                  <TemplateFields name={section} field={fieldItem} />
                </React.Fragment>
              );
            })
          )}
          <Divider />
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};
