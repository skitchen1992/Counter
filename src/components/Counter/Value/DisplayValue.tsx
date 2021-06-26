import React from 'react';
import s from './Value.module.css';

type DisplayValueType = {
    maxValue: number
    displayValue: number | string
}


const DisplayValue = (props: DisplayValueType) => {


    let finalStyle = () => {
        if (props.displayValue === +props.maxValue) {
            return `${s.red} ${s.num} ${s.default}`
        }
        if (typeof props.displayValue === 'number') {
            return `${s.num} ${s.default}`
        }
        if (props.displayValue === "incorrect value") {
            return `${s.red} ${s.default} `
        } else {
            return `${s.default}`
        }

    }

    return (
        <div className={s.wrap}>
            <div className={finalStyle()}>{props.displayValue}</div>
        </div>
    );
};

export default DisplayValue;