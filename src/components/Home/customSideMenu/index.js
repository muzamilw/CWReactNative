// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../../constants/Colors'
import SimpleText from '../../templates/Text/SimpleText';
import AsyncStorage from '@react-native-async-storage/async-storage';




// import Icon from 'react-native-ionicons';

const CustomSidebarMenu = ({ navigation }) => {


  return (

    <SafeAreaView style={{ flex: 1 }}>



      <View style={{ flexDirection: 'row', width: '100%', height: 100, padding: 12 }}>
        <View style={{ justifyContent: 'center' }}>
          <Image
            source={require('../../../assets/images/ic_placeholder.png')}
            style={styles.iconStyle} />
          <TouchableOpacity>
            <SimpleText
              title={'Change'}
              fontSize={14}
              color={'red'}
              marginTop={16} />
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', marginLeft: 12, top: -8 }}>
          <SimpleText
            title={'Abdul Rahman '}
            fontSize={18}
            fontWeight={'bold'}
            color={Colors.appBlue} />
          <SimpleText
            title={'Software Engineer at ABC'}
            fontSize={13}
            color={Colors.appBlue}
            marginTop={16} />
        </View>
      </View>
      <View style={{ width: '100%', height: 0.7, backgroundColor: Colors.appBlue, marginBottom: 12 }} />

      <TouchableOpacity
        onPress={() => { navigation.navigate('InviteListScreen') }}>
        <View style={{ paddingHorizontal: 16, paddingVertical: 12, width: '100%', height: 50, flexDirection: 'row', marginBottom: 8 }}>
          <Image source={require('../../../assets/images/ic_people.png')}
            style={{ width: 18, height: 18, resizeMode: 'contain', tintColor: Colors.appBlue }} />
          <SimpleText
            title={'Invites Sent'}
            fontSize={16}
            fontWeight={'bold'}
            marginLeft={18}
            color={Colors.appBlue} />

        </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress = {() => {navigation.navigate('NewConnectionListScreen')}}>
        <View style={{ paddingHorizontal: 16, paddingVertical: 12, width: '100%', height: 50, flexDirection: 'row', marginBottom: 8 }}>
          <Image source={require('../../../assets/images/ic_people.png')}
            style={{ width: 18, height: 18, resizeMode: 'contain', tintColor: Colors.appBlue }} />
          <SimpleText
            title={'New Connections'}
            fontSize={16}
            fontWeight={'bold'}
            marginLeft={18}
            color={Colors.appBlue} />

        </View>
      </TouchableOpacity>
      <TouchableOpacity
      onPress = {() =>{ navigation.navigate('MessageSentScreen')}}>
        <View style={{ paddingHorizontal: 16, paddingVertical: 12, width: '100%', height: 50, flexDirection: 'row', marginBottom: 8 }}>
          <Image source={require('../../../assets/images/ic_people.png')}
            style={{ width: 18, height: 18, resizeMode: 'contain', tintColor: Colors.appBlue }} />
          <SimpleText
            title={'Messages Sent'}
            fontSize={16}
            fontWeight={'bold'}
            marginLeft={18}
            color={Colors.appBlue} />

        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{ paddingHorizontal: 16, paddingVertical: 12, width: '100%', height: 50, flexDirection: 'row', marginBottom: 8 }}>
          <Image source={require('../../../assets/images/ic_people.png')}
            style={{ width: 18, height: 18, resizeMode: 'contain', tintColor: Colors.appBlue }} />
          <SimpleText
            title={'Charts'}
            fontSize={16}
            fontWeight={'bold'}
            marginLeft={18}
            color={Colors.appBlue} />

        </View>
      </TouchableOpacity>
      <TouchableOpacity
      onPress = {() =>{navigation.navigate('LearnMoreScreen')}}>
        <View style={{ paddingHorizontal: 16, paddingVertical: 12, width: '100%', height: 50, flexDirection: 'row', marginBottom: 8 }}>
          <Image source={require('../../../assets/images/ic_people.png')}
            style={{ width: 18, height: 18, resizeMode: 'contain', tintColor: Colors.appBlue }} />
          <SimpleText
            title={'Learn More'}
            fontSize={16}
            fontWeight={'bold'}
            marginLeft={18}
            color={Colors.appBlue} />

        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate('IntroScreen') }}>
        <View style={{ paddingHorizontal: 16, paddingVertical: 12, width: '100%', height: 50, flexDirection: 'row', marginBottom: 8 }}>
          <Image source={require('../../../assets/images/ic_people.png')}
            style={{ width: 18, height: 18, resizeMode: 'contain', tintColor: Colors.appBlue }} />
          <SimpleText
            title={'Upgrade'}
            fontSize={16}
            fontWeight={'bold'}
            marginLeft={18}
            color={Colors.appBlue} />

        </View>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  iconStyle: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginEnd: 12
  }
});

export default CustomSidebarMenu;
