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


export const SetIntervalExample = () => {
    console.log("SetTimeoutExample")
    const [count, setCount] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(() => {

        let id = setInterval(() => {
            setCount(state => state + 1)
            console.log('tick: ' + count)
        }, 1000)

        return () => {
            clearInterval(id)
        }
    }, [count])


    return <>
        {/*<button onClick={() => setCount(state => state + 1)}>count +</button>*/}
        count: {count}
        <br/>
        {/*<button onClick={() => setFake(state => state + 1)}>fake +</button>*/}
        fake: {fake}
    </>

}


export const ResetUseEffectExample = () => {
    const [count, setCount] = useState(0)
    console.log("ResetUseEffectExample " + count)

    useEffect(() => {

        console.log('Effect occurred: ' + count)

        return () => {
            console.log('reset effect' + count)
        }
    }, [count])

    const increase = () => setCount(state => state + 1)

    return <>
        <button onClick={increase}>count +</button>
        count: {count}
    </>

}


export const KeyPressExample = () => {
    const [text, setText] = useState('')
    console.log("ResetUseEffectExample " + text)

    useEffect(() => {

        const listener = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', listener)

        return () => {
            window.removeEventListener('keypress', listener)
        }
    }, [text])


    return <>
        Current text: {text}
    </>
}


export const SetTimeoutExample = () => {
    const [text, setText] = useState('')

    useEffect(() => {

        const id = setTimeout(() => {
            console.log('Timeout passed')
            setText('The time has gone')
        }, 3000)

        return () => {
            clearTimeout(id)
        }

    }, [])


    return <>
        Your text: {text}
    </>
}