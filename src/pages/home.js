import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

//components
import Header from '../components/Header/index';

//components - styled-system
import Box from '../components/StyledSystem/box';
import Text from '../components/StyledSystem/text';

//components - icons
import CameraIcon from '../components/Icons/Camera';

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
    <Box as={SafeAreaView} bg="background" flex={1}>
      <Header subTitle={'Select your photo that includes your face'} />

      <Box flexGrow={1} alignItems="center" justifyContent="center" bg="red">
        <Text onPress={() => navigation.navigate('MusicPage')}>
          go to musicPage
        </Text>
        <CameraIcon color={theme.colors.purple} />
      </Box>
    </Box>
  );
};

export default HomePage;
