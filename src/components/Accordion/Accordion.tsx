import React from 'react';

export type AccordionPropsType = {
    /**
     * param that showed name of element
     */
    titleValue: string;
    collapsed: boolean;
    /**
     * callback that called when any element clicked
     * @param value boolean
     */
    onChange: (value: boolean) => void
    items: ItemType[]
    onClick: (value: any)=>void
}

type ItemType = {
    title: string
    value: any
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onClick={() => props.onChange(!props.collapsed)}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string;
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClick}>{props.title}</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any)=>void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
            <ul>
                {props.items.map((el, index) => <li onClick={ ()=>{ props.onClick(el.value) } } key={index}>{el.title}</li>)}
            </ul>
    )
}