import React from "react";
import {CheckBox} from "./CheckBox";

export default {
    title: 'CheckBox',
    component: CheckBox,
}

export const TestCheckBox = () => {
    return <CheckBox/>
}

/*export const SelectionWithoutValue = () => {
    const [value, setValue] = useState(null);
    return <Select value={value}
                   onChange={setValue}
                   items={[{title: "Tamara", value: "1"},
                       {title: "Natasha", value: "2"},
                       {title: "Egor", value: "3"}]}
    />
}*/
