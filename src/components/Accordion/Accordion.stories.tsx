import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion,
}
const callBack = action("accordion mode change event fired")
const onClickCallBack = action("some item was clicked")

const Template: Story<AccordionPropsType> = (args: AccordionPropsType) => <Accordion {...args}/>

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    titleValue: "Menu",
    collapsed: true,
    onChange: callBack,
    items: [],
    onClick: onClickCallBack
}

export const UncollapsedMode = Template.bind({})
UncollapsedMode.args = {
    titleValue: "Users",
    collapsed: false,
    onChange: callBack,
    items: [{title: "Tamara", value: 1},
        {title: "Natasha", value: 2},
        {title: "Egor", value: 3}],
    onClick: onClickCallBack
}

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false);
    return <Accordion titleValue="Menu"
                      collapsed={value}
                      onChange={setValue}
                      items={[{title: "Tamara", value: 1},
                          {title: "Natasha", value: 2},
                          {title: "Egor", value: 3}]}
    onClick={onClickCallBack}/>
}