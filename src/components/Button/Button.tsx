import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from '../Button/Button.module.css'

type DefaultButtonType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonType = DefaultButtonType & {
    //setNewStartValue:()=>void
}

const Button: React.FC<ButtonType> = (
    {...restProps}, setNewStartValue,
) => {


    const finalClassName = `${s.default}`
    return (

        <button className={finalClassName} {...restProps}  />
    );
};

export default Button;
//onClick={setNewStartValue}