import yup from '~/libs/yup';

const schema = yup.object().shape({
  password: yup.string().required().label('Senha'),
  password_confirmation: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], 'Senhas devem ser iguais')
    .label('Confirmar Senha'),
});

export default schema;
