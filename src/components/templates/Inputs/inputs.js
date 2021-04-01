import React from "react";
import { View, TextInput,Platform,  } from 'react-native';
import Layout from '../../../constants/Layout';
import Colors from '../../../constants/Colors';

export const InputContainer = props => {

    return (<View
        pointerEvents={props.disabled ? 'none' : 'auto'}
        style={
            
                {
                    width: Layout.window.width * props.width,
                    width: Layout.window.width * props.width,
                    height: props.height,
                    flexDirection: props.flexDirection,
                    justifyContent: props.justifyContent,
                    alignItems: props.alignItems,
                    borderWidth: props.borderWidth,
                    borderRadius: props.borderRadius,
                    borderColor: props.borderColor,
                    marginBottom: props.marginBottom,
                    marginLeft: props.marginLeft,
                    marginRight: props.marginRight,
                    marginTop: props.marginTop,
                    alignSelf: props.alignSelf,
                    backgroundColor: props.backgroundColor,
                    
                } 
        }>
        {props.children}
    </View>);
};

export const CustomTextInput = React.forwardRef((props, ref) => (
    <TextInput
        editable={props.editable}
        value={props.value}
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
        returnKeyType={props.returnKeyType}
        onSubmitEditing={props.onSubmitEditing}
        ref={ref}
        
        maxLength = {props.maxLength}
        secureTextEntry={props.secureTextEntry}
        keyboardType={Platform.OS != 'web' ? props.keyboardType : 'default'}
        placeholderTextColor={props.isPlaceholderColor ?
            Colors.inputColor : Colors.placeholderColor}
        style={{
            backgroundColor: props.editable == false ? Colors.disabledTextInput : 'transparent',
            color: Colors.inputColor,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight,
            paddingRight: props.paddingRight,
            paddingLeft: props.paddingLeft,
            fontSize: props.fontSize,
            alignSelf: props.alignSelf,
            textAlign: Layout.window.isRTL ? 'right' : 'left',
            flex: 1,
        }}>
    </TextInput>
));

export const TextInputComponent = props => {
    return (
        <View>
            {props.children}
        </View>
    );
};