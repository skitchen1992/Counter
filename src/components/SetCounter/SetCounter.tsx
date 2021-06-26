import React, {ChangeEvent} from 'react';

import SetValue from "./SetValue/SetValue";
import SetButton from "./Set/SetButton";

type SetCounterType = {
    startValue: number
    maxValue: number
    changeMaxValue: (e: number) => void
    changeStartValue: (e: number) => void
    setNewValue: () => void
    isSetButtonDisabled: boolean
    isMaxInputError: boolean
    isStartInputError: boolean
}

const SetCounter = (props: SetCounterType) => {
    return (
        <>
            <SetValue startValue={props.startValue}
                      maxValue={props.maxValue}
                      changeMaxValue={props.changeMaxValue}
                      changeStartValue={props.changeStartValue}
                      isMaxInputError={props.isMaxInputError}
                      isStartInputError={props.isStartInputError}
            />
            <SetButton startValue={props.startValue}
                       maxValue={props.maxValue}
                       setNewValue={props.setNewValue}
                       isSetButtonDisabled={props.isSetButtonDisabled}/>
        </>
    );
};

export default SetCounter;