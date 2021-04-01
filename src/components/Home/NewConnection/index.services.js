import { useState } from 'react';
import { useNavigation, } from '@react-navigation/native';


const NewConnectionListServiceComponent = ({
    children,
}) => {

    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

    const mDataList =  343434343;
    const setModal = () => {
        setModalVisible(!modalVisible);
    }





    return children({
        navigation, mDataList, modalVisible, setModal
    })
}


export default NewConnectionListServiceComponent;