
import React, { useState } from 'react';
import {
    StyleSheet, Image, Text, TouchableOpacity, View, SafeAreaView, Animated,
    Dimensions, FlatList, Alert, Modal, Pressable
} from 'react-native';

import SimpleText from '../../templates/Text/SimpleText';

import Colors from '../../../constants/Colors';
import CommonStyles from '../../Shared/CommonStyles';
import BackArrow from '../../../assets/svg/BackArrow';
import { FixedWidthButton } from '../../templates/Buttons/buttons'




const MessageSent = ({
    navigation, modalVisible, setModal, mDataList

}) => {
    const [mItem, setItem] = useState({
        id: -1,
        name: '',
        designation: '',
        publicUserName: '',
        description: '',
        image: ''
    })
    var rootURL = ''
    var restROOT = ''
    var profileURL = ''
    console.log('mDataList : ', mDataList)

    return (
        <SafeAreaView style={CommonStyles.container}>
            <View style={{ flexDirection: 'row', margin: 8, width: '100%', }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <View style={{ flexDirection: 'row', width: 80, alignItems: 'center' }}>
                        <BackArrow />
                        <SimpleText
                            title={'Back'}
                            fontSize={18}
                            fontWeight={'bold'}
                            alignSelf={'center'}
                            color={Colors.appBlue}
                            marginLeft={8} />
                    </View>
                </TouchableOpacity>
                <View style={{
                    flex: 1, justifyContent: 'center', alignItems: 'center'
                }}>
                    <SimpleText
                        title={'New Connections'}
                        fontSize={18}
                        right={40}
                        fontWeight={'bold'}
                        color={Colors.appBlue} />
                </View>
            </View>

            <View style={{ flex: 1, marginTop: 12 }}>

                <FlatList
                    contentContainerStyle={{ margin: 4 }}

                    keyExtractor={item => item.publicIdentifier}
                    data={mDataList}
                    numColumns={3}
                    renderItem={({ item, index }) => {
                        // console.log('item : ', item)
                        if (item.profilePicture != null && item.profilePicture.displayImageReference != null) {
                            let picture = item.profilePicture.displayImageReference;
                            console.log('profilePicture : ', picture.vectorImage.rootUrl);
                            console.log('artifacts : ', picture.vectorImage.artifacts[0].fileIdentifyingUrlPathSegment);

                            rootURL = picture.vectorImage.rootUrl;
                            console.log('rootURL : ', rootURL);
                            restROOT = picture.vectorImage.artifacts[0].fileIdentifyingUrlPathSegment;
                            console.log('restROOT : ', restROOT)
                            profileURL = rootURL + restROOT

                        }
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    console.log('onPress')
                                    setModal(modalVisible)
                                    setItem({
                                        id: item.trackingId,
                                        name: item.firstName + ' ' + item.lastName,
                                        designation: item.occupation,
                                        publicUserName: item.publicIdentifier,
                                        description: item.headline,
                                        image: profileURL
                                    })
                                }}
                                style={{ margin: 4 }}>
                                <View style={{
                                    width: 120, height: 170, borderRadius: 8, backgroundColor: Colors.cardBG,
                                    justifyContent: 'center', alignItems: 'center', padding: 4
                                }}>

                                    {profileURL.length > 0 ? <Image source={{ uri: profileURL }}
                                        style={styles.profileImage} /> :
                                        <Image source={require('../../../assets/images/ic_placeholder.png')}
                                            style={styles.profileImage} />}

                                    <SimpleText
                                        title={item.firstName + ' ' + item.lastName}
                                        fontSize={14}
                                        textAlign={'center'}
                                        marginTop={4} />

                                    <SimpleText
                                        title={item.headline}
                                        fontSize={12}
                                        marginTop={8}
                                        color={Colors.designation}
                                        textAlign={'center'}
                                        numberOfLines={2}
                                        ellipsizeMode={'tail'} />
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}

            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {mItem.image.length > 0 ? <Image source={{ uri: mItem.image }}
                            style={styles.profileImage} /> :
                            <Image source={require('../../../assets/images/ic_placeholder.png')}
                                style={styles.profileImage} />}
                        <SimpleText
                            title={'Public UserName : ' + mItem.publicUserName}
                            fontSize={12}
                            marginTop={4} 
                            textAlign={'center'}/>
                        <SimpleText
                            title={'Name : ' + mItem.name }
                            fontSize={12} 
                            textAlign={'center'}/>
                        <SimpleText
                            title={mItem.description}
                            fontSize={12}
                            marginTop={34} 
                            textAlign={'center'}/>
                        <FixedWidthButton
                            title={'Ok'}
                            disabled={false}
                            fontSize={18}
                            weight={'bold'}
                            width={0.65}
                            isDynamic={true}
                            height={40}
                            borderRadius={8}
                            backgroundColor={'rgb(14, 71, 116)'}
                            color={'white'}
                            marginTop={20}
                            alignSelf={"center"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            onPress={() => { setModal(modalVisible) }}
                        />

                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 20
    },
    modalView: {
        width: '80%',
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: 8,
        paddingVertical: 18,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        width: '100%',
        borderRadius: 20,
        paddingHorizontal: 14,
        textAlign: 'center',
        elevation: 2,
        backgroundColor: 'blue'
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    profileImage: {
        width: 60, height: 60, borderRadius: 60 / 2
    }

});

export default MessageSent;