import { Colors } from './../defaults'

export const colors = {
  default: {
    color: '#707070',
    border: '#eeeeee',
    background: 'transparent'
  },
  primary: {
    color: '#fff',
    border: Colors.primary,
    background: Colors.primary
  },
  secondary: {
    color: '#fff',
    border: Colors.secondary,
    background: Colors.secondary
  },
  success: {
    color: '#fff',
    border: Colors.success,
    background: Colors.success
  },
  danger: {
    color: '#fff',
    border: Colors.error,
    background: Colors.error
  }
}

export const sizes = {
  default: {
    fontSize: '100%',
    padding: '12px 25px',
    fontWeight: 'bolder'
  },
  small: {
    fontSize: '85%',
    padding: '6px 15px',
    fontWeight: 'normal'
  },
  large: {
    fontSize: '120%',
    padding: '14px 30px',
    fontWeight: 'bolder'
  }  
}

export default {
  borderRadius: '5px',
  margin: '0 5px 10px 0'
};
