import React, { useRef } from 'react';

import Button from '~/components/Button';
import Form from '~/components/Form';
import Input from '~/components/Input';
import useToast from '~/hooks/useToast';
import api from '~/services/api';
import yupValidate from '~/utils/yupValidate';
import updatePasswordSchema from '~/validators/updatePassword.schema';

import { Container } from './styles';

const Profile = ({ history }) => {
  const formRef = useRef(null);

  const toast = useToast();

  const handleSubmit = async (formData) => {
    try {
      formRef.current.setErrors({});

      const { success, data, errors } = await yupValidate(
        updatePasswordSchema,
        formData
      );

      if (!success) {
        throw errors;
      }

      await api.put('/user/me/password', data);

      return toast.successToast('Atualização feita com sucesso.');
    } catch (error) {
      if (error.response) {
        toast.errorToast('Erro ao atualizar sua senha, tente novamente.');
      }
      return formRef.current.setErrors(error);
    }
  };

  return (
    <Container>
      <Form title="Alterar Senha" width={500} ref={formRef} onSubmit={handleSubmit}>
        <Input
          type="password"
          name="current"
          placeholder="Senha Atual"
          variant="border"
          fullWidth
        />
        <Input
          type="password"
          name="password"
          placeholder="Nova Senha"
          variant="border"
          fullWidth
        />
        <Input
          type="password"
          name="password_confirmation"
          placeholder="Confirmar nova senha"
          variant="border"
          fullWidth
        />
        <Button color="primary" label="Salvar" fullWidth type="submit" />
      </Form>
    </Container>
  );
};

export default Profile;
