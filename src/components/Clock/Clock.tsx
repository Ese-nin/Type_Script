import React, {useEffect, useState} from "react";
import s from './clock.module.css'

const setTimeForHuman = (num: number) => {
    return num < 10 ? '0' + num : num
}

type ClockPropsType = {
    type: 'digital' | 'analog'
}

export const Clock = (props: ClockPropsType) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }

    }, [])

    let clock;
    if (props.type === 'analog') clock = <AnalogClock date={date}/>
    if (props.type === 'digital') clock = <DigitalClock date={date}/>

    return <>
        {clock}
    </>
}

type ClockViewPropsType = {
    date: Date
}

const AnalogClock: React.FC<ClockViewPropsType> = ({date}) => {

    // оформление - своровал и адаптировал

    const deg = 6;

    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * deg;
    let ss = date.getSeconds() * deg;

    return (
        <div className={s.clock}>
            <div className={s.hour}>
                <div className={s.hr} style={{transform: `rotateZ(${(hh) + (mm / 12)}deg)`}}></div>
            </div>
            <div className={s.min}>
                <div className={s.mn} style={{transform: `rotateZ(${mm}deg)`}}></div>
            </div>
            <div className={s.sec}>
                <div className={s.sc} style={{transform: `rotateZ(${ss}deg)`}}></div>
            </div>
        </div>
    )
}


const DigitalClock: React.FC<ClockViewPropsType> = ({date}) => {

    let hours = setTimeForHuman(date.getHours())
    let minutes = setTimeForHuman(date.getMinutes())
    let seconds = setTimeForHuman(date.getSeconds())

    return <>
        clock: {hours}:{minutes}:{seconds}
    </>
}