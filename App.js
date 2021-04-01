import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  LogBox
} from 'react-native';


import SplashScreen from 'react-native-splash-screen';

import IntroScreen from './src/screens/Intro/index';
import Home from './src/screens/Home/index';
import NewConnectionListScreen from './src/screens/Home/NewConnectionList/index';
import LearnMoreScreen from './src/screens/Home/LearnMore/index';
import InviteListScreen from './src/screens/Home/InviteListScreen/index';

const Stack = createStackNavigator();

const App = () => {

  const [initialRouteName, setInitialRouteName] = useState('IntroScreen');

  useEffect(() => {
    LogBox.ignoreAllLogs();

    SplashScreen.hide();

  }, [initialRouteName]);

  return (
    <Navigation initialRouteName={initialRouteName} />
  );
};

export default App;

const Navigation = ({ initialRouteName }) => {
  if (initialRouteName === '') {
    return null
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>

        <Stack.Screen name="IntroScreen" component={IntroScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="NewConnectionListScreen" component={NewConnectionListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="InviteListScreen" component={InviteListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LearnMoreScreen" component={LearnMoreScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

