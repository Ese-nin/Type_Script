import React, {useState} from 'react';
import { action } from "@storybook/addon-actions";
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff,
};

const callBack = action("on or off clicked")

export const OnMode = () => <OnOff status={true} setOn={callBack}/>
export const OffMode = () => <OnOff status={false} setOn={callBack}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false);
    return <OnOff status={value} setOn={setValue}/>
}