import React, { useEffect } from 'react';
import { FlatList, LogBox, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconOcti from 'react-native-vector-icons/Octicons';
import Icons from 'react-native-vector-icons/Ionicons';

import CustomHeader from '../components/CustomHeader';
import CustomButton from '../components/CustomButton';
import CustomHistory from '../components/CustomHistory';

import formatNumber from '../hooks/useFormat';

import movements from '../helpers/dataJson/movements';
import accountStatus from '../helpers/dataJson/accountStatus';

import { Navigation } from '../helpers/interfaces';
import { general, colors } from '../assets/customTheme';

const HomeScreen = ({ navigation }: Navigation) => {
    const renderOption = ({ item }: any) => (
        <CustomHistory
            amount={ item.amount }
            date={ item.date }
            icon={ item.icon }
            name={ item.name }
            navigation={ navigation }
            time={ item.time }
            type={ item.type }
        />
    );

    useEffect(() => { LogBox.ignoreAllLogs() }, [])

    return (
        <View style={ general.fullScreen }>
            <CustomHeader isHome navigation={ navigation } />

            <View style={[ general.globalMargin, general.containerAmount ]}>
                <Text style={ general.labelAmount }>
                    SALDO DISPONIBLE
                </Text>
                <Text style={ general.textAmount }>
                    { formatNumber(accountStatus.amount) }
                </Text>
            </View>

            <View style={ general.purpleBG }>
                <TouchableOpacity
                    activeOpacity={ colors.opacity }
                    onPress={ () => navigation.navigate('RequestDetail', { navigation, accountStatus })}
                    style={ general.containerBG }
                >
                    <IconOcti name='star-fill' color={ colors.white } size={ 22 } />
                    <Text style={ general.textBG }>
                        Crear logro
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={ colors.opacity }
                    style={ general.containerBG }
                >
                    <Icons name='bookmark' color={ colors.white } size={ 22 } />
                    <Text style={ general.textBG }>
                        Pagar servicio
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={ colors.opacity }
                    style={ general.containerBG }
                >
                    <IconOcti name='bell-fill' color={ colors.white } size={ 22 } />
                    <Text style={ general.textBG }>
                        Subscripción
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={[ general.globalMargin, general.containerStatus ]}>
                <Text style={ general.labelStatus }>
                    Tu próximo pago
                </Text>
                <Text style={ general.textStatus }>
                    { formatNumber(accountStatus.nextPayment) }
                </Text>
                <View style={ general.alignBetween }>
                    <View>
                        <Text style={[ general.labelStatus, { paddingBottom: 4, paddingTop: 0, }]}>
                            Fecha de pago
                        </Text>
                        <Text style={ general.dateStatus }>
                            16 Enero
                        </Text>
                    </View>
                    <CustomButton
                        label='PAGAR AHORA'
                        type='SECONDARY'
                    />
                </View>
                <View style={[ general.containerFooterStatus, { paddingBottom: 10, }]}>
                    <View style={ general.alignCenter }>
                        <Icon name='bag' color={ colors.blue } size={ 12 } /><Text style={[ general.labelFooterStatus, ]}>
                            Mis logros
                        </Text>
                    </View>
                    <Text style={ general.textFooterStatus }>
                        { formatNumber(accountStatus.archivement) }
                    </Text>
                </View>
                <View style={[ general.containerFooterStatus, ]}>
                    <View style={ general.alignCenter }>
                        <Icon name='credit-card' color={ colors.blue } size={ 12 } /><Text style={ general.labelFooterStatus }>
                            Compras con TDC
                        </Text>
                    </View>
                    <Text style={ general.textFooterStatus }>
                        { formatNumber(accountStatus.purchasesTDC) }
                    </Text>
                </View>
            </View>

            <View style={[ general.globalMinMargin, general.alignBetween, { alignItems: 'flex-end', top: -20, }]}>
                <Text style={ general.titleFlatList }>
                    Tus movimientos
                </Text>
                <TouchableOpacity
                    activeOpacity={ colors.opacity }
                >
                    <Text style={ general.subtitleFlatList }>
                        Ver todos
                    </Text>
                </TouchableOpacity>
            </View>
            
            <FlatList
                data={ movements && movements }
                renderItem={ renderOption }
                keyExtractor={ item => item.id }
            />

            <View style={{ flex: 1, paddingBottom: 53, }} />
        </View>
    )
}

export default HomeScreen;