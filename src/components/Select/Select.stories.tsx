import {Select} from "./Select";
import React, {useMemo, useState} from "react";

export default {
    title: 'Select',
    component: Select,
}

type CitiesType = {
    id: number
    title: string
    country: string
    citizens: number
}

const cities: Array<CitiesType> = [
    {id: 1, title: "Minsk", country: "Belarus", citizens: 50000},
    {id: 2, title: "Poltava", country: "Ukraine", citizens: 1500000},
    {id: 3, title: "Kitezh", country: "russia", citizens: 200000},
    {id: 4, title: "Grodno", country: "Belarus", citizens: 16000},
    {id: 5, title: "Samara", country: "russia", citizens: 15000000},
    {id: 6, title: "Dolbograd", country: "russia", citizens: 458000},
    {id: 7, title: "Odessa", country: "Ukraine", citizens: 114587},
    {id: 8, title: "London", country: "Great Britain", citizens: 35000},
    {id: 9, title: "New-York", country: "USA", citizens: 784500},
    {id: 10, title: "Cave # 3", country: "Middle Ages", citizens: 1200000},
]

export const SelectionWithoutValue = () => {
    const [value, setValue] = useState(null);
    return <Select value={value}
                   onChange={setValue}
                   items={cities}
    />
}

export const Selection1 = () => {
    const [value, setValue] = useState(1);
    return <Select value={value}
                   onChange={setValue}
                   items={cities}
    />
}

export const Selection2 = () => {
    const [value, setValue] = useState(2);
    return <Select value={value}
                   onChange={setValue}
                   items={cities}
    />
}


export const BossSelection = () => {

    const [valueID, setValueID] = useState(0);
    const [valueTitle, setValueTitle] = useState(0);
    const [valueCountry, setValueCountry] = useState(0);
    const [valueCitizens, setValueCitizens] = useState(0);

    const cities1 = useMemo(()=>{
        return cities.filter(el => el.id === 2 || el.id === 4 || el.id === 7)
    }, [cities])

    const cities2 = useMemo(()=>{
        return cities.filter(el => el.title.includes('a' || 'o'))
    }, [cities])

    const cities3 = useMemo(()=>{
        return cities.filter(el => el.country === 'Belarus')
    }, [cities])

    const cities4 = useMemo(()=>{
        return cities.filter(el => el.citizens > 1000000)
    }, [cities])

    return <div style={{display: "flex"}}>
        <Select value={valueID} onChange={setValueID} items={cities1}/>
        <Select value={valueTitle} onChange={setValueTitle} items={cities2}/>
        <Select value={valueCountry} onChange={setValueCountry} items={cities3}/>
        <Select value={valueCitizens} onChange={setValueCitizens} items={cities4}/>
    </div>
}