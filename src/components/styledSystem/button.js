import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  space,
  flexbox,
  border,
  layout,
  position,
} from 'styled-system';

const Button = styled(TouchableOpacity)(
  compose(color, size, space, flexbox, border, layout, position),
);

Button.defaultProps = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

export default Button;
