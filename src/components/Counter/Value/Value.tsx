import React from 'react';
import s from './Value.module.css';

type ValueType = {
    maxValue: number
    value: number | string
}

const Value = (props: ValueType) => {
    let finalStyle = `${props.value === +props.maxValue ? s.red : s.black} ${s.num}`
    return (
        <div className={s.wrap}>
            <div className={finalStyle}>{props.value}</div>
        </div>
    );
};

export default Value;