import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

//components - styled-system
import Box from '../../StyledSystem/box';
import Text from '../../StyledSystem/text';
import Image from '../../StyledSystem/image';
import Button from '../../StyledSystem/button';

//components - icons
import HomeIcon from '../../Icons/Home';
import SpotifyIcon from '../../Icons/Spotify';
import YoutubeIcon from '../../Icons/Youtube';

//theme
import theme from '../../../utils/theme';

const MusicPageContent = ({navigation}) => {
  useFocusEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useCallback(() => {
      StatusBar.setBarStyle(theme.colors.statusBar);
    }),
  );

  return (
    <Box flexGrow={1} alignItems="center" justifyContent="center" bg="red">
      <Text onPress={() => navigation.navigate('HomePage')}>
        go to homePage
      </Text>
      <HomeIcon color={theme.colors.purple} />
      <SpotifyIcon color={theme.colors.purple} />
      <YoutubeIcon color={theme.colors.purple} />
    </Box>
  );
};

export default MusicPageContent;
