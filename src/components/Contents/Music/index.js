import React from 'react';
import {Dimensions, Linking} from 'react-native';

const windowWidth = Dimensions.get('window').width;

//components - styled-system
import Box from '../../StyledSystem/box';
import Text from '../../StyledSystem/text';
import Image from '../../StyledSystem/image';
import Button from '../../StyledSystem/button';

//components - icons
import SpotifyIcon from '../../Icons/Spotify';
import YoutubeIcon from '../../Icons/Youtube';

//theme
import theme from '../../../utils/theme';

const MusicPageContent = ({navigation, music}) => {
  // cover art width
  const coverArtWidth = windowWidth - 45 - 45 - 2 - 2 - 22 - 22; //mx, border, px

  //sabit width vermek için
  const [coverArtHeight, setCoverArtHeight] = React.useState(1);

  return (
    <Box flexGrow={1} alignItems="center" justifyContent="center">
      <Box
        bg="transparent"
        border={2}
        borderColor="purple"
        borderRadius={5}
        width={windowWidth - 90} //mx=45
        px={22}>
        <Text mt={25}>Song that I suggested:</Text>
        <Image
          source={{uri: music.coverArt}}
          width={coverArtWidth}
          height={coverArtHeight}
          borderRadius={5}
          borderColor="purple"
          mt={25}
          onLoad={(photo) => {
            setCoverArtHeight(
              (photo.nativeEvent.source.height /
                photo.nativeEvent.source.width) *
                coverArtWidth,
            );
          }}
        />
        <Text mt={15} fontSize={18}>
          {music.name}
        </Text>
        <Text fontFamily="SFProDisplay-MediumItalic" mt={10}>
          <Text color="purple">by </Text>
          {music.artist}
        </Text>
        <Box flexDirection="row" mt={15} mb={20} justifyContent="center">
          <Button onPress={() => Linking.openURL(music.youtubeUrl)}>
            <YoutubeIcon color={theme.colors.text} />
          </Button>
          <Button onPress={() => Linking.openURL(music.spotifyUrl)} ml={15}>
            <SpotifyIcon color={theme.colors.text} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MusicPageContent;
