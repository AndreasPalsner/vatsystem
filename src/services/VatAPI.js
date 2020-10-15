import axios from 'axios'

export default {
    baseUrl: 'https://vat.erply.com',
    async get(uri, config) {
        const response = await axios.get(this.baseUrl + uri, config)

        return response.data
    }
}
