import React, { useState, useEffect, useRef } from 'react';

import { Pagination } from '@material-ui/lab';

import Button from '~/components/Button';
import Modal from '~/components/Modal';
import Table from '~/components/Table';
import TableActions from '~/components/TableActions';
import api from '~/services/api';
import useToast from '~/hooks/useToast';

import { Container, Title, Head, Controls } from './styles';

const Dashboard = ({ history }) => {
  const toast = useToast();

  const [users, setUsers] = useState([]);
  const [paginate, setPaginate] = useState({
    page: 1,
    totalPages: 1,
  });
  const [itemToDelete, setItemToDelete] = useState('');

  const modalRef = useRef(null);

  const userTableConfig = [
    {
      key: 'name',
      label: 'Nome',
    },
    {
      key: 'email',
      label: 'Email',
    },
    {
      key: 'role',
      label: 'Permissão',
      format: (role) => {
        const type = { admin: 'Administrador', user: 'Usuário' };

        return type[role];
      },
    },
    {
      key: '_id',
      label: '',
      format: (_id) => (
        <TableActions
          onEdit={() => history.push(`/users/${_id}`)}
          onDelete={() => {
            setItemToDelete(_id);
            modalRef.current.open();
          }}
        />
      ),
    },
  ];

  const deleteItem = async () => {
    try {
      await api.delete(`user/${itemToDelete}`);

      const newUserList = users.filter((user) => itemToDelete !== user._id);

      setUsers(newUserList);

      modalRef.current.close();
    } catch (error) {
      toast.errorToast('Erro ao deletar usuário, tente novamente!');
    }
  };

  const getData = async () => {
    try {
      const response = await api.get('user');

      const { page, totalPages } = response.data;

      setPaginate({ page, totalPages });
      setUsers(response.data.data);
    } catch (error) {
      toast.errorToast('Erro ao obter lista de usuários, tente novamente!');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container>
        <Head>
          <Title>Gerenciar Usuários</Title>
          <Table columns={userTableConfig} rows={users} />
          <Pagination
            count={paginate.totalPages}
            page={paginate.page}
            shape="rounded"
          />
        </Head>
      </Container>
      <Modal modalRef={modalRef} title="Deseja mesmo excluir esse usuário?">
        <Controls>
          <Button label="Cancelar" onClick={() => modalRef.current.close()} />
          <Button color="danger" label="Excluir" onClick={deleteItem} />
        </Controls>
      </Modal>
    </>
  );
};

export default Dashboard;
