import React from 'react';
import {SafeAreaView} from 'react-native';

//components - styled-system
import Box from './components/styledSystem/box';
import Text from './components/styledSystem/text';

//components - icons
import HomeIcon from './components/icons/Home';
import CameraIcon from './components/icons/Camera';
import SpotifyIcon from './components/icons/Spotify';
import YoutubeIcon from './components/icons/Youtube';

const App = () => {
  return (
    <SafeAreaView>
      <Box flexDirection="row">
        <Text>TEST</Text>
        <HomeIcon color="purple" />
        <CameraIcon color="purple" />
        <SpotifyIcon color="purple" />
        <YoutubeIcon color="purple" />
      </Box>
    </SafeAreaView>
  );
};

export default App;
