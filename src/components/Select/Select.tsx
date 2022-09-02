import React, {useState} from "react";
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

    const selectItem = props.items.find(i => i.value === props.value);

    const showItems = () => setActive(!active)

    return (<>
            <select value={'2'}>
                <option value="1">Minsk</option>
                <option value="2">Moscow</option>
                <option value="3">Samara</option>
            </select>

            <div className={s.select + ' ' + (active ? s.active : '')}>

                <span className={s.main} onClick={showItems}>{selectItem && selectItem.title}</span>

                {active &&
                    <div className={s.items}>
                        {props.items.map(el => <div key={el.value}>{el.title}</div>)}
                    </div>}
            </div>
        </>
    )
}