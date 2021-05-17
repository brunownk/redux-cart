import React, { useEffect, useState, useRef } from 'react';

import { useParams } from 'react-router-dom';

import Button from '~/components/Button';
import Form from '~/components/Form';
import Input from '~/components/Input';
import Avatar from '~/components/Avatar';
import useToast from '~/hooks/useToast';
import api from '~/services/api';
import yupValidate from '~/utils/yupValidate';
import updateUserSchema from '~/validators/updateUser.schema';

import { Container, Title } from './styles';

const ManageUsers = ({ history }) => {
  const formRef = useRef();

  const { id } = useParams();
  const toast = useToast();

  const [initialData, setInitialData] = useState({});

  const getInitialData = async () => {
    const response = await api.get(`user/${id}`);

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

      await api.put(`user/${id}`, userUpdate);

      return toast.successToast('Atualização feita com sucesso.');
    } catch (error) {
      if (error.response) {
        toast.errorToast(
          'Erro ao atualizar dados do usuário, tente novamente.'
        );
      }
      return formRef.current.setErrors(error);
    }
  };

  useEffect(() => {
    if (id) {
      getInitialData();
    }
  }, [id]);

  return (
    <Container>
      <Title>Editar usuário</Title>
      <Avatar size={100}  src={initialData.photo} />

      <Form width={500} ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" />
        <Input name="email" placeholder="Email" />
        <Button color="primary" label="Salvar" fullWidth type="submit" />
      </Form>
    </Container>
  );
};

export default ManageUsers;
