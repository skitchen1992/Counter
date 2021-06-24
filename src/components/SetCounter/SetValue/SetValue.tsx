import React, {ChangeEvent} from 'react';
import s from "../SetValue/SetValue.module.css";

type SetValueType = {
    startValue: number
    maxValue: number
    changeMaxValue:(e:ChangeEvent<HTMLInputElement>)=>void
    changeStartValue:(e:ChangeEvent<HTMLInputElement>)=>void

}

const SetValue = (props:SetValueType) => {

    const changeMaxValue= (e:ChangeEvent<HTMLInputElement>)=>props.changeMaxValue(e)


    const changeStartValue = (e:ChangeEvent<HTMLInputElement>)=>props.changeStartValue(e)
    return (
        <div className={s.wrap}>
            <div className={s.value}>
                <div>max value</div>
                <input type="number" value={props.maxValue} onChange={changeMaxValue}/>
            </div>
            <div className={s.value}>
                <div>start value</div>
                <input type="number" value={props.startValue} onChange={changeStartValue}/>
            </div>
        </div>
    );
};

export default SetValue;