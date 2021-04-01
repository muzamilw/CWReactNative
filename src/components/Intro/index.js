
import React, { useRef } from 'react';
import {
    StyleSheet, Image, Text, TouchableOpacity, View, SafeAreaView, Animated,
    Dimensions, ImageBackground
} from 'react-native';

import SimpleText from '../templates/Text/SimpleText';

import Colors from '../../constants/Colors';
import CommonStyles from '../../components/Shared/CommonStyles';

import PagerView from 'react-native-pager-view';
import Indicator from './Indicator/index';
import { FixedWidthButton } from '../templates/Buttons/buttons'



const Intro = ({
    navigation,
    setPagerPosition,
    position
}) => {

    return (
        <SafeAreaView style={CommonStyles.container}>
            <Image source={require('../../assets/images/ic_logo.png')}
                style={{ width: 120, height: 40, alignSelf: 'center' }} />

            <View style={{ width: '100%', height: 350 }}>
                <PagerView style={styles.pagerView} initialPage={0}
                onPageSelected = {(index) =>{
                    console.log('onPageSelected : ', index.nativeEvent.position)
                    setPagerPosition(index.nativeEvent.position)
                }}>
                    <View style={styles.pagerItemContainer} key="0">
                        <View >
                            <Image source={require('../../assets/images/spl1.gif')}
                                style={styles.gif} />
                        </View>
                        <SimpleText
                            title={'Target and Connect Faster'}
                            fontWeight={'bold'}
                            marginTop={12}
                            fontSize={20} />
                        <SimpleText
                            title={'Engage using our intelligent learning\nalgorithms on Linked In'}
                            textAlign={'center'}
                            fontSize={16} />
                    </View>
                    <View style={styles.pagerItemContainer} key="1">
                        <View >
                            <Image source={require('../../assets/images/spl2.gif')}
                                style={styles.gif} />
                        </View>
                        <SimpleText
                            title={'In-Depth Analytics'}
                            fontWeight={'bold'}
                            marginTop={12}
                            fontSize={20} />
                        <SimpleText
                            title={'Monitor your progress, make smarter\nconnections and re-tweak your targeting'}
                            textAlign={'center'}
                            fontSize={16} />
                    </View>
                    <View style={styles.pagerItemContainer} key="2">
                        <View >
                            <Image source={require('../../assets/images/spl3.gif')}
                                style={styles.gif} />
                        </View>
                        <SimpleText
                            title={'Say Hello, Effortlessly'}
                            fontWeight={'bold'}
                            marginTop={12}
                            fontSize={20} />
                        <SimpleText
                            title={'Create up to 3 messages that auto-personalize\nfor every new connection made, sent out 24\nhours apart'}
                            textAlign={'center'}
                            fontSize={16} />
                    </View>
                    <View style={styles.pagerItemContainer} key="3">
                        <View >
                            <Image source={require('../../assets/images/spl6.gif')}
                                style={styles.gif} />
                        </View>
                        <SimpleText
                            title={'Target and Connect Faster'}
                            fontWeight={'bold'}
                            marginTop={12}
                            fontSize={20} />
                        <SimpleText
                            title={'Engage using our intelligent learning\nalgorithms on Linked In'}
                            textAlign={'center'}
                            fontSize={16} />
                    </View>
                </PagerView>
                <Indicator position = {position} />
               
            </View>
            <View style = {{ flex:1,justifyContent:'center', alignItems:'center'}}>
               <FixedWidthButton
               onPress = {() =>{navigation.navigate('Home')}}
                    title={'Try for FREE'}
                    disabled={false}
                    fontSize={18}
                    weight = {'bold'}
                    width={0.75}
                    isDynamic={true}
                    height={50}
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
               <FixedWidthButton
                    title={'Login With PIN Code'}
                    disabled={false}
                    fontSize={18}
                    weight = {'bold'}
                    width={0.75}
                    isDynamic={true}
                    height={50}
                    borderRadius={8}
                    backgroundColor={'rgb(14, 71, 116)'}
                    color={'white'}
                    marginLeft={55}
                    marginRight={55}
                    marginTop={20}
                    alignSelf={"center"}
                    justifyContent={"center"}
                    alignItems={"center"}
                />
               <FixedWidthButton
                    title={'Upgrade'}
                    disabled={false}
                    fontSize={18}
                    weight = {'bold'}
                    width={0.75}
                    isDynamic={true}
                    height={50}
                    borderRadius={8}
                    backgroundColor={'rgb(117, 151, 38)'}
                    color={'white'}
                    marginLeft={55}
                    marginRight={55}
                    marginTop={20}
                    alignSelf={"center"}
                    justifyContent={"center"}
                    alignItems={"center"}
                />
               </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        borderRadius: 20,
        resizeMode: 'cover',
    },
    backgroundFill: {
        backgroundColor: '#fff',
    },
    itemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pagerView: {
        flex: 1
    },
    gif: {
        width: 300, height: 200, resizeMode: 'contain'
    },
    pagerItemContainer: {
        justifyContent: 'center', alignItems: 'center', flex: 1
    }
});

export default Intro;