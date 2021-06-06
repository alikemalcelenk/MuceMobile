import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

//components - styled-system
import Box from '../components/styledSystem/box';
import Text from '../components/styledSystem/text';

//components - icons
import CameraIcon from '../components/icons/Camera';

//theme
import theme from '../utils/theme';

const HomePage = ({navigation}) => {
  useFocusEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useCallback(() => {
      StatusBar.setBarStyle(theme.colors.statusBar);
    }),
  );

  return (
    <Box flexDirection="row" as={SafeAreaView}>
      <Text onPress={() => navigation.navigate('MusicPage')}>Home</Text>
      <CameraIcon color={theme.colors.purple} />
    </Box>
  );
};

export default HomePage;
