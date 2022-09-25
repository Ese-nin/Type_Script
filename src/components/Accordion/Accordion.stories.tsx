import React, {useState} from 'react';
import { action } from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion,
}
const callBack = action("accordion mode change event fired")

const Template: Story<AccordionPropsType> = (args: AccordionPropsType) => <Accordion {...args}/>

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    titleValue: "Menu",
    collapsed: true,
    onClick: callBack
}
export const UncollapsedMode = Template.bind({})
UncollapsedMode.args = {
    titleValue: "Users",
    collapsed: false,
    onClick: callBack
}



/*export const CollapsedMode = () => <Accordion titleValue="Menu" collapsed={true} onClick={callBack}/>*/
/*export const UncollapsedMode = () => <Accordion titleValue="Menu" collapsed={false} onClick={callBack}/>*/
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false);
    return <Accordion titleValue="Menu" collapsed={value} onClick={setValue}/>
}