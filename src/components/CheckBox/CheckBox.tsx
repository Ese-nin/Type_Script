import React, {useState} from 'react';
import s from "./CheckBox.module.css"

export const CheckBox = () => {

    const [checked, setChecked] = useState(false)

    const OnclickHandler = () => {
        setChecked(!checked)
    }

    const finalClassName = s.checkbox
    + (checked ? " " + s.clickedCheckbox : "")

    return (
        <div>
            <div>
                <input type="checkbox"
                       checked={checked}
                       onChange={OnclickHandler}/>
                <span>Checkbox</span>
            </div>

            <div className={s.divAsCheckbox}>
                <div className={finalClassName}
                     onClick={OnclickHandler}></div>
                <span>DIV</span>
            </div>
        </div>
    );
};