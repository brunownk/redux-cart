import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';
import { HuePicker as ColorPicker } from 'react-color';

import { Container, Content, Preview, Label, Error } from './styles';

const HuePicker = ({ label, name, colorLabel }) => {
  const colorPickerRef = useRef(null);

  const {
    fieldName,
    registerField,
    defaultValue = '#ffffff',
    error,
  } = useField(name);
  const [color, setState] = useState(defaultValue);

  useEffect(() => {
    if (colorPickerRef.current)
      registerField({
        name: fieldName,
        ref: colorPickerRef.current,
        path: 'state.hex',
      });
  }, [fieldName, registerField, colorPickerRef.value]);

  const handleChange = useCallback(({ hex }) => {
    setState(hex);
  }, []);

  return (
    <Container className="root-color-picker">
      <Label htmlFor="color-picker" color={colorLabel}>
        {label}
      </Label>
      <Content>
        <ColorPicker
          ref={colorPickerRef}
          width="100%"
          color={color}
          onChange={handleChange}
        />
        <Preview color={color} />
      </Content>
      {error && <Error>{error}</Error>}
    </Container>
  );
};

HuePicker.defaultProps = {
  colorLabel: '#FFFFFF',
};

HuePicker.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  colorLabel: PropTypes.string,
};

export default HuePicker;
