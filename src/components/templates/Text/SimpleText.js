import React from 'react';
import { Text } from 'react-native';

const SimpleText = props => (
    <Text style={{
        overflow:props.overflow ? props.overflow : 'visible',
        backgroundColor:props.backgroundColor,
        borderRadius:props.borderRadius,
        color: props.color,
        fontWeight: props.fontWeight,
        fontFamily: props.fontFamily,
        fontSize: props.fontSize,
        textDecorationLine: props.textDecorationLine,
        textAlign: props.textAlign,
        marginTop: props.marginTop,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
        marginBottom: props.marginBottom,
        paddingTop: props.paddingTop,
        paddingBottom : props.paddingBottom,
        paddingLeft : props.paddingLeft,
        paddingRight : props.paddingRight,
        padding: props.padding,
        alignSelf: props.alignSelf,
        lineHeight: props.lineHeight,
        flexWrap: 'wrap',
        width: props.width,
        height: props.height,
        textTransform: props.textTransform,
        position: props.position,
        top: props.top,
        right: props.right,
        left: props.left,
        bottom: props.bottom,
        flex:  props.flex,
        borderWidth : props.borderWidth,
        borderColor : props.borderColor,
        
    }} numberOfLines = {props.numberOfLines}
    ellipsizeMode = {props.ellipsizeMode}>{props.title}</Text>
);

export default SimpleText;
