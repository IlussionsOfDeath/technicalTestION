import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import formatMoney from '../hooks/useFormat';

import { colors, general } from '../assets/customTheme';

const CustomHistory = (item: any) => {
    const today = new Date();

    const navigation = item.navigation;
    
    return (
        <TouchableOpacity
            activeOpacity={ colors.opacity }
            onPress={ () => navigation.navigate('HomeDetail', item) }
            style={[ styles.itemCard, general.globalMinPadding, general.shadow ]}
        >
            <View style={{ alignItems: 'center', flexDirection: 'row', }}>
                <View style={{ height: 40, justifyContent: 'center', width: 40, }}>
                    <Icon name={ item?.icon } color={ colors.black } size={ 30 } />
                </View>
                <View style={{ alignContent: 'center', flex: 1, marginLeft: 16, }}>
                    <View style={ general.alignBetween }>
                        <Text style={ styles.cardTitle }>
                            { item.name && item.name }
                        </Text>
                        <Text style={ styles.cardSubtitle }>
                            { item?.time }
                        </Text>
                    </View>
                    <View style={ general.alignBetween }>
                        <Text style={ styles.cardSubtitle }>
                            { item?.type }
                        </Text>
                        <Text style={ styles.cardTitle }>
                            { formatMoney(item?.amount) }
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CustomHistory;

const styles = StyleSheet.create({
    itemCard: {
        alignItems: 'center',
        backgroundColor: colors.white,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        marginBottom: 1,
    },
    cardTitle: {
        color: colors.black,
        fontSize: 14,
        fontWeight: '600',
    },
    cardSubtitle: {
        color: colors.black,
        fontSize: 12,
    },
})