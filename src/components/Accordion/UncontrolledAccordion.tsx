import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string;
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    const [collapsed, setCollapsed] = useState(true);

    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} collapsed={collapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: (value: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")

    const onClickHandler = () => {
        props.setCollapsed(!props.collapsed)
    }

    return (
        <div>
            <h3 onClick={onClickHandler}>-- {props.title} --</h3>
        </div>
    )

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

export default UncontrolledAccordion;