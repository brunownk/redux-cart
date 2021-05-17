import yup from '~/libs/yup';

const schema = yup.object().shape({
  current: yup.string().required().label('Senha Atual'),
  password: yup.string().required().label('Nova Senha'),
  password_confirmation: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], 'Senhas devem ser iguais')
    .label('Confirmar Nova Senha'),
});

export default schema;
