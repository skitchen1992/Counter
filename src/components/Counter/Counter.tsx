import React from 'react';
import Value from "./Value/Value";
import Changes from "./Changes/Changes";

type CounterType = {
    inc: () => void
    value: number | string
    maxValue: number
    reset: () => void
    valueDisabledBtnInc: boolean
    valueDisabledBtnReset: boolean

}

const Counter: React.FC<CounterType> = (
    {value, maxValue, inc, reset, valueDisabledBtnInc, valueDisabledBtnReset}
) => {
    return (
        <>
            <Value value={value} maxValue={maxValue}/>
            <Changes inc={inc} value={value} maxValue={maxValue} reset={reset} valueDisabledBtnInc={valueDisabledBtnInc}
                     valueDisabledBtnReset={valueDisabledBtnReset}/>
        </>
    );
};

export default Counter;