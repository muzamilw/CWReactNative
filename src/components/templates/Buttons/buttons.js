import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Layout from '../../../constants/Layout';
import SimpleText from '../../templates/Text/SimpleText';
import { LinearGradient } from 'react-native-linear-gradient';



export const FixedWidthButton = props => (
    <TouchableOpacity
        onPress={props.onPress}
        disabled={props.disabled}
        style={{
            backgroundColor: props.backgroundColor,
            height: props.height,
            width: props.isDynamic ? Layout.window.width * props.width : props.width,
            justifyContent: props.justifyContent,
            alignItems: props.alignItems,
            borderRadius: props.borderRadius,
            marginBottom: props.marginBottom,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight,
            marginTop: props.marginTop,
            alignSelf: props.alignSelf,
            borderColor: props.borderColor,
            borderWidth: props.borderWidth,
            position: props.position,
            bottom: props.bottom,
            top: props.top,
            right: props.right,
            padding: props.padding,
        }}>
        <Text style={{ color: props.color, fontFamily: props.fontFamily ? props.fontFamily : 'Roboto-Regular', fontWeight: props.weight, fontSize: props.fontSize }}>{props.title}</Text>
    </TouchableOpacity>
);

export const GradientSaveButton = props => (
    <TouchableOpacity
        onPress={props.onPress}
        disabled={props.disabled}
        style={{
            backgroundColor: props.backgroundColor,
            height: props.height,
            width: props.isDynamic ? Layout.window.width * props.width : props.width,
            justifyContent: props.justifyContent,
            alignItems: props.alignItems,
            borderRadius: props.borderRadius,
            marginBottom: props.marginBottom,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight,
            marginTop: props.marginTop,
            alignSelf: props.alignSelf,
            borderColor: props.borderColor,
            borderWidth: props.borderWidth,
            position: props.position,
            bottom: props.bottom,
            top: props.top,
            right: props.right
        }}>
        {!props.disabled &&
            <LinearGradient colors={['#208BD9', '#0CB7B9', '#6EE2C0']}
                style={{
                    height: props.height,
                    width: props.isDynamic ? Layout.window.width * props.width : props.width,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 28,
                }}>
                <Text style={{ color: props.color, fontFamily: props.fontFamily ? props.fontFamily : 'Roboto-Regular', fontWeight: props.weight, fontSize: props.fontSize }}>{props.title}</Text>
            </LinearGradient>}
        {props.disabled &&
            <Text style={{ color: props.color, fontFamily: props.fontFamily ? props.fontFamily : 'Roboto-Regular', fontWeight: props.weight, fontSize: props.fontSize }}>{props.title}</Text>}
    </TouchableOpacity>
);

export const GradientButton = props => (
    <TouchableOpacity
        onPress={props.onPress}
        disabled={props.disabled}>
        <LinearGradient colors={['#658C8E', '#5DCF9B']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={[0.2, 1]}
            style={{
                height: props.height,
                width: props.width,
                justifyContent: props.justifyContent,
                alignItems: props.alignItems,
                borderRadius: props.borderRadius,
                marginBottom: props.marginBottom,
                marginLeft: props.marginLeft,
                marginRight: props.marginRight,
                marginTop: props.marginTop,
                alignSelf: props.alignSelf,
            }}>
            <SimpleText
                title={props.title}
                fontSize={props.fontSize}
                alignSelf={'center'}
                color={props.color}
                fontWeight={props.fontWeight}
                fontFamily={props.fontFamily}
            />
        </LinearGradient>
    </TouchableOpacity>
);

export const DottedButton = props => (
    <TouchableOpacity
        onPress={props.onPress}
        style={{
            flex: 1,
            backgroundColor: props.backgroundColor,
            height: props.height,
            width: props.isDynamic ? Layout.window.width * props.width : props.width,
            justifyContent: props.justifyContent,
            alignItems: props.alignItems,
            borderRadius: props.borderRadius,
            marginBottom: props.marginBottom,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight,
            marginTop: props.marginTop,
            alignSelf: props.alignSelf,
            borderColor: props.borderColor,
            borderWidth: props.borderWidth,
            position: props.position,
            bottom: props.bottom,
            borderStyle: props.borderStyle,
            borderColor: props.borderColor,
            padding: props.padding,
            paddingLeft: props.paddingLeft,
            paddingRight: props.paddingRight,
            paddingBottom: props.paddingBottom,
            paddingTop: props.paddingTop,
        }}>
        <SimpleText
            title={props.title}
            fontSize={props.fontSize}
            alignSelf={'center'}
            color={props.color}
            fontWeight={props.fontWeight}
            fontFamily={props.fontFamily}
        />
    </TouchableOpacity>
);