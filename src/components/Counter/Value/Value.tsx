import React from 'react';
import s from './Value.module.css';

type ValueType = {
    maxValue: number
    value: number | string
}


const Value = (props: ValueType) => {


    let finalStyle = () => {
        if (props.value === +props.maxValue) {
            return `${s.red} ${s.num} ${s.default}`
        }
        if (typeof props.value === 'number') {
            return `${s.num} ${s.default}`
        }
        if (props.value === "incorrect value") {
            return `${s.red} ${s.default} `
        } else {
            return `${s.default}`
        }

    }

    return (
        <div className={s.wrap}>
            <div className={finalStyle()}>{props.value}</div>
        </div>
    );
};

export default Value;