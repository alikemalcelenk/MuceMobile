import React from 'react';
import {SafeAreaView} from 'react-native';

//components - styled-system
import Box from '../components/styledSystem/box';
import Text from '../components/styledSystem/text';

//components - icons
import CameraIcon from '../components/icons/Camera';

//theme
import theme from '../utils/theme';

const HomePage = ({navigation}) => {
  return (
    <Box flexDirection="row" as={SafeAreaView}>
      <Text onPress={() => navigation.navigate('MusicPage')} mt={8}>
        Home
      </Text>
      <CameraIcon color={theme.colors.purple} />
    </Box>
  );
};

export default HomePage;
