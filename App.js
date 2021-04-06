import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext } from 'react';
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
import { AuthProvider , AuthContext} from './src/AuthProvider';

const Stack = createStackNavigator();

const App = () => {

  const [initialRouteName, setInitialRouteName] = useState('');
  const { user, login } = useContext(AuthContext);

  useEffect(() => {
    LogBox.ignoreAllLogs();
    getData()
    SplashScreen.hide();

  }, [initialRouteName]);

  const getData = async () => {
    try {
      const retrievedItem = await AsyncStorage.getItem('@user');
      const user = JSON.parse(retrievedItem);
      if (user !== null) {
        login(user);
        console.log('User from Async : ', user.li_at.value);
        setInitialRouteName('Home')
      }
      // setLoading(false);
      // SplashScreen.hide();
    } catch (e) {
      setInitialRouteName('IntroScreen')
      console.log('error getting stored data');
    }
  };



  return (
    <AuthProvider>
      <Navigation initialRouteName={initialRouteName} />
    </AuthProvider>

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

