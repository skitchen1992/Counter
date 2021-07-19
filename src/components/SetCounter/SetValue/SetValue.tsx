import React, {ChangeEvent} from 'react';
import s from "../SetValue/SetValue.module.css";

type SetValueType = {
    startValue: number
    maxValue: number
    changeMaxValue: (e: number) => void
    changeStartValue: (e: number) => void
    isMaxInputError: boolean
    isStartInputError: boolean

}

const SetValue = (props: SetValueType) => {
    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(+e.currentTarget.value)
    }
    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => props.changeStartValue(+e.currentTarget.value)
    const finalClassNameMax = `${s.default} ${props.isMaxInputError ? s.error : ''}`
    const finalClassNameStart = `${s.default} ${props.isStartInputError ? s.error : ''} `
    return (
        <div className={s.wrap}>
            <div className={s.value}>
                <div className={s.title}>max value:</div>
                <input className={finalClassNameMax} type="number" value={props.maxValue} onChange={changeMaxValue}/>
            </div>
            <div className={s.value}>
                <div className={s.title}>start value:</div>
                <input className={finalClassNameStart} type="number" value={props.startValue}
                       onChange={changeStartValue}/>
            </div>
        </div>
    );
};

export default SetValue;