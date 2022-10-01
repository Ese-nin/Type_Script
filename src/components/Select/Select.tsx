import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from "./Select.module.css"

type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

const SelectMemo = (props: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const [hoveredElementItem, setHoveredElementItem] = useState(props.value)

    const currentTitle = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredElementItem)

    useEffect(() => {
        setHoveredElementItem(props.value)
    }, [props.value])

    const toggleItems = () => {
        setActive(!active)
    }

    const onKeyDown = (e: KeyboardEvent<HTMLHeadingElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementItem) {
                    if (props.items[i + 1]) {
                        if (e.key === "ArrowDown") {
                            props.onChange(props.items[i + 1].value);
                            return;
                        }
                    }
                    if (props.items[i - 1]) {
                        if (e.key === "ArrowUp") {
                            props.onChange(props.items[i - 1].value);
                            return;
                        }
                    }
                }
            }
            if (!currentTitle) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false);
        }
    }

    return (
        <div>
            <h4 className={s.select}
                onKeyDown={onKeyDown}
                tabIndex={0}
                onClick={toggleItems}>{currentTitle && currentTitle.title}</h4>
            <div className={s.items}>
                {active && props.items.map((el, index) =>
                    <div
                        onMouseEnter={() => setHoveredElementItem(el.value)}
                        className={s.item + " " + (hoveredItem === el ? s.selected : "")}
                        onClick={() => {
                            props.onChange(el.value);
                            setActive(false)
                        }}
                        key={index}>{el.title}</div>)}
            </div>
        </div>
    );
};

export const Select = React.memo(SelectMemo)