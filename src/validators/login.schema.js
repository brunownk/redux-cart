import yup from '~/libs/yup';

const schema = yup.object().shape({
  email: yup.string().email().required().label('E-mail'),
  password: yup.string().required().label('Senha'),
});

export default schema;
