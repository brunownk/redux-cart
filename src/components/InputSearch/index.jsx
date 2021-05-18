import React, { useRef, useState, useCallback } from 'react';

import { Form } from '@unform/web';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';

import yupValidate from '~/utils/yupValidate';
import inputSearchSchema from '~/validators/inputSearch.schema';

import { Container, ButtonSearch, Input } from './styles';

const InputSearch = ({
  maxWidth,
  name,
  placeholder,
  marginAuto,
  height,
  backgroundColor,
}) => {
  const [isFocused, setiIsFocused] = useState(false);

  const formRef = useRef(null);

  const handleSubmitForm = useCallback(async () => {
    try {
      formRef.current.setErrors({});
      const { errors } = await yupValidate(inputSearchSchema);

      if (Object.keys(errors).length !== 0) {
        throw errors;
      }
    } catch (error) {
      formRef.current.setErrors(error);
    }
  }, []);

  const handleChangeForm = useCallback(async () => {
    inputSearchSchema.isValid({ name }).then(() => {});
  }, [name]);

  return (
    <Container
      maxWidth={maxWidth}
      isFocused={isFocused}
      marginAuto={marginAuto}
      height={height}
    >
      <Form onSubmit={handleSubmitForm}>
        <Input
          name={name}
          placeholder={placeholder}
          backgroundColor={backgroundColor}
          onChange={handleChangeForm}
          onFocus={() => setiIsFocused(true)}
          onBlur={() => setiIsFocused(false)}
        />
        <ButtonSearch type="submit">
          <AiOutlineSearch size={20} />
        </ButtonSearch>
      </Form>
    </Container>
  );
};

export default InputSearch;

InputSearch.defaultProps = {
  maxWidth: true,
  marginAuto: false,
  height: 0,
  backgroundColor: '#FFFFFF',
};

InputSearch.propTypes = {
  maxWidth: PropTypes.bool,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  marginAuto: PropTypes.bool,
  height: PropTypes.number,
  backgroundColor: PropTypes.string,
};
