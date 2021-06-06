import React from 'react';
import {Dimensions, ScrollView} from 'react-native';

const windowWidth = Dimensions.get('window').width;

//components - styled-system
import Box from '../../StyledSystem/box';
import Image from '../../StyledSystem/image';
import Button from '../../StyledSystem/button';

//components - icons
import ArrowIcon from '../../Icons/Arrow';

const SendImagePageContent = ({route, navigation}) => {
  const [realPhoto, setRealPhoto] = React.useState(route.params.realPhoto);
  const [showPhoto, setShowPhoto] = React.useState(route.params.showPhoto);

  const sendPhoto = () => {
    console.log(realPhoto);
  };

  return (
    <Box as={ScrollView} flexGrow={1} my={15}>
      <Box flexDirection="column" alignItems="center" my={15}>
        <Image
          source={showPhoto}
          width={windowWidth - 90} // marginx = 45
          height={((windowWidth - 90) * showPhoto.height) / showPhoto.width}
          borderRadius={5}
          border={2}
          borderColor="purple"
        />

        <Button
          height={45}
          width={windowWidth - 90}
          bg="purple"
          mt={30}
          borderRadius={5}
          onPress={() => sendPhoto()}>
          <ArrowIcon color="white" />
        </Button>
      </Box>
    </Box>
  );
};

export default SendImagePageContent;
