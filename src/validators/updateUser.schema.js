import yup from '~/libs/yup';

const schema = yup.object().shape({
  name: yup.string().label('Nome'),
  email: yup.string().email().label('E-mail'),
});

export default schema;
