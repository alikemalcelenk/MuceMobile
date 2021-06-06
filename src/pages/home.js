import React from 'react';
import {SafeAreaView} from 'react-native';

//components - styled-system
import Box from '../components/styledSystem/box';
import Text from '../components/styledSystem/text';

//components - icons
import CameraIcon from '../components/icons/Camera';

const HomePage = ({navigation}) => {
  return (
    <SafeAreaView>
      <Box flexDirection="row">
        <Text onPress={() => navigation.navigate('MusicPage')}>Home</Text>
        <CameraIcon color="purple" />
      </Box>
    </SafeAreaView>
  );
};

export default HomePage;
