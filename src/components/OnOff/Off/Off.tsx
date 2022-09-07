import React from 'react';
import {PropsType} from "../On/On";

const Off = (props: PropsType) => {

    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: !props.status ? "red" : "white"
    };

    return (
        <div style={offStyle} onClick={()=>props.setOn(false)}>Off</div>
    );
};

export default Off;