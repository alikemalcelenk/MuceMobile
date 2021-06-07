import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import {MaterialIndicator} from 'react-native-indicators';

//components
import Header from '../components/Header/index';
import Content from '../components/Contents/Music/index';

//components - styled-system
import Box from '../components/StyledSystem/box';
import Button from '../components/StyledSystem/button';
import Text from '../components/StyledSystem/text';

//components - icons
import HomeIcon from '../components/Icons/Home';

//theme
import theme from '../utils/theme';

//config
import env from '../config/environment';

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
    proposeSong();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const proposeSong = () => {
    setIsLoading(true);
    setIsErr(false);
    const photo = Store.realPhoto;
    axios
      .post(env.API_BASE_URL + '/song/propose', photo)
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
        <Box alignItems="center" justifyContent="center" flex={1}>
          <MaterialIndicator color={theme.colors.purple} size={50} />
        </Box>
      ) : (
        <>
          {isErr ? (
            <Box alignItems="center" justifyContent="center" flex={1}>
              <Text textAlign="center" mx={20}>
                While processing the data, an error occurred. Please try again.
              </Text>
            </Box>
          ) : (
            <Content navigation={navigation} music={music} />
          )}
          <Box mb={30} alignItems="center" justifyContent="flex-start">
            <Button onPress={() => navigation.navigate('HomePage')}>
              <HomeIcon color={theme.colors.text} />
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default observer(MusicPage);
