import React from 'react';
import s from './Changes.module.css';
import Button from "../../Button/Button";


type ChangesType = {
    inc: () => void
    value: number | string
    maxValue: number
    reset: () => void
    valueDisabledBtnInc: boolean
    valueDisabledBtnReset: boolean
}

const Changes = (props: ChangesType) => {


    return (
        <div className={s.wrap}>
            <Button
                disabled={props.valueDisabledBtnInc}
                onClick={props.inc}>
                inc
            </Button>
            <Button onClick={props.reset} disabled={props.valueDisabledBtnReset}>
                reset
            </Button>
        </div>
    );
};

export default Changes;
