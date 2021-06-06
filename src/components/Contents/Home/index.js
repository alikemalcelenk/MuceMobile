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

const HomeContent = ({navigation}) => {
  const [realPhoto, setRealPhoto] = React.useState([]);
  const [showPhoto, setShowPhoto] = React.useState({});

  const chooseFromGallery = () => {
    ImagePicker.openPicker({
      includeBase64: true,
      includeExif: true,
      mediaType: 'photo',
    }).then((image) => {
      const data = new FormData();
      data.append('photo', {
        uri: image.path,
        type: 'image/jpeg',
        name: Math.floor(Math.random() * 1000000) + '.jpg',
      });
      setRealPhoto(data);
      setShowPhoto({
        uri: image.path,
        width: image.width,
        height: image.height,
        mime: image.mime,
      });
      console.log(showPhoto);
      console.log(realPhoto);
    });
  };

  const takePhoto = () => {
    ImagePicker.openCamera({
      includeBase64: true,
      includeExif: true,
      mediaType: 'photo',
    }).then((image) => {
      const data = new FormData();
      data.append('photo', {
        uri: image.path,
        type: 'image/jpeg',
        name: Math.floor(Math.random() * 1000000) + '.jpg',
      });
      setRealPhoto(data);
      setShowPhoto({
        uri: image.path,
        width: image.width,
        height: image.height,
        mime: image.mime,
      });
      console.log(showPhoto);
      console.log(realPhoto);
    });
  };

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
        borderRadius={14}
        onPress={() => takePhoto()}>
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
        borderRadius={14}
        onPress={() => chooseFromGallery()}>
        <GalleryIcon color={theme.colors.text} />
        <Text mt={25} fontSize={12}>
          Choose from gallery
        </Text>
      </Button>
    </Box>
  );
};

export default HomeContent;
