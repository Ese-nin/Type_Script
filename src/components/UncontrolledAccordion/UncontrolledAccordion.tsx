import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}

export const UncontrolledAccordion = React.memo(UncontrolledAccordionMemo)

function UncontrolledAccordionMemo(props: AccordionPropsType) {
    console.log("Accordion rendering")

    /*const [collapsed, setCollapsed] = useState(true);*/
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            setCollapsed={() => dispatch({type: TOGGLE_COLLAPSED})}
                            collapsed={state.collapsed}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: (value: boolean) => void
    collapsed: boolean
}

const AccordionTitle = React.memo(AccordionTitleMemo)

function AccordionTitleMemo(props: AccordionTitlePropsType) {
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

const AccordionBody = React.memo(AccordionBodyMemo)

function AccordionBodyMemo(props: any) {
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