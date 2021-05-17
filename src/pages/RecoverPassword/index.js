/* eslint-disable react/prop-types */
import React, { useRef } from 'react';

import FadeIn from 'react-fade-in';
import { useParams } from 'react-router-dom';

import { ReactComponent as Logo } from '~/assets/logos/01.svg';
import Button from '~/components/Button';
import Form from '~/components/Form';
import Input from '~/components/Input';
import useToast from '~/hooks/useToast';
import api from '~/services/api';
import yupValidate from '~/utils/yupValidate';
import recoverPasswordSchema from '~/validators/recoverPassword.schema';

const RecoverPassword = ({ history }) => {
  const formRef = useRef(null);
  const toast = useToast();

  const { token } = useParams();

  const handleSubmit = async (formData) => {
    formRef.current.setErrors({});

    try {
      const { success, data, errors } = await yupValidate(
        recoverPasswordSchema,
        formData
      );

      if (!success) throw errors;

      const { password } = data;

      await api.post('/user/recover', { password, token });

      toast.successToast('Sua senha foi atualizada com sucesso.');

      return history.push('/login');
    } catch (error) {
      if (error.response) {
        return toast.errorToast('Erro ao tentar atualizar sua senha, tente novamente.');
      }
      return formRef.current.setErrors(error);
    }
  };

  return (
    <FadeIn>
      <Logo />
      <Form title="Restaurar Senha" width={350} ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="password"
          type="password"
          placeholder="Nova senha"
          variant="border"
          fullWidth
        />
        <Input
          name="password_confirmation"
          type="password"
          placeholder="Confirme a nova senha"
          variant="border"
          fullWidth
        />
        <Button color="primary" type="submit" label="Alterar senha" fullWidth />
      </Form>
    </FadeIn>
  );
};

export default RecoverPassword;
