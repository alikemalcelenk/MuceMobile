import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

//components - styled-system
import Box from '../components/styledSystem/box';
import Text from '../components/styledSystem/text';

//components - icons
import HomeIcon from '../components/icons/Home';
import SpotifyIcon from '../components/icons/Spotify';
import YoutubeIcon from '../components/icons/Youtube';

//theme
import theme from '../utils/theme';

const MusicPage = ({navigation}) => {
  useFocusEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useCallback(() => {
      StatusBar.setBarStyle(theme.colors.statusBar);
    }),
  );

  return (
    <Box flexDirection="row" as={SafeAreaView}>
      <Text onPress={() => navigation.navigate('HomePage')}>Music</Text>
      <HomeIcon color={theme.colors.purple} />
      <SpotifyIcon color={theme.colors.purple} />
      <YoutubeIcon color={theme.colors.purple} />
    </Box>
  );
};

export default MusicPage;
