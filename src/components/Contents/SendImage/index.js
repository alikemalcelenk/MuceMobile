import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';

//components - styled-system
import Box from '../../StyledSystem/box';
import Button from '../../StyledSystem/button';
import Text from '../../StyledSystem/text';

//components - icons
import CameraIcon from '../../Icons/Camera';
import GalleryIcon from '../../Icons/Gallery';

//theme
import theme from '../../../utils/theme';

const SendImagePageContent = ({route, navigation}) => {
  const [realPhoto, setRealPhoto] = React.useState(route.params.realPhoto);
  const [showPhoto, setShowPhoto] = React.useState(route.params.showPhoto);

  React.useEffect(() => {
    console.log(route);
  });

  return (
    <Box flexGrow={1} alignItems="center" justifyContent="center">
      <Text>sendImg</Text>
    </Box>
  );
};

export default SendImagePageContent;
