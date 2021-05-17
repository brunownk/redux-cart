
import React, { useRef } from 'react';

import FadeIn from 'react-fade-in';

import { ReactComponent as Logo } from '~/assets/logos/01.svg';
import Button from '~/components/Button';
import Form from '~/components/Form';
import Input from '~/components/Input';
import Link from '~/components/Link';
import useToast from '~/hooks/useToast';
import api from '~/services/api';
import yupValidate from '~/utils/yupValidate';
import registerSchema from '~/validators/register.schema';

const Register = ({ history }) => {
  const formRef = useRef(null);
  const toast = useToast();

  const handleSubmit = async (formData) => {
    try {
      formRef.current.setErrors({});

      const { success, data, errors } = await yupValidate(
        registerSchema,
        formData
      );

      if (!success) {
        throw errors;
      }

      await api.post('user', data);

      toast.successToast(
        'Cadastro feito com sucesso, Use os dados para fazer login.'
      );

      return history.push('/login');
    } catch (error) {
      if (error.response) {
        toast.errorToast('Erro no cadastro, tente novamente.');
      }
      return formRef.current.setErrors(error);
    }
  };

  return (
    <FadeIn>
      <Logo />
      <Form title="Cadastrar" width={350} ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" variant="border" fullWidth />
        <Input
          name="email"
          placeholder="E-mail"
          variant="border"
          fullWidth
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          variant="border"
          fullWidth
        />
        <Input
          type="password"
          name="password_confirmation"
          placeholder="Confirmar senha"
          variant="border"
          fullWidth
        />
        <Button color="primary" type="submit" label="Cadastrar" fullWidth />
        <Link label="Voltar para o login" to="/login" />
      </Form>
    </FadeIn>
  );
};

export default Register;
