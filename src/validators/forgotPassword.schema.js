import yup from '~/libs/yup';

const schema = yup.object().shape({
  email: yup.string().email().required().label('E-mail'),
});

export default schema;
