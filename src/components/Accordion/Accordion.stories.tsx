import React, {useState} from 'react';
import { action } from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
};

const callBack = action("accordion mode change event fired")

export const CollapsedMode = () => <Accordion titleValue="Menu" collapsed={true} onClick={callBack}/>
export const UncollapsedMode = () => <Accordion titleValue="Menu" collapsed={false} onClick={callBack}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false);
    return <Accordion titleValue="Menu" collapsed={value} onClick={setValue}/>
}