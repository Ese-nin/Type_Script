import React, {useState} from 'react';

type PropsType = {
    onChange: (on: boolean)=>void
    defaultOn?: boolean
}

export const UncontrolledOnOff = (props: PropsType) => {

    const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: !on ? "red" : "white"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "6px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    };

    const status = on ? "true" : "false"

    return (
        <div>
            <div style={onStyle} onClick={()=>setOn(true)}>On</div>
            <div style={offStyle} onClick={()=>setOn(false)}>Off</div>
            <div style={indicatorStyle}></div>
            <div>{status}</div>
        </div>
    );
};

