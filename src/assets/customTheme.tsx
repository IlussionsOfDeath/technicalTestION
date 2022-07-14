import { StyleSheet } from 'react-native';

export const colors = {
    primary: '#22a8d2',
    white: '#FFFFFF',
    black: '#333333',
    blue: '#5acaee',
    background: 'rgba(34, 168, 210, 0.2)',
    transparent: 'transparent',

    primaryRbga: 'rgba(0, 0, 0, 0.54)',
    opacity: 0.8,
}

export const general = StyleSheet.create({
    fullScreen: {
        flex: 1,
    },
    globalMargin: {
        marginHorizontal: 36,
    },
    globalMinMargin: {
        marginHorizontal: 20,
    },
    globalMinPadding: {
        paddingHorizontal: 20,
    },

    containerAmount: {
        backgroundColor: colors.white,
        borderRadius: 4,
        height: 86,
        justifyContent: 'center',
        marginTop: 10,
        paddingHorizontal: 12,
    },
    labelAmount: {
        color: colors.black,
        fontSize: 12,
        lineHeight: 16,
        paddingBottom: 7,
    },
    textAmount: {
        color: '#bb64c8',
        fontSize: 34,
        fontWeight: 'bold',
        lineHeight: 40,
    },

    purpleBG: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#783183',
        flexDirection: 'row',
        height: 116,
        justifyContent: 'space-around',
        top: -20,
        zIndex: -1,
    },
    containerBG: {
        alignItems: 'center',
    },
    textBG: {
        color: colors.white,
        fontSize: 10,
        textAlign: 'center',
    },

    containerStatus: {
        backgroundColor: colors.white,
        borderRadius: 4,
        padding: 12,
        top: -40,
    },
    alignBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    alignCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    labelStatus: {
        color: colors.black,
        fontSize: 14,
        lineHeight: 16,
    },
    textStatus: {
        color: colors.black,
        fontSize: 28,
        fontWeight: '600',
        lineHeight: 40,
        paddingBottom: 8,
    },
    dateStatus: {
        color: colors.black,
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 16,
        paddingBottom: 12,
        paddingTop: 4,
    },
    containerFooterStatus: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    labelFooterStatus: {
        color: colors.black,
        fontSize: 12,
        lineHeight: 16,
        paddingHorizontal: 12,
    },
    textFooterStatus: {
        color: colors.black,
        fontWeight: '600',
    },

    titleFlatList: {
        color: colors.black,
        fontSize: 24,
        fontWeight: '600',
        lineHeight: 32,
    },
    subtitleFlatList: {
        color: colors.blue,
        fontSize: 15,
        lineHeight: 32,
    },

    containerDetail: {
        backgroundColor: colors.white,
        borderRadius: 4,
        height: 120,
        justifyContent: 'center',
        marginVertical: 20,
        paddingHorizontal: 20,
        paddingVertical: 36,
    },
    tileGraphic: {
        color: colors.black,
        fontSize: 15,
        fontWeight: '600',
        lineHeight: 25,
    },
    containerGraphic: {
        alignSelf: 'center',
        backgroundColor: colors.transparent,
        borderRadius: 1000,
        height: 230,
        justifyContent: 'center',
        marginVertical: 26,
        width: 230,
    },
    labelGraphic: {
        color: colors.black,
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 24,
        textAlign: 'center',
    },
    footerGraphic: {
        color: colors.blue,
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 16,
        textAlign: 'center',
    },
});