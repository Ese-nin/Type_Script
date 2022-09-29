import {Select} from "./Select";
import React, {useState} from "react";

export default {
    title: 'Select',
    component: Select,
}

export const SelectionWithoutValue = () => {
    const [value, setValue] = useState(null);
    return <Select value={value}
                   onChange={setValue}
                   items={[{title: "Tamara", value: "1"},
                       {title: "Natasha", value: "2"},
                       {title: "Egor", value: "3"}]}
    />
}

export const Selection1 = () => {
    const [value, setValue] = useState("1");
    return <Select value={value}
                   onChange={setValue}
                   items={[{title: "Tamara", value: "1"},
                       {title: "Natasha", value: "2"},
                       {title: "Egor", value: "3"}]}
    />
}

export const Selection2 = () => {
    const [value, setValue] = useState("2");
    return <Select value={value}
                   onChange={setValue}
                   items={[{title: "Tamara", value: "1"},
                       {title: "Natasha", value: "2"},
                       {title: "Egor", value: "3"}]}
    />
}