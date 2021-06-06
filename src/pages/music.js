import React from 'react';
import {SafeAreaView} from 'react-native';

//components - styled-system
import Box from '../components/styledSystem/box';
import Text from '../components/styledSystem/text';

//components - icons
import HomeIcon from '../components/icons/Home';
import SpotifyIcon from '../components/icons/Spotify';
import YoutubeIcon from '../components/icons/Youtube';

const MusicPage = ({navigation}) => {
  return (
    <SafeAreaView>
      <Box flexDirection="row">
        <Text onPress={() => navigation.navigate('HomePage')}>Music</Text>
        <HomeIcon color="purple" />
        <SpotifyIcon color="purple" />
        <YoutubeIcon color="purple" />
      </Box>
    </SafeAreaView>
  );
};

export default MusicPage;
