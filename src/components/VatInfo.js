import React from 'react'

export default function VatInfo({ info }) {
    if (Object.keys(info).length === 0) {
        return (
            <div className="vat-info">
                <div className="vat-info-header background-danger">
                    <h3>VAT number is invalid</h3>
                </div>
            </div>
        )
    }
    return (
        <div className="vat-info">
            <div className={`vat-info-header ${info.Valid ? 'background-success' : 'background-danger'}`}>
                <h3>{info.Valid ? 'VAT number exists' : 'VAT number does not exist'}</h3>
            </div>
            <table className="table vat-info-table">
                <tbody>
                    <tr>
                        <th>Country code</th>
                        <td>{info.CountryCode}</td>
                    </tr>
                    <tr>
                        <th>VAT number</th>
                        <td>{info.VATNumber}</td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td>{info.Name}</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>{info.Address}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
