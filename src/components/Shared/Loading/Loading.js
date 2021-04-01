import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import Colors from '../../../constants/Colors';

export const Loading = (props) => {
    return (
        <View style={props.styles}>
            <ActivityIndicator size="large" color={props.isWhite ? Colors.white : Colors.gradientEnd}/>
        </View>
    )
}

export default Loading;