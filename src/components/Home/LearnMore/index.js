
import React, { useRef } from 'react';
import {
    StyleSheet, Image, Text, TouchableOpacity, View, SafeAreaView, Animated,
    Dimensions, ImageBackground
} from 'react-native';

import SimpleText from '../../templates/Text/SimpleText';

import Colors from '../../../constants/Colors';
import CommonStyles from '../../../components/Shared/CommonStyles';

import PagerView from 'react-native-pager-view';
import Indicator from '../../Intro/Indicator/index';
import { FixedWidthButton } from '../../templates/Buttons/buttons'



const LearnMore = ({
    navigation,
    setPagerPosition,
    position
}) => {
    var mViewPager;

    return (
        <SafeAreaView style={CommonStyles.container}>
            <Image source={require('../../../assets/images/ic_logo.png')}
                style={{ width: 120, height: 40, alignSelf: 'center' }} />

            <View style={{ flex: 1 }}>
                <PagerView style={styles.pagerView} initialPage={position}
                    ref={(viewPager) => {
                        mViewPager = viewPager
                    }}
                    onPageSelected={(index) => {
                        console.log('onPageSelected : ', index.nativeEvent.position)
                        setPagerPosition(index.nativeEvent.position)
                    }}>
                    <View style={styles.pagerItemContainer} key="0">
                        <View >
                            <Image source={require('../../../assets/images/spl1.gif')}
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
                            <Image source={require('../../../assets/images/spl2.gif')}
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
                            <Image source={require('../../../assets/images/spl3.gif')}
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
                            <Image source={require('../../../assets/images/spl6.gif')}
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
                <Indicator position={position} />

            </View>
            {position < 3 ? <View style={{ justifyContent: 'center', alignItems: 'center', padding: 18 }}>
                <TouchableOpacity
                    onPress={() => {
                        position <= 3 && setPagerPosition(position += 1)
                        position <= 3 && mViewPager.setPage(position)
                    }}>
                    <SimpleText title={'NEXT'}
                        fontSize={14}
                        marginBottom={12} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack()
                    }}>
                    <SimpleText title={'SKIP'}
                        fontSize={14} />
                </TouchableOpacity>

            </View> : <View style={{ justifyContent: 'center', alignItems: 'center', padding: 18 }}>
                <TouchableOpacity
                    style={{ borderRadius: 8, backgroundColor: Colors.white, width: 70, height: 40, elevation: 2 }}
                    onPress={() => {
                        navigation.goBack()
                    }}>
                    <SimpleText title={'GOT IT'}
                        fontSize={14}
                        marginTop={12}
                        alignSelf={'center'}
                        marginBottom={12} />
                </TouchableOpacity>

            </View>}
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

export default LearnMore;