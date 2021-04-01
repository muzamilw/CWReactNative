import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';


const Indicator = ({ position }) => {
    return (
        <View style={styles.container}>
            <View style = {position === 0 ? styles.dotSelected : styles.dotUnSelected} />
            <View style = {position === 1 ? styles.dotSelected : styles.dotUnSelected} />
            <View style = {position === 2 ? styles.dotSelected : styles.dotUnSelected} />
            <View style = {position === 3 ? styles.dotSelected : styles.dotUnSelected} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center', 
        flexDirection:'row'
    },
    dotSelected: {
        width: 9,
        height: 9,
        borderRadius: 9 / 2,
        backgroundColor: Colors.white,
        marginRight:4,
        borderWidth:2,
        borderColor:Colors.accountDetailBG
    },
    dotUnSelected: {
        width: 9,
        height: 9,
        borderRadius: 9 / 2,
        backgroundColor: Colors.borderColor,
        marginRight:4,
        borderWidth:2,
        borderColor:Colors.accountDetailBG
    }
})
export default Indicator;