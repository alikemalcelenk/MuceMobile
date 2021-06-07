import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

//components
import Header from '../components/Header/index';
import Content from '../components/Contents/Music/index';

//components - styled-system
import Box from '../components/StyledSystem/box';

//theme
import theme from '../utils/theme';

const MusicPage = ({navigation}) => {
  const [emotion, setEmotion] = React.useState('happy');

  useFocusEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useCallback(() => {
      StatusBar.setBarStyle(theme.colors.statusBar);
    }),
  );

  return (
    <Box as={SafeAreaView} bg="background" flex={1}>
      <Header subTitle={'Your emotion I predicted:'} emotion={emotion} />
      <Content navigation={navigation} />
    </Box>
  );
};

export default MusicPage;
