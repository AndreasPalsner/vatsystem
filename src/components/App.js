import React, { useState } from 'react'
import VatInfo from './VatInfo'
import VatForm from './VatForm'
import { getVatInfoByNumber } from '../services/VatNumberService'

const App = () => {
    const [vat, setVat] = useState(null)

    const searchVat = search => {
        getVatInfoByNumber(search)
            .then(vat => setVat(vat))
            .catch(err => {
                console.log(err)
                setVat({})
            })
    }

    return (
        <div>
            <div id="vat-form-container">
                <h1>Search VAT number</h1>
                <VatForm searchVat={searchVat}></VatForm>
            </div>
            <div id="vat-info-container">
                {vat !== null
                    ? <VatInfo info={vat} />
                    : ''
                }
            </div>
        </div>
    )
}

export default App
