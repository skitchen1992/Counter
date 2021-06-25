import React, {ChangeEvent, useEffect, useState} from 'react';

import s from './App.module.css';
import Counter from "./components/Counter/Counter";
import SetCounter from "./components/SetCounter/SetCounter";


function App() {

    const [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [value, setValue] = useState<number | string>('')
    const [valueDisabledBtnSet, setValueBtnSet] = useState(false)
    const [valueDisabledBtnInc, setValueBtnInc] = useState(false)
    const [valueDisabledBtnReset, setValueBtnReset] = useState(false)
    const [errorMaxBtn, setErrorMaxBtn] = useState<boolean>(true)
    const [errorStartBtn, setErrorStartBtn] = useState<boolean>(true)

    useEffect(() => {

        let counterAsString = localStorage.getItem('counter')

        if (counterAsString) {
            const counter = JSON.parse(counterAsString)
            setMaxValue(counter.maxValue)
            setStartValue(counter.startValue)
            setValue(counter.value)
            setValueBtnSet(counter.valueDisabledBtnSet)
            setValueBtnInc(counter.valueDisabledBtnInc)
            setValueBtnReset(counter.valueDisabledBtnReset)
            setErrorMaxBtn(counter.errorMaxBtn)
            setErrorStartBtn(counter.errorStartBtn)
        }

    }, [])


    useEffect(() => {

        if (value === maxValue) {
            setValueBtnInc((value) => true)
        }
    }, [value, maxValue, valueDisabledBtnSet])

    useEffect(() => {
        if (startValue === maxValue || startValue > maxValue || startValue < 0) {
            setValueBtnSet( true)

        } else {
            setValueBtnSet( false)
        }

    }, [maxValue, startValue])

    useEffect(() => {

        if (maxValue === startValue || maxValue < startValue) {
            setErrorMaxBtn( true)
            setValue( "incorrect value")

        }
        if (startValue < 0 || maxValue === startValue || maxValue < startValue) {
            setErrorStartBtn( true)
            setValue("incorrect value")
        } else {
            setErrorMaxBtn( false)
            setErrorStartBtn( false)
            setValue( "enter values and press 'set'")
        }
    }, [maxValue, startValue])


    const changeMaxValue = (maxValue: number) => {

            setMaxValue(maxValue);
            setValueBtnInc(true)
            setValueBtnReset(true)
////тут писать логику

    }
    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
        setValueBtnInc(true)
        setValueBtnReset( true)
    }
    const setNewStartValue = () => {
        setValue(startValue)
        setValueBtnSet(true)
        setValueBtnInc( false)
        setValueBtnReset( false)

        const counter = {
            maxValue,
            startValue,
            value: startValue,
            valueDisabledBtnSet,
            valueDisabledBtnInc,
            valueDisabledBtnReset,
            errorMaxBtn,
            errorStartBtn
        }
        localStorage.setItem('counter', JSON.stringify(counter))



    }
    const inc = () => {
        setValue(+value + 1)
    }
    const reset = () => {
        setValue(startValue)
        setValueBtnInc((value) => false)
    }


    return (
        <>
            <div className={s.wrapper}>
                <div className={s.wrap}>
                    <SetCounter startValue={startValue}
                                maxValue={maxValue}
                                changeMaxValue={changeMaxValue}
                                changeStartValue={changeStartValue}
                                setNewStartValue={setNewStartValue}
                                errorMaxBtn={errorMaxBtn}
                                errorStartBtn={errorStartBtn}
                                valueDisabledBtnSet={valueDisabledBtnSet}
                    />
                </div>
                <div className={s.wrap}>
                    <Counter inc={inc}
                             reset={reset}
                             value={value}
                             maxValue={maxValue}
                             valueDisabledBtnInc={valueDisabledBtnInc}
                             valueDisabledBtnReset={valueDisabledBtnReset}/>
                </div>

            </div>

        </>


    );
}

export default App;
