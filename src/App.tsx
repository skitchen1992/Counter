import React, {ChangeEvent, useState} from 'react';

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

    const changeMaxValue = (e:ChangeEvent<HTMLInputElement>)=>{
        setMaxValue(+e.currentTarget.value);
    }
    const changeStartValue = (e:ChangeEvent<HTMLInputElement>)=>{
        setStartValue(+e.currentTarget.value)
    }
    const setNewStartValue = () => {
        setValue(Number(startValue))
    }
    const inc = () => {
        setValue(+value + 1)
    }
    const reset = () => {
        setValue(startValue)
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
                                valueDisabledBtnSet={valueDisabledBtnSet}

                    />
                </div>
                <div className={s.wrap}>
                    <Counter inc={inc} reset={reset} value={value} maxValue={maxValue} />
                </div>


            </div>

        </>


    );
}

export default App;
//
// <label><input type="number" min="5" max="15" step="3" value="11"><span className="ir">:in-range</span><span
//     className="or">:out-of-range</span> type="<b>number</b>" min="5" max="15" step="3"</label>
