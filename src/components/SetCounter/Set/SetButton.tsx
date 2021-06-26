import React from 'react';
import s from "../../Counter/Changes/Changes.module.css";
import Button from "../../Button/Button";

type SetType = {
    startValue: number
    maxValue: number
    setNewValue: () => void
    isSetButtonDisabled: boolean
}

const SetButton = (props: SetType) => {

    return (
        <div className={s.wrap}>
            <Button disabled={props.isSetButtonDisabled} onClick={props.setNewValue}>
                set
            </Button>
        </div>
    );
};

export default SetButton;
