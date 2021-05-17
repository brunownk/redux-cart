/* eslint-disable react/prop-types */
import React, { useRef } from 'react';

import FadeIn from 'react-fade-in';

import { ReactComponent as Logo } from '~/assets/logos/01.svg';
import Button from '~/components/Button';
import Form from '~/components/Form';
import Input from '~/components/Input';
import useToast from '~/hooks/useToast';
import api from '~/services/api';
import yupValidate from '~/utils/yupValidate';
import forgotPasswordSchema from '~/validators/forgotPassword.schema';

const ForgotPassword = ({ history }) => {
  const formRef = useRef(null);
  const toast = useToast();

  const handleSubmit = async (formData) => {
    formRef.current.setErrors({});

    try {
      const { success, data, errors } = await yupValidate(
        forgotPasswordSchema,
        formData
      );

      if (!success) {
        throw errors;
      }

      await api.post('/user/forgot', { ...data, device: 'web' });

      toast.successToast(
        'Solicitação feita com sucesso, enviamos um email para recuperação da senha'
      );

      return history.push('/login');
    } catch (error) {
      if (error.response) {
        return toast.errorToast(
          'Erro ao tentar recuperar sua senha, tente novamente.'
        );
      }
      return formRef.current.setErrors(error);
    }
  };

  return (
    <FadeIn>
      <Logo />
      <Form title="Esqueci minha senha" width={350} ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="email"
          placeholder="E-mail"
          variant="border"
          fullWidth
        />
        <Button color="primary" type="submit" label="Recuperar senha" fullWidth />
        <Button color="primary" variant="link" label="Voltar para Login" fullWidth onClick={() => history.push('/login')} />
      </Form>
    </FadeIn>
  );
};

export default ForgotPassword;
