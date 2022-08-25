import React from 'react';

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            { !props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3>{props.title}</h3>
}

function AccordionBody(props: any) {
    console.log("AccordionBody rendering")
    return (
        <div>
            <ul>
                <li>2</li>
                <li>15</li>
                <li>46</li>
                <li>127</li>
            </ul>
        </div>
    )
}

export default Accordion;