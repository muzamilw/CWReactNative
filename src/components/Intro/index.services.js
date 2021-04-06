import { useState, useEffect } from 'react';
import { useNavigation, } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const IntroServiceComponent = ({
  children,
}) => {

  const navigation = useNavigation();
  const [position, setPosition] = useState(0);

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const retrievedItem = await AsyncStorage.getItem('@user');
      const user = JSON.parse(retrievedItem);
      if (user !== null) {
        // login(user);
        console.log('User from Async : ', user.li_at.value);
      }
      // setLoading(false);
      // SplashScreen.hide();
    } catch (e) {
      console.log('error getting stored data');
    }
  };



  const setPagerPosition = (position) => {
    setPosition(position);
  }


  return children({
    navigation, setPagerPosition, position
  })
}


export default IntroServiceComponent;