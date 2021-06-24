import React from 'react';
import s from './Changes.module.css';
import Button from "../../Button/Button";


type ChangesType = {
    inc: () => void
    value: number | string
    maxValue: number
    reset:()=> void
}

const Changes = (props: ChangesType) => {


    return (
        <div className={s.wrap}>
            <Button
                disabled={props.value === +props.maxValue}
                onClick={props.inc}>
                INC
            </Button>
            <Button onClick={props.reset} disabled={false}>

                RESET
            </Button>
        </div>
    );
};

export default Changes;