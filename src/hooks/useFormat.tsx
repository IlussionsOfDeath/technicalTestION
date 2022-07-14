import 'intl';
import 'intl/locale-data/jsonp/es-MX';

const formatNumber = (number: any) => {
    return new Intl.NumberFormat('es-MX', {
        style:'currency',
        currency: 'MXN',
    }).format(number)
}

export default formatNumber;