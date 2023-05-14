import React from 'react';

export default function Input(props) {

    const {propClass, label, inputType, icon} = props;

    const formatIcon = (valStr) => {
        return <div dangerouslySetInnerHTML={{__html: `${valStr}`}} />
    };

    return (
        <div className={`comp-input ${propClass}-wrapper`}>
            <h3 className={`${propClass}-label`}>{label}</h3>
            <input type={inputType} className={`${propClass}-input`} />
        </div>
    );
}