import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { InputProps } from '../helpers/interfaces';
import { colors } from '../assets/customTheme';
const CustomInput = ({ keyboardType, onChangeText, placeholder, value }: InputProps) => {
    return (
        <View style={ styles.container }>
            <TextInput
                autoCapitalize='words'
                autoComplete='off'
                keyboardType={ keyboardType }
                onChangeText={ onChangeText }
                placeholder={ placeholder }
                placeholderTextColor={ colors.black }
                style={ styles.input }
                value={ value }
            />
        </View>
    )
}

export default CustomInput;

const styles = StyleSheet.create({
    container: {
        borderColor: '#5acaee',
        borderWidth: 1,
        height: 40,
        marginVertical: 9,
    },
    input: {
        color: colors.black,
        flex: 1,
        fontSize: 14,
        fontWeight: '600',
        marginHorizontal: 18,
    },
})