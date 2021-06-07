import React from 'react';
import {Dimensions, ScrollView} from 'react-native';

const windowWidth = Dimensions.get('window').width;

//components - styled-system
import Box from '../../StyledSystem/box';
import Image from '../../StyledSystem/image';
import Button from '../../StyledSystem/button';

//components - icons
import ArrowIcon from '../../Icons/Arrow';

//store
import {observer} from 'mobx-react';
import {StoreContext} from '../../../store.js';

const SendImagePageContent = ({navigation}) => {
  //store
  const Store = React.useContext(StoreContext);

  const [showPhoto, setShowPhoto] = React.useState(Store.showPhoto);

  const sendPhoto = () => {
    navigation.navigate('MusicPage');
  };

  return (
    <Box as={ScrollView} flexGrow={1} my={15}>
      <Box flexDirection="column" alignItems="center" my={15}>
        <Image
          source={showPhoto}
          width={windowWidth - 90} // marginx = 45
          height={((windowWidth - 90) * showPhoto.height) / showPhoto.width}
          borderRadius={5}
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

export default observer(SendImagePageContent);
