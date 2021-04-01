
import React, { useState } from 'react';
import {
    StyleSheet, Image, Text, TouchableOpacity, View, SafeAreaView, Animated,
    Dimensions, FlatList, Alert, Modal, Pressable
} from 'react-native';

import SimpleText from '../../templates/Text/SimpleText';

import Colors from '../../../constants/Colors';
import CommonStyles from '../../../components/Shared/CommonStyles';
import BackArrow from '../../../assets/svg/BackArrow';

import { FixedWidthButton } from '../../templates/Buttons/buttons'



const InviteList = ({
    navigation, modalVisible, setModal

}) => {
    const [mItem, setItem] = useState({
        id: -1,
        name: '',
        designation: '',
        publicUserName: '',
        description: ''
    })
    const dataList = [
        {
            id: 0,
            name: 'ABC',
            designation: 'Software Engineer',
            publicUserName: 'kbdcbidc_ljdnci42342_oocw323r',
            description: 'Software Intern at ABC Gulberg Lahore Pakistan'
        },
        {
            id: 1,
            name: 'ABC DEF',
            designation: 'Software Quality Engineer',
            publicUserName: 'kbdcbidc_ljdnci42342_oocw323r',
            description: 'Software Intern at ABC Gulberg Lahore Pakistan'
        },
        {
            id: 2,
            name: 'EFG',
            designation: 'Electrical Engineer',
            publicUserName: 'kbdcbidc_ljdnci42342_oocw323r',
            description: 'Software Intern at ABC Gulberg Lahore Pakistan'
        },
        {
            id: 3,
            name: 'HIJ',
            designation: 'Data Engineer',
            publicUserName: 'kbdcbidc_ljdnci42342_oocw323r',
            description: 'Software Intern at ABC Gulberg Lahore Pakistan'
        },
    ]
    return (
        <SafeAreaView style={CommonStyles.container}>
            <View style={{ flexDirection: 'row', margin: 8, width: '100%', }}>
                <TouchableOpacity
                    onPress={() => { navigation.goBack() }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
                        title={'Invite Sent'}
                        fontSize={18}
                        right={40}
                        fontWeight={'bold'}
                        color={Colors.appBlue} />
                </View>
            </View>

            <View style={{ flex: 1, marginTop: 12 }}>

                <FlatList
                    contentContainerStyle={{ margin: 4 }}

                    keyExtractor={item => item.id.toString()}
                    data={dataList}
                    numColumns={3}
                    renderItem={({ item }) => {
                        console.log('item : ', item)
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    console.log('onPress')
                                    setModal(modalVisible)
                                    setItem({
                                        id: item.id,
                                        name: item.name,
                                        designation: item.designation,
                                        publicUserName: item.publicUserName,
                                        description: item.description
                                    })
                                }}
                                style={{ margin: 4 }}>
                                <View style={{
                                    width: 120, height: 170, borderRadius: 8, backgroundColor: Colors.cardBG,
                                    justifyContent: 'center', alignItems: 'center', padding: 4
                                }}>

                                    <Image source={require('../../../assets/images/ic_placeholder.png')}
                                        style={{ width: 60, height: 60, borderRadius: 60 / 2 }} />

                                    <SimpleText
                                        title={item.name}
                                        fontSize={14}
                                        marginTop={4} />

                                    <SimpleText
                                        title={item.designation}
                                        fontSize={14}
                                        marginTop={8}
                                        color={Colors.designation}
                                        textAlign={'center'} />
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
                        <Image source={require('../../../assets/images/ic_placeholder.png')}
                            style={{ width: 60, height: 60, borderRadius: 60 / 2 }} />
                        <SimpleText
                            title={'Public UserName : ' + mItem.publicUserName}
                            fontSize={12}
                            marginTop={4} />
                        <SimpleText
                            title={'Name : ' + mItem.name}
                            fontSize={12} />
                        <SimpleText
                            title={mItem.description}
                            fontSize={12}
                            marginTop={54} />
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
        padding: 18,
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
    }
});

export default InviteList;