import React from 'react';
import s from "../../Counter/Changes/Changes.module.css";
import Button from "../../Button/Button";
type SetType = {
    startValue: number
    maxValue: number
    setNewStartValue:()=>void
    valueDisabledBtnSet:boolean
}

const Set = (props:SetType) => {

    return (
        <div className={s.wrap}>
            <Button disabled={props.startValue === props.maxValue || props.startValue > props.maxValue || props.startValue < 0} onClick={props.setNewStartValue} >
                set

            </Button>
        </div>
    );
};

export default Set;