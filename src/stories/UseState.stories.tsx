import React, {useState} from "react"

export default {
    title: "useState"
}

const getInitialState = () => {
    console.log('InStateStart')
    let x = 0;
    while (x < 100000000) {
        let fake = 0;
        fake = Math.random()
        x++
    }
    console.log('InStateEnd')
    return 1
}


export const UseState = () => {
    console.log("UseState")
    const [count, setCount] = useState(getInitialState)



    return <>
        <button onClick={()=>setCount(state=>state + 1)}>+</button>
        {count}
    </>

}