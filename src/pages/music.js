import React from 'react';
import {SafeAreaView} from 'react-native';

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
