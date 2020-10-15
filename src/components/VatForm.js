import React, { useState } from 'react'

export default function VatForm({ searchVat }) {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        if (!value) {
            return
        }

        searchVat(value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="input m-r-sm"
                placeholder="Type a VAT number"
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">Search</button>
        </form>
    );
};
