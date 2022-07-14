import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ButtonProps } from '../helpers/interfaces';
import { colors } from '../assets/customTheme';

const CustomButton = ({ customPosition, icon, label, onPress, type='PRIMARY' }: ButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={ colors.opacity }
            onPress={ onPress }
            style={[ styles.container, customPosition ? customPosition : styles[`container_${type}`] ]}
        >
            { icon &&
                <Icon
                    name={ icon }
                    color={ colors.black }
                    size={ 24 }
                />
            }
            { label &&
                <Text style={[ styles.text, styles[`text_${type}`] ]}>
                    { label }
                </Text>
            }
        </TouchableOpacity>
    )
}

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderRadius: 4,
        justifyContent: 'center',
    },
    container_PRIMARY: {
        backgroundColor: '#5acaee',
        height: 50,
    },
    container_SECONDARY: {
        backgroundColor: '#5acaee',
        height: 32,
    },
    text: {
        fontSize: 16,
    },
    text_PRIMARY: {
        color: colors.white,
    },
    text_SECONDARY: {
        color: colors.white,
        fontSize: 12,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    text_LINK: {
        color: colors.primary,
    },
})