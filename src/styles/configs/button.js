import { Colors } from '../defaults';

export const colors = {
  default: {
    color: '#707070',
    border: '#eeeeee',
    background: 'transparent',
  },
  primary: {
    color: Colors.input_label,
    border: Colors.card_background,
    background: Colors.card_background,
  },
  secondary: {
    color: '#fff',
    border: Colors.links,
    background: Colors.links,
  },
  success: {
    color: '#fff',
    border: Colors.green,
    background: Colors.green,
  },
  danger: {
    color: '#fff',
    border: Colors.red,
    background: Colors.red,
  },
};

export const sizes = {
  default: {
    fontSize: '100%',
    padding: '12px 25px',
    fontWeight: 'bolder',
  },
  small: {
    fontSize: '85%',
    padding: '6px 15px',
    fontWeight: 'normal',
  },
  large: {
    fontSize: '120%',
    padding: '14px 30px',
    fontWeight: 'bolder',
  },
};

export default {
  borderRadius: '5px',
  margin: '0 5px 10px 0',
};
