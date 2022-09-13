import React from 'react';
import On from "./On/On";
import Off from "./Off/Off";
import Indicator from "./Indicator/Indicator";

type OnOffPropsType = {
    status: boolean
    setOn: (value: boolean)=>void
}

export const OnOff = (props: OnOffPropsType) => {
    return (
        <div>
            <On status={props.status} setOn={props.setOn}/>
            <Off status={props.status} setOn={props.setOn}/>
            <Indicator status={props.status}/>
        </div>
    );
};