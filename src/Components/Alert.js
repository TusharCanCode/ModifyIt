import React from 'react'

export default function Alert(props) {
    const capitalizeTheFirstWord = (literal) => {
        literal.toLowerCase();
        return literal[0].toUpperCase() + literal.slice(1);
    }
    return (
        <div className="alertclass" style={{ height: '50px' }}>
            {// If props.alert would be null then nothing will be returned
                props.alert &&
                <div className={`alert alert-${props.alert.status} alert-dismissible fade show`} role="alert">
                    <strong>{capitalizeTheFirstWord(props.alert.status)}:</strong> {props.alert.message}
                </div>
            }
        </div>
    )
}
