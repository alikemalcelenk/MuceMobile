import React from 'react';

//components - styled-system
import Box from '../../StyledSystem/box';
import Button from '../../StyledSystem/button';
import Text from '../../StyledSystem/text';

//components - icons
import CameraIcon from '../../Icons/Camera';
import GalleryIcon from '../../Icons/Gallery';

//theme
import theme from '../../../utils/theme';

const HomeContent = ({navigation}) => {
  return (
    <Box
      flexGrow={1}
      alignItems="center"
      justifyContent="center"
      my={30}
      mx={45}>
      <Button
        border={2}
        borderColor="purple"
        flex={1}
        width={'100%'}
        borderRadius={14}>
        <CameraIcon color={theme.colors.text} />
        <Text mt={25} fontSize={12}>
          Take a photo
        </Text>
      </Button>
      <Box my={20}>
        <Text>or</Text>
      </Box>
      <Button
        border={2}
        borderColor="purple"
        flex={1}
        width={'100%'}
        borderRadius={14}>
        <GalleryIcon color={theme.colors.text} />
        <Text mt={25} fontSize={12}>
          Choose from gallery
        </Text>
      </Button>
    </Box>
  );
};

export default HomeContent;
