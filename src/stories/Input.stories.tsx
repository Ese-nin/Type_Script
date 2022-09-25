import React, {ChangeEvent, useRef, useState} from 'react';


export default {
    title: 'input',
    //component: input,
};

export const UncontrolledInput = () => <input/>;
export const TrackValueUncontrolledInput = () => {

    const [value, setValue] = useState("")

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        debugger
        setValue(event.currentTarget.value)
    }

    return <><input onChange={onChange}/> - {value}</>;
}

export const GetValueUncontrolledInputByButtonPress = () => {

    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        debugger
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={save}>save</button>
        - actual value: {value}</>;
}


export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={changeValue}/>

}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type="checkbox" checked={parentValue} onChange={changeValue}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string|undefined>("3")

    const changeValue = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={changeValue}>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Madrid</option>
    </select>
}


export const ControlledInputWithFixedValue = () => <input value="IT-Incubator.com"/>;
