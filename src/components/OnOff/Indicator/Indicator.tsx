import React from 'react';

type IndicatorPropsType = {
    status: boolean
}

const Indicator = (props: IndicatorPropsType) => {

    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "6px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.status ? "green" : "red"
    };

    return (
        <div style={indicatorStyle}></div>
    );
};

export default Indicator;