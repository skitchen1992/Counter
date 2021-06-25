import React, {ChangeEvent, useState} from 'react';
import s from "../SetValue/SetValue.module.css";

type SetValueType = {
    startValue: number
    maxValue: number
    changeMaxValue: (e: number) => void
    changeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    errorMaxBtn: boolean
    errorStartBtn: boolean

}

const SetValue = (props: SetValueType) => {
    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(+e.currentTarget.value)
    }
    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => props.changeStartValue(e)
    const finalClassNameMax = `${s.default} ${props.errorMaxBtn ? s.error : ''}`
    const finalClassNameStart = `${s.default} ${props.errorStartBtn ? s.error : ''} `
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