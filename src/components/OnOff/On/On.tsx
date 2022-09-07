import React from 'react';

export type PropsType = {
    status: boolean
    setOn: (value: boolean)=>void
}

const On = (props: PropsType) => {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.status ? "green" : "white"
    };

    return (
        <div style={onStyle} onClick={()=>props.setOn(true)}>On</div>
    );
};

export default On;