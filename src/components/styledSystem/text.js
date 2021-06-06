import {Text as T} from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  space,
  flexbox,
  border,
  layout,
  typography,
} from 'styled-system';

const Text = styled(T)(
  compose(color, size, space, flexbox, border, layout, typography),
);

Text.defaultProps = {
  fontFamily: 'SFProRounded-Semibold',
  fontSize: 14,
};

export default Text;
