import VatAPI from './VatAPI'

export function getVatInfoByNumber(vatNumber) {
    return VatAPI.get('/numbers', {
        params: {
            vatNumber: vatNumber
        }
    })
}
