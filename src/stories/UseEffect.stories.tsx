import React, {useEffect, useState} from "react"

export default {
    title: "UseEffect"
}


export const Example = () => {
    console.log("Example")
    const [count, setCount] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(() => {
        console.log("UseEffect every render")
    })

    useEffect(() => {
        console.log("UseEffect only first render")
        document.title = count.toString()
    }, [])

    useEffect(() => {
        console.log("UseEffect when count was changed")
        document.title = count.toString()
    }, [count])

    return <>
        <button onClick={() => setCount(state => state + 1)}>count +</button>
        {count}
        <br/>
        <button onClick={() => setFake(state => state + 1)}>fake +</button>
        {fake}
    </>

}