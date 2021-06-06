import 'react-native-gesture-handler';
import * as React from 'react';

//react-navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

//styled-components
import {ThemeProvider} from 'styled-components';
import theme from './utils/theme';

//pages
import HomePage from './pages/home';
import SendImagePage from './pages/sendImage';
import MusicPage from './pages/music';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={() => {
              return {
                headerShown: false,
                gestureEnabled: false, //geri gelmeyi engelliyor.
              };
            }}
          />
          <Stack.Screen
            name="SendImagePage"
            component={SendImagePage}
            options={() => {
              return {
                headerShown: false,
              };
            }}
          />
          <Stack.Screen
            name="MusicPage"
            component={MusicPage}
            options={() => {
              return {
                headerShown: false,
                gestureEnabled: false, //geri gelmeyi engelliyor.
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
