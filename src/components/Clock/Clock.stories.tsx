import {Clock} from "./Clock";


export default {
    title: "Clock",
    component: Clock
}

export const ClockDigital = () => {
    return <Clock type='digital'/>
}

export const ClockAnalog = () => {
    return <Clock type='analog'/>
}