import React from 'react';
import Value from "./Value/Value";
import Changes from "./Changes/Changes";

type CounterType = {
    inc: () => void
    value: number | string
    maxValue: number
    reset:()=>void


}

const Counter: React.FC<CounterType> = (
    {value, maxValue, inc, reset}
) => {
    return (
        <>
            <Value value={value} maxValue={maxValue}/>
            <Changes inc={inc} value={value} maxValue={maxValue} reset={reset}/>
        </>
    );
};

export default Counter;