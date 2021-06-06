import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

//components
import Header from '../components/Header/index';

//components - styled-system
import Box from '../components/StyledSystem/box';
import Text from '../components/StyledSystem/text';

//components - icons
import HomeIcon from '../components/Icons/Home';
import SpotifyIcon from '../components/Icons/Spotify';
import YoutubeIcon from '../components/Icons/Youtube';

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

      <Box flexGrow={1} alignItems="center" justifyContent="center" bg="red">
        <Text onPress={() => navigation.navigate('HomePage')}>
          go to homePage
        </Text>
        <HomeIcon color={theme.colors.purple} />
        <SpotifyIcon color={theme.colors.purple} />
        <YoutubeIcon color={theme.colors.purple} />
      </Box>
    </Box>
  );
};

export default MusicPage;
