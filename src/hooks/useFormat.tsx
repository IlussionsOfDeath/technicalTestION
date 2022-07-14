import 'intl';
import 'intl/locale-data/jsonp/es-MX';

const formatMoney = (number: any) => {
    return new Intl.NumberFormat('es-MX', {
        style:'currency',
        currency: 'MXN',
    }).format(number)
}

export default formatMoney;