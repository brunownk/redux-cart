import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import makeAnimated from 'react-select/animated';
import ReactSelectAsync from 'react-select/async';

import { Container, Label, Error } from './styles';

const Select = ({
  label,
  name,
  options,
  onChange,
  placeholder,
  isMulti,
  isSearchable,
  className,
  fullWidth,
  colorLabel,
  loadOptions,
  async,
  ...rest
}) => {
  const selectRef = useRef(null);

  const animatedComponents = makeAnimated();

  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  useEffect(() => {
    if (selectRef.current)
      registerField({
        name: fieldName,
        ref: selectRef.current,
        getValue: (ref) => {
          if (isMulti && async) {
            return ref.select.state.value.map((option) => option.value);
          }

          if (isMulti) {
            console.log(ref);
            if (!ref.state.value) {
              return [];
            }
            return ref.state.value.map((option) => option.value);
          }

          if (!ref.state.value) {
            return '';
          }

          return ref.state.value.value;
        },
      });
  }, [fieldName, registerField, isMulti, async]);

  useEffect(() => {
    if (options.length > 0 && defaultValue !== undefined) {
      const defaultOption = options.find((opt) => opt.value === defaultValue);
      selectRef.current.select.setValue(defaultOption);
    }
  }, [defaultValue, options]);

  const selectProps = {
    ref: selectRef,
    instanceId: fieldName,
    classNamePrefix: 'react-select',
    isMulti,
    isSearchable,
    options,
    onChange,
    placeholder,
    components: animatedComponents,
    noOptionsMessage: () => 'Nenhuma opcão',
    ...rest,
  };

  return (
    <Container className={`root-select ${className}`} fullWidth={fullWidth}>
      {label && (
        <Label htmlFor={fieldName} color={colorLabel}>
          {label}
        </Label>
      )}
      {async ? (
        <ReactSelectAsync {...selectProps} loadOptions={loadOptions} />
      ) : (
        <ReactSelect {...selectProps} />
      )}
      {error && <Error>{error}</Error>}
    </Container>
  );
};

Select.defaultProps = {
  onChange: () => {},
  loadOptions: () => {},
  options: [],
  className: '',
  colorLabel: '#ffffff',
  placeholder: 'Selecione...',
  fullWidth: true,
  async: false,
  isMulti: false,
  isSearchable: false,
};

Select.propTypes = {
  async: PropTypes.bool,
  fullWidth: PropTypes.bool,
  isMulti: PropTypes.bool,
  isSearchable: PropTypes.bool,
  colorLabel: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  loadOptions: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
};

export default Select;
