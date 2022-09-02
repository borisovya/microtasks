import React, {useState, KeyboardEvent, useEffect} from "react";
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectItem = props.items.find(i => i.value === props.value);
    const hoveredElement = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const showItems = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onChange(value);
        showItems()
    }

    const onkeyup = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const nextpretElement = e.key === 'ArrowDown' ? props.items[i+1] : props.items[i-1]
                    if (nextpretElement) {
                        props.onChange(nextpretElement.value)
                        return;
                    }
                }
            }
            if(!selectItem){
            props.onChange(props.items[0].value)}
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }


    return (
        <>
            <select value={'2'}>
                <option value="1">Minsk</option>
                <option value="2">Moscow</option>
                <option value="3">Samara</option>
            </select>

            <div className={s.select + ' ' + (active ? s.active : '')} onKeyUp={onkeyup} tabIndex={0}>

                <span className={s.main} onClick={showItems}>{selectItem && selectItem.title}</span>

                {active &&
                    <div className={s.items} >
                        {props.items.map(el => <div
                            onMouseEnter={() => setHoveredElementValue(el.value)}
                            className={s.item + ' ' + (hoveredElement === el ? s.selected : '')}
                            key={el.value}
                            onClick={() => onItemClick(el.value)}>{el.title}</div>)}
                    </div>}
            </div>
        </>
    )
}