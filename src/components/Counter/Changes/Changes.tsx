import React from 'react';
import s from './Changes.module.css';
import Button from "../../Button/Button";


type ChangesType = {
    inc: () => void
    displayValue: number | string
    maxValue: number
    reset: () => void
    isIncButtonDisabled: boolean
    isResetButtonDisabled: boolean
}

const Changes = (props: ChangesType) => {


    return (
        <div className={s.wrap}>
            <Button
                disabled={props.isIncButtonDisabled}
                onClick={props.inc}>
                inc
            </Button>
            <Button onClick={props.reset} disabled={props.isResetButtonDisabled}>
                reset
            </Button>
        </div>
    );
};

export default Changes;
