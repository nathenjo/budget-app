import React, { useEffect } from 'react';

export default function Input(props) {

    const {propClass, propAttr} = props;

    useEffect(() => {
        if (propAttr) {
            propAttr.map(item => {
                for (const attr in item) {
                    document.querySelector(`.${propClass}-input`).setAttribute(attr,item[attr]);
                }
            })
        }
    }, [])

    return (
        <div className={`comp-input ${propClass}-wrapper`}>
            <h3 className={`${propClass}-label`}>{propClass.replace('-', ' ')}</h3>
            <input className={`${propClass}-input`} />
        </div>
    );
}