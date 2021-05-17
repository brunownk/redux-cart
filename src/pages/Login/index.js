import React, { useRef } from 'react';

import FadeIn from 'react-fade-in';
import { useDispatch } from 'react-redux';

import { ReactComponent as Logo } from '~/assets/logos/01.svg';
import Button from '~/components/Button';
import Form from '~/components/Form';
import Input from '~/components/Input';
import Link from '~/components/Link';
import LoadingModal from '~/components/LoadingModal';
import { signInRequest } from '~/store/modules/auth/actions';
import yupValidate from '~/utils/yupValidate';
import loginSchema from '~/validators/login.schema';

const Login = ({ history }) => {
  const formRef = useRef(null);
  const loadingRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = async (formData) => {
    loadingRef.current.open();

    formRef.current.setErrors({});

    try {
      const { success, data, errors } = await yupValidate(
        loginSchema,
        formData
      );

      if (!success) {
        throw errors;
      }

      dispatch(signInRequest(data));
    } catch (error) {
      formRef.current.setErrors(error);
    }

    loadingRef.current.close();
  };

  return (
    <>
      <FadeIn>
      <Logo />
        <Form title="Entrar" width={350} ref={formRef} onSubmit={handleSubmit}>
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
          <Link label="Esqueci minha senha" to="/forgot-password" />
          <Button color="primary" type="submit" label="Login" fullWidth />
          <Button
            color="primary" 
            variant="outline"
            label="Criar conta"
            fullWidth
            onClick={() => history.push('/register')}
          />
        </Form>
      </FadeIn>
      <LoadingModal ref={loadingRef} />
    </>
  );
};

export default Login;
