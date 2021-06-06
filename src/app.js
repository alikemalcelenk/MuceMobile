import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

//pages
import HomePage from './pages/home';
import MusicPage from './pages/music';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="HomePage"
          component={HomePage}
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
  );
};

export default App;
