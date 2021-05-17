/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from 'react';

import Avatar from '~/components/Avatar';
import Button from '~/components/Button';
import Form from '~/components/Form';
import Input from '~/components/Input';
import Link from '~/components/Link';
import useToast from '~/hooks/useToast';
import api from '~/services/api';
import uploadPhoto from '~/utils/uploadPhoto';
import yupValidate from '~/utils/yupValidate';
import updateUserSchema from '~/validators/updateUser.schema';

import {
  Container,
  Title,
  AvatarBox,
  ImageInput,
  UploadButton,
  UploadButtonIcon,
} from './styles';

const Profile = ({ history }) => {
  const formRef = useRef(null);
  const hiddenFileInput = React.useRef(null);

  const toast = useToast();

  const [initialData, setInitialData] = useState({});

  const getInitialData = async () => {
    const response = await api.get('/user/me');

    setInitialData(response.data);
  };

  const handleSubmit = async (formData) => {
    try {
      formRef.current.setErrors({});

      const { success, data, errors } = await yupValidate(
        updateUserSchema,
        formData
      );

      if (!success) {
        throw errors;
      }

      const { email, name } = data;

      const userUpdate = {
        ...(email !== initialData.email && { email }),
        ...(name !== initialData.name && { name }),
      };

      await api.put('user/me', userUpdate);

      return toast.successToast('Atualização feita com sucesso.');
    } catch (error) {
      if (error.response) {
        toast.errorToast(
          'Erro ao atualizar suas informações, tente novamente.'
        );
      }
      return formRef.current.setErrors(error);
    }
  };

  const handleProfilePhoto = async (image) => {
    const { success, error, data } = await uploadPhoto(image, '/user/me/photo');

    if (!success) {
      return toast.errorToast('Erro ao fazer upload de foto.');
    }

    return setInitialData(data);
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <Container>
      <Title>Meu perfil</Title>

      <AvatarBox>
        <ImageInput
          onChange={(e) => handleProfilePhoto(e.target.files[0])}
          ref={hiddenFileInput}
        />
        <UploadButton onClick={() => hiddenFileInput.current.click()}>
          <UploadButtonIcon />
        </UploadButton>
        <Avatar size={100} src={initialData.photo} />
      </AvatarBox>

      <Form width={500} ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" />
        <Input noBorder name="email" placeholder="Email" />
        <Link label="Alterar Senha" to="/change-password" />
        <Button label="Salvar" color="primary" fullWidth type="submit" />
      </Form>
    </Container>
  );
};

export default Profile;
