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


export const SetTimeoutExample = () => {
    console.log("SetTimeoutExample")
    const [count, setCount] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(() => {

        setInterval(() => {
            console.log('tick: ' + count)
            setCount(state => state + 1)
        }, 1000)

    }, [])


    return <>
        {/*<button onClick={() => setCount(state => state + 1)}>count +</button>*/}
        count: {count}
        <br/>
        {/*<button onClick={() => setFake(state => state + 1)}>fake +</button>*/}
        fake: {fake}
    </>

}


export const ClockExample = () => {
    console.log("ClockExample")
    const [date, setDate] = useState(new Date())

    const setTimeForHuman = (num: number) => {
       return  num < 10 ? '0' + num : num
    }

    let hours = setTimeForHuman(date.getHours())
    let minutes = setTimeForHuman(date.getMinutes())
    let seconds = setTimeForHuman(date.getSeconds())


    useEffect(() => {

        setInterval(() => {
            setDate(new Date())
        }, 1000)

    }, [])


    return <>
        clock: {hours}:{minutes}:{seconds}
        <br/>

    </>

}
