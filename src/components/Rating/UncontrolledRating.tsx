import React, {useState} from "react";



export function UncontrolledRating() {

    const [value, setValue] = useState(0);

    const onClickButton = (value: number) => {
        setValue(value)
    }

        return <div>
            <Star selected={value > 0}/><button onClick={ ()=>onClickButton(1) }>1</button>
            <Star selected={value > 1}/><button onClick={ ()=>onClickButton(2) }>2</button>
            <Star selected={value > 2}/><button onClick={ ()=>onClickButton(3) }>3</button>
            <Star selected={value > 3}/><button onClick={ ()=>onClickButton(4) }>4</button>
            <Star selected={value > 4}/><button onClick={ ()=>onClickButton(5) }>5</button>
        </div>
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    if (props.selected) {
        return <span><b> Star</b> </span>
    } else return <span> Star</span>
}