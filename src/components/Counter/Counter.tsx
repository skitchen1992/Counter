import React from 'react';
import DisplayValue from "./Value/DisplayValue";
import Changes from "./Changes/Changes";

type CounterType = {
    inc: () => void
    displayValue: number | string
    maxValue: number
    reset: () => void
    isIncButtonDisabled: boolean
    isResetButtonDisabled: boolean

}

const Counter: React.FC<CounterType> = (
    {displayValue, maxValue, inc, reset, isIncButtonDisabled, isResetButtonDisabled}
) => {
    return (
        <>
            <DisplayValue displayValue={displayValue} maxValue={maxValue}/>
            <Changes inc={inc} displayValue={displayValue} maxValue={maxValue} reset={reset} isIncButtonDisabled={isIncButtonDisabled}
                     isResetButtonDisabled={isResetButtonDisabled}/>
        </>
    );
};

export default Counter;