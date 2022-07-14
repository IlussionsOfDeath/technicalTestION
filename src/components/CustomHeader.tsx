import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { HeaderProps } from '../helpers/interfaces';
import { colors } from '../assets/customTheme';
import CustomButton from './CustomButton';

const CustomHeader = ({ isHome, navigation, text }: HeaderProps) => {
    const goBack = () => {
        navigation.goBack()
    }
    
    return (
        <View style={ styles.container }>
            <View style={[ styles.menu_container, isHome == true && { marginHorizontal: 30 }]}>
                {
                    isHome ?
                        <>
                            <View style={[ styles.icon_container, ]}>
                                <Text style={{ color: colors.transparent }}>
                                    Hola
                                </Text>
                            </View>
                            <View style={ styles.icon_container }>
                                <Text style={ styles.text }>
                                    Hola Frank
                                </Text>
                            </View>
                            <View style={ styles.icon_container }>
                                <Image
                                    source={ require('../assets/images/user.png') }
                                    style={ styles.card_image }
                                />
                            </View>
                        </>
                    :
                        <>
                            <CustomButton
                                customPosition={[ styles.icon_container, { justifyContent: 'flex-start', }]}
                                icon='arrow-back-outline'
                                onPress={ goBack }
                                type='LINK'
                            />
                            <CustomButton
                                customPosition={[ styles.icon_container, { justifyContent: 'flex-end' }]}
                                label={ text ? text : 'Cancelar'}
                                onPress={ goBack }
                                type='LINK'
                            />
                        </>
                }
            </View>
        </View>
    )
}

export default CustomHeader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.transparent,
        height: 50,
    },
    menu_container: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    icon_container: {
        flexDirection: 'row',
    },
    card_image: {
        borderRadius: 30,
        height: 24,
        width: 24,
    },
    text: {
        color: colors.black,
        fontSize: 16,
        fontWeight: '600',
    },
})