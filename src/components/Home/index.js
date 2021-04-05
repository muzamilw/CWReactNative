
import React,{useContext} from 'react';
import { SafeAreaView, View, TouchableOpacity, Linking } from 'react-native';
import CommonStyles from '../../components/Shared/CommonStyles';
import SimpleText from '../templates/Text/SimpleText';
import Menu from '../../assets/svg/Menu';
import Colors from '../../constants/Colors';
import { FixedWidthButton } from '../templates/Buttons/buttons'
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../AuthProvider';


import CookieManager from '@react-native-community/cookies';
const useWebKit = true;
const Home = ({
    navigation
}) => {

    const { user, login } = useContext(AuthContext);
    console.log('user in home : ', JSON.stringify(user).includes('li_at'))
    if(JSON.stringify(user).includes('li_at')){
        console.log('MyCookie : ','JSESSIONID' + '=' +'"'+ user.JSESSIONID.value+'"' + ';' + 'lang' + '=' + '"'+user.lang.value +'"'+ ';' + 'bcookie'+ '=' 
        +'"'+user.bcookie.value+'"'+ ';' +'bscookie' + '=' +'"'+user.bscookie.value+'"'+ ';' + 'lidc' + '=' +'"'+ user.lidc.value+'"')
    }
    const storeData = async (data) => {
        try {
            await AsyncStorage.setItem('@user', JSON.stringify(data));
            // if(data.li_at !== null){
            //     await AsyncStorage.setItem('@li_at', JSON.stringify(data.li_at.value));
            // }
            // await AsyncStorage.setItem('@token', data.accessToken);

            login(data);
        } catch (e) {
            console.log('error saving data', e);
        }
    };

    const navChange = e => {
        CookieManager.get('https://www.linkedin.com/')
            .then((cookies) => {
                console.log('CookieManager.get =>', cookies);
                storeData(cookies)
            });
        console.log("e", e);
        // this.setState({ loading: e.loading });
        if (e.url == "https://www.linkedin.com/") {
            CookieManager.getAll(true).then(res => {
                console.log("CookieManager.getAll =>", res);
                if (!!res) {
                    console.log({ res })
                    CookieManager.clearAll(true).then(res => {
                        console.log("LoginScreen CookieManager.clearAll =>", res);
                    });
                }
            });
        }
    };

    return (

        <SafeAreaView style={CommonStyles.container}>
            <View style={{ flexDirection: 'row', width: '100%', height: 50 }}>
                <TouchableOpacity onPress={() => { navigation.toggleDrawer() }}
                    style={{ margin: 8, width: 54, height: 54 }}>
                    {/* <Image source={require('../../assets/images/ic_menu.png')}
                    style={{ width: 24, height: 24, resizeMode: 'contain' }} /> */}
                    <Menu />
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', flex: 1, right: 16, alignItems: 'center', top: 5 }}>
                    <SimpleText
                        title={'Connect Wizz'}
                        fontSize={24}
                        color={Colors.appBlue}
                        fontWeight={'bold'}
                        alignSelf={'center'} />
                </View>
            </View>
            <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', width: '100%', height: 24, marginVertical: 12, backgroundColor: Colors.btnPurple }}>
                <SimpleText
                    title={'Auto message new connections'}
                    fontSize={14}
                    color={Colors.white} />
                <TouchableOpacity onPress={() => { Linking.openURL('https://connectwizz.net/Account/SignUp') }}>
                    <SimpleText
                        title={'Click here'}
                        fontSize={14}
                        color={Colors.white}
                        marginLeft={12}
                        fontWeight={'bold'}
                        textDecorationLine={'underline'} />
                </TouchableOpacity>
            </View>
            <SimpleText
                title={'Grow Your Network'}
                fontSize={20}
                color={Colors.btnPurple}
                fontWeight={'bold'}
                alignSelf={'center'} />
            {!JSON.stringify(user).includes('li_at')  ? <WebView
                cacheEnabled={false}
                // ref={ref => (this.webView = ref)}
                source={{ uri: 'https://www.linkedin.com/' }}
                style={{ marginTop: 20, flex: 1 }}
                thirdPartyCookiesEnabled={true}
                onNavigationStateChange={navChange}
            /> : <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginVertical: 12, paddingHorizontal: 18 }}>
                <View style={{ flex: 1 }}>
                    <FixedWidthButton
                        onPress={() => { navigation.navigate('Home') }}
                        title={'TARGET'}
                        disabled={false}
                        fontSize={14}
                        width={0.29}
                        isDynamic={true}
                        height={45}
                        borderRadius={8}
                        backgroundColor={'rgb(174, 15, 143)'}
                        color={'white'}
                        marginLeft={55}
                        marginRight={55}
                        marginTop={10}
                        alignSelf={"center"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    />
                </View>
                <View style={{ flex: 1, marginHorizontal: 22 }} >
                    <FixedWidthButton
                        title={'MESSAGING'}
                        disabled={false}
                        fontSize={14}
                        width={0.29}
                        isDynamic={true}
                        height={45}
                        borderRadius={8}
                        backgroundColor={'rgb(14, 71, 116)'}
                        color={'white'}
                        marginLeft={55}
                        marginRight={55}
                        marginTop={10}
                        alignSelf={"center"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    />
                </View>
                <View style={{ flex: 1 }} >
                    <FixedWidthButton
                        title={'START'}
                        disabled={false}
                        fontSize={14}
                        width={0.29}
                        isDynamic={true}
                        height={45}
                        borderRadius={8}
                        backgroundColor={'rgb(117, 151, 38)'}
                        color={'white'}
                        marginLeft={55}
                        marginRight={55}
                        marginTop={10}
                        alignSelf={"center"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    />
                </View>

            </View>}







        </SafeAreaView>

    );
}


export default Home;