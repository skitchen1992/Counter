import React, {ChangeEvent} from 'react';

import SetValue from "./SetValue/SetValue";
import Set from "./Set/Set";

type SetCounterType = {
    startValue: number
    maxValue: number
    changeMaxValue: (e: number) => void
    changeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    setNewStartValue: () => void
    valueDisabledBtnSet: boolean
    errorMaxBtn: boolean
    errorStartBtn: boolean
}

const SetCounter = (props: SetCounterType) => {
    return (
        <>
            <SetValue startValue={props.startValue}
                      maxValue={props.maxValue}
                      changeMaxValue={props.changeMaxValue}
                      changeStartValue={props.changeStartValue}
                      errorMaxBtn={props.errorMaxBtn}
                      errorStartBtn={props.errorStartBtn}
            />
            <Set startValue={props.startValue}
                 maxValue={props.maxValue}
                 setNewStartValue={props.setNewStartValue}
                 valueDisabledBtnSet={props.valueDisabledBtnSet}/>
        </>
    );
};

export default SetCounter;