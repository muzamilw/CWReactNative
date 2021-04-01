import { useState } from 'react';
import { useNavigation, } from '@react-navigation/native';


const InviteListServiceComponent = ({
    children,
}) => {

    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

    const mDataList =  343434343;
    const setModal = () => {
        setModalVisible(!modalVisible);
    }

    const dataList = [
        {
            id: 0,
            name: 'ABC',
            designation: 'Software Engineer'
        },
        {
            id: 1,
            name: 'ABC DEF',
            designation: 'Software Quality Engineer'
        },
        {
            id: 2,
            name: 'EFG',
            designation: 'Electrical Engineer'
        },
        {
            id: 3,
            name: 'HIJ',
            designation: 'Data Engineer'
        },
    ]







    return children({
        navigation, dataList, modalVisible, setModal
    })
}


export default InviteListServiceComponent;