import React, { useEffect } from 'react';
import { LogBox, ScrollView, Text, View } from 'react-native';

import CustomHeader from '../components/CustomHeader';

import formatMoney from '../hooks/useFormat';

import { general } from '../assets/customTheme';

const HomeDetailScreen = (item: any) => {
    const navigation = item.navigation;
    const data = item.route.params;

    useEffect(() => { LogBox.ignoreAllLogs() }, [])

    return (
        <ScrollView
            showsVerticalScrollIndicator={ false }
            style={ general.fullScreen }
        >
            <CustomHeader navigation={ navigation } text='Regresar' />

            <View style={[ general.globalMargin ]}>
                <Text style={ general.titleFlatList }>
                    Detalle del movimiento
                </Text>

                <View style={[ general.containerDetail, general.shadow, { height: 'auto' }]}>
                    <View style={{ marginBottom: 20, }}>
                        <Text style={[ general.labelStatus, { marginBottom: 14, }]}>
                            Nombre del movimiento
                        </Text>
                        <Text style={[ general.textStatus, { paddingBottom: 0, }]}>
                            { data.name }
                        </Text>
                    </View>
                    <View style={{ marginBottom: 20, }}>
                        <Text style={[ general.labelStatus, { marginBottom: 14, }]}>
                            Tipo de movimiento
                        </Text>
                        <Text style={[ general.textStatus, { paddingBottom: 0, }]}>
                            { data.type }
                        </Text>
                    </View>
                    <View>
                        <Text style={[ general.labelStatus, { marginBottom: 14, }]}>
                            Monto
                        </Text>
                        <Text style={ general.textAmount }>
                            { formatMoney(data.amount) }
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default HomeDetailScreen;