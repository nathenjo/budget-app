import React from 'react';

export default function Input(props) {

    const {propClass, inputType, propLength, propPlace} = props;

    const formatIcon = (valStr) => {
        return <div dangerouslySetInnerHTML={{__html: `${valStr}`}} />
    };

    return (
        <div className={`comp-input ${propClass}-wrapper`}>
            <h3 className={`${propClass}-label`}>{propClass.replace('-', ' ')}</h3>
            <input maxLength={propLength} placeholder={propPlace} type={inputType} className={`${propClass}-input`} />
        </div>
    );
}