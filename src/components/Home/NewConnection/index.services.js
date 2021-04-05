import { useState, useEffect, useContext  } from 'react';
import { useNavigation, } from '@react-navigation/native';
import axios from 'axios';
import { AuthContext } from '../../../AuthProvider';

const url = 'https://www.linkedin.com/voyager/api/relationships/dash/connections?decorationId=com.linkedin.voyager.dash.deco.web.mynetwork.ConnectionListWithProfile-5&count=40&q=search&sortType=RECENTLY_ADDED';
const NewConnectionListServiceComponent = ({
    children,
}) => {

    const { user } = useContext(AuthContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [mDataList, setmDataList] = useState([]);
    const navigation = useNavigation();
    const JSESSIONID = JSON.stringify(user).includes('li_at') && user.JSESSIONID.value
    const liat = JSON.stringify(user).includes('li_at') && user.li_at.value
    const cookie = JSON.stringify(user).includes('li_at') && 'JSESSIONID' + '=' + '"' + user.JSESSIONID.value + '"' + ';' + 'lang' + '=' + '"' + user.lang.value + '"' + ';' + 'bcookie' + '='
        + '"' + user.bcookie.value + '"' + ';' + 'bscookie' + '=' + '"' + user.bscookie.value + '"' + ';' + 'lidc' + '=' + '"' + user.lidc.value + '"'
    console.log('JSESSIONID : ', JSESSIONID)

    console.log('liat : ', liat)
    console.log('cookie : ', cookie)

    
    const setModal = () => {
        setModalVisible(!modalVisible);
    }
    useEffect(() => {
        getDataUsingAsyncAwaitGetCall()
    }, [])
    const getDataUsingAsyncAwaitGetCall = async () => {
        try {
          const response = await axios.get(url, {
            // params: {
            //     count: '10',
            //     invitationType: 'CONNECTION',
            //     q: 'invitationType',
            //     start: '0',
            // },
            headers: {
                'Accept': 'application/vnd.linkedin.normalized+json+2.1',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Mobile Safari/537.36',
                'Content-Type': 'application/x-www-form-urlencoded',
                'accept-language': 'en-AU,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
                'csrf-token': JSESSIONID ,
                'li_at': liat ,
                'Cookie': cookie ,
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Request-Method": "GET, OPTIONS",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true

            }
        }).then((data) => {
            console.log('response included : ', JSON.stringify(data.data.included))
            data.data.included.shift()
            setmDataList(data.data.included)
        }).catch((error) => {
            console.log('error : ', error)
            
        });
          console.log('response : ', response)
        } catch (error) {
          // handle error
          console.log('error : ', error)
        }
      };




    return children({
        navigation, modalVisible, setModal,mDataList
    })
}


export default NewConnectionListServiceComponent;