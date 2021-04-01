/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';

const Badge = props => (
    <View style={[{...props}]}>
        <Text style={{color: props.color}}>{props.title}</Text>
    </View>
);

export default Badge;

// style={{
//     display: 'flex',
//     color: props.color,
//     fontWeight: props.fontWeight,
//     fontFamily: props.fontFamily,
//     fontSize: props.fontSize,
//     textDecorationLine: props.textDecorationLine,
//     textAlign: props.textAlign,
//     marginTop: props.marginTop,
//     marginLeft: props.marginLeft,
//     marginRight: props.marginRight,
//     marginBottom: props.marginBottom,
//     padding: props.padding,
//     alignSelf: props.alignSelf,
//     lineHeight: props.lineHeight,
//     width: props.width,
//     backgroundColor: props.backgroundColor,
// }}
