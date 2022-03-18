import React from 'react';
import InputColor from '@/components/FabricEditor/fields/InputColor';
import FabricInput from '@/components/FabricEditor/fields/FabricInput';
import FabricSelect from '@/components/FabricEditor/fields/FabricSelect';
import { Col, Input, Row } from 'antd';
import type { ActiveElementFieldName, ActiveElementState } from '@/components/FabricEditor/types';
import { OBJECT_STROKE_WIDTH as STROKE_WIDTH } from '@/components/FabricEditor/consts';
import { FormattedMessage, useIntl } from 'umi';

const FabricEditorObjectForm: React.FC<{
  values: ActiveElementState;
  onChange: (propName: ActiveElementFieldName) => (value: number | string | boolean) => void;
}> = ({ values, onChange }) => {
  const intl = useIntl();
  return (
    <div className="fabric-editor__form fabric-editor__form--active-element">
      <h3 className="fabric-editor__form-title">
        <FormattedMessage id="fabric.object_options" />
      </h3>

      <Row gutter={20}>
        <Col>
          <InputColor
            value={values.fill}
            onChange={onChange('fill')}
            label={intl.formatMessage({ id: 'fabric.background_color' })}
            name="fill"
          />
        </Col>

        <Col>
          <Row gutter={10}>
            <Col>
              <Input.Group compact>
                <InputColor
                  value={values.stroke}
                  onChange={onChange('stroke')}
                  label={intl.formatMessage({ id: 'fabric.stroke_color' })}
                  name={'stroke'}
                />

                <FabricSelect
                  value={values.strokeWidth}
                  onChange={onChange('strokeWidth')}
                  label={intl.formatMessage({ id: 'fabric.stroke_width' })}
                  name={'strokeWidth'}
                  options={STROKE_WIDTH.map((f) => ({ value: f, label: '' + f }))}
                  style={{ minWidth: '65px' }}
                />
              </Input.Group>
            </Col>
            <Col>
              <FabricInput
                value={values.opacity}
                onChange={onChange('opacity')}
                label={'Opacity'}
                name={'opacity'}
                type="range"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default FabricEditorObjectForm;
