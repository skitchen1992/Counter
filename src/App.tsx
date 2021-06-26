import React, {ChangeEvent, useEffect, useState} from 'react';

import s from './App.module.css';
import Counter from "./components/Counter/Counter";
import SetCounter from "./components/SetCounter/SetCounter";


function App() {

    const [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [displayValue, setDisplayValue] = useState<number | string>('')
    const [isSetButtonDisabled, setIsSetButtonDisabled] = useState(true)
    const [isIncButtonDisabled, setIsIncButtonDisabled] = useState(true)
    const [isResetButtonDisabled, setIsResetButtonDisabled] = useState(true)
    const [isMaxInputError, setIsMaxInputError] = useState<boolean>(true)
    const [isStartInputError, setIsStartInputError] = useState<boolean>(true)


    useEffect(() => {
        let counterAsString = localStorage.getItem('counter')

        if (counterAsString) {
            const counter = JSON.parse(counterAsString)
            setMaxValue(counter.maxValue)
            setStartValue(counter.startValue)
            setDisplayValue(counter.value)//=======counter.value
            setIsSetButtonDisabled(counter.valueDisabledBtnSet)
            setIsIncButtonDisabled(counter.valueDisabledBtnInc)
            setIsResetButtonDisabled(counter.valueDisabledBtnReset)
            setIsMaxInputError(counter.errorMaxBtn)
            setIsStartInputError(counter.errorStartBtn)
        }
    }, [])

    useEffect(() => {

        const counter = {
            maxValue,
            startValue,
            value: displayValue, //startValue
            valueDisabledBtnSet: isSetButtonDisabled,
            valueDisabledBtnInc: isIncButtonDisabled,
            valueDisabledBtnReset: isResetButtonDisabled,
            errorMaxBtn: isMaxInputError,
            errorStartBtn: isStartInputError
        }
        localStorage.setItem('counter', JSON.stringify(counter))
    }, [maxValue, startValue, displayValue, isSetButtonDisabled, isIncButtonDisabled, isResetButtonDisabled, isMaxInputError, isStartInputError])

    useEffect(() => {
        if (maxValue === startValue) {
            setIsStartInputError(true)
            setIsMaxInputError(true)
        }
        if (maxValue > startValue) {
            setIsMaxInputError(false)
            setIsStartInputError(false)
        }
        if (maxValue < startValue) {
            setIsMaxInputError(true)
            setIsStartInputError(true)
        }
        if (startValue < 0) {
            setIsStartInputError(true)
        }
        if (displayValue === maxValue) {
            setIsIncButtonDisabled(true)
        }

    }, [startValue, maxValue, displayValue])


    const changeMaxValue = (maxValue: number) => {
        setMaxValue(maxValue)
        setIsIncButtonDisabled(true)
        setIsResetButtonDisabled(true)
        if (maxValue === startValue || maxValue < startValue || startValue < 0) {
            setIsSetButtonDisabled(true)
            setDisplayValue("incorrect value")
        } else {
            setIsSetButtonDisabled(false)
            setDisplayValue("enter values and press 'set'")
        }
    }

    const changeStartValue = (startValue: number) => {
        setStartValue(startValue)
        setIsIncButtonDisabled(true)
        setIsResetButtonDisabled(true)
        if (maxValue === startValue || maxValue < startValue || startValue < 0) {
            setIsSetButtonDisabled(true)
            setDisplayValue("incorrect value")
        } else {
            setIsSetButtonDisabled(false)
        }
    }
    const setNewValue = () => {
        setIsSetButtonDisabled(true)
        setDisplayValue(startValue)
        setIsIncButtonDisabled(false)
        setIsResetButtonDisabled(false)
    }
    const increment = () => {
        setDisplayValue(+displayValue + 1)
    }
    const reset = () => {
        setDisplayValue(startValue)
        setIsIncButtonDisabled(false)
    }


    return (
        <>
            <div className={s.wrapper}>
                <div className={s.wrap}>
                    <SetCounter startValue={startValue}
                                maxValue={maxValue}
                                changeMaxValue={changeMaxValue}
                                changeStartValue={changeStartValue}
                                setNewValue={setNewValue}
                                isMaxInputError={isMaxInputError}
                                isStartInputError={isStartInputError}
                                isSetButtonDisabled={isSetButtonDisabled}
                    />
                </div>
                <div className={s.wrap}>
                    <Counter inc={increment}
                             reset={reset}
                             displayValue={displayValue}
                             maxValue={maxValue}
                             isIncButtonDisabled={isIncButtonDisabled}
                             isResetButtonDisabled={isResetButtonDisabled}/>
                </div>

            </div>

        </>


    );
}

export default App;

