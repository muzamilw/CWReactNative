import { useState} from 'react';
import { useNavigation, } from '@react-navigation/native';


const IntroServiceComponent = ({
    children,
  })  =>{

    const navigation = useNavigation();
    const [position, setPosition] = useState(0);





    const setPagerPosition = (position) =>{
      setPosition(position);
    }


    return children({
        navigation,setPagerPosition,position
      })
  }

  
export default IntroServiceComponent;