import React from 'react';
import { ImageBackground, Keyboard, ScrollView, Text, View } from 'react-native';

import CustomHeader from '../components/CustomHeader';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

import formatMoney from '../hooks/useFormat';
import useForm from '../hooks/useForm';

import { colors, general } from '../assets/customTheme';

const RequestDetailScreen = (props: any) => {
    const { goal, amount, onChange } = useForm({
        goal: '', amount: 0
    })
    const navigation = props.navigation;
    const accountData = props.route.params.accountStatus;

    const iWantIt = () => {
        Keyboard.dismiss();
        console.log({ goal, amount })
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={ false }
            style={ general.fullScreen }
        >
            <CustomHeader navigation={ navigation } />

            <View style={[ general.globalMargin ]}>
                <Text style={ general.titleFlatList }>
                    Disposición
                </Text>

                <View style={[ general.containerDetail, general.shadow ]}>
                    <Text style={[ general.labelStatus, { marginBottom: 14, }]}>
                        Tienes disponible
                    </Text>
                    <Text style={ general.textAmount }>
                        { formatMoney(accountData?.amount) }
                    </Text>
                </View>

                <CustomInput
                    onChangeText={ (value: string) => onChange(value, 'goal') }
                    placeholder='Meta'
                    value={ goal }
                />

                <CustomInput
                    keyboardType='numeric'
                    onChangeText={ (value: string) => onChange(value, 'amount') }
                    placeholder='Monto'
                    value={ amount }
                />

                <Text style={ general.tileGraphic }>
                    Selecciona tu plazo
                </Text>

                <ImageBackground
                    source={ require('../assets/images/graphic.png') }
                    style={ general.containerGraphic }
                >
                    <Text style={ general.labelGraphic }>
                        Tu pago mensual
                    </Text>
                    <Text style={[ general.labelGraphic, { fontSize: 24, marginTop: 4, }]}>
                        { formatMoney(12000) }
                    </Text>
                    <Text style={[ general.labelGraphic, { fontSize: 14, }]}>
                        a 60 meses
                    </Text>
                    <Text style={ general.footerGraphic }>
                        Tasa de interés {'\n'} 16.6%
                    </Text>
                </ImageBackground>

                <CustomButton
                    label='LO QUIERO'
                    onPress={ iWantIt }
                />
            </View>
        </ScrollView>
    )
}

export default RequestDetailScreen;