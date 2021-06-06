import {Image as Img} from 'react-native';
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

const Image = styled(Img)(
  compose(color, size, space, flexbox, border, layout, position),
);

export default Image;
