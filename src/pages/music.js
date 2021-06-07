import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

//components
import Header from '../components/Header/index';
import Content from '../components/Contents/Music/index';
import TabBar from '../components/MusicPageTabBar/index';
import Spinner from '../components/Spinner/index';

//components - styled-system
import Box from '../components/StyledSystem/box';
import Text from '../components/StyledSystem/text';

//theme
import theme from '../utils/theme';

//api
import {getMusic} from '../api/music';

//store
import {observer} from 'mobx-react';
import {StoreContext} from '../store.js';

const MusicPage = ({navigation}) => {
  //store
  const Store = React.useContext(StoreContext);

  const [music, setMusic] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [isErr, setIsErr] = React.useState(false);

  useFocusEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useCallback(() => {
      StatusBar.setBarStyle(theme.colors.statusBar);
    }),
  );

  React.useEffect(() => {
    proposeMusic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const proposeMusic = async () => {
    setIsLoading(true);
    setIsErr(false);
    const photo = await Store.realPhoto;
    getMusic(photo)
      .then((response) => {
        if (response.data.song) {
          setMusic(response.data.song);
        } else {
          setIsErr(true);
        }
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsErr(true);
      });
  };

  const ErrMessage = () => {
    return (
      <Box alignItems="center" justifyContent="center" flex={1}>
        <Text textAlign="center" mx={20}>
          While processing the data, an error occurred. Please try again.
        </Text>
      </Box>
    );
  };

  return (
    <Box as={SafeAreaView} bg="background" flex={1}>
      <Header
        subTitle={
          isLoading
            ? 'Music is being loaded'
            : isErr
            ? 'An error occurred'
            : 'Your emotion I predicted:'
        }
        emotion={!isLoading && !isErr && music.emotion}
      />
      {isLoading ? (
        <Spinner color={theme.colors.purple} size={50} />
      ) : (
        <>
          {isErr ? (
            <ErrMessage />
          ) : (
            <Content navigation={navigation} music={music} />
          )}
          <TabBar navigation={navigation} />
        </>
      )}
    </Box>
  );
};

export default observer(MusicPage);
