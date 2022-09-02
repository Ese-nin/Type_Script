import React, {useState} from "react";

export function UncontrolledRating() {

    const [value, setValue] = useState(0);

    return <div>
        <Star selected={value > 0} setValue={setValue} num={1}/>
        <Star selected={value > 1} setValue={setValue} num={2}/>
        <Star selected={value > 2} setValue={setValue} num={3}/>
        <Star selected={value > 3} setValue={setValue} num={4}/>
        <Star selected={value > 4} setValue={setValue} num={5}/>
    </div>
}

type StarPropsType = {
    selected: boolean
    setValue: (num: number) => void
    num: number
}

function Star(props: StarPropsType) {
    const onClickHandler = (num: number) => {
        props.setValue(num)
    }
    return props.selected ?
        <span onClick={() => onClickHandler(props.num)}><b> Star</b> </span> :
        <span onClick={() => onClickHandler(props.num)}> Star</span>;
}