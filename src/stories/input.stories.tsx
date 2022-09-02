import React, {ChangeEvent, useRef, useState} from 'react'


export default {
    title: 'input',

}

export const uncontrolledInput = () => <input/>;

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    return <><input value={value} onChange={(e) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }
    }/> - {value}</>
};

export const GetValueOfUncontrolledInputByClick = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>()

    const save = () => {
        const element = inputRef.current as HTMLInputElement;
        setValue(element.value)
    }

    // @ts-ignore
    return <><input ref={inputRef}/>
        <button onClick={save}>save</button>
        - actual value: {value}</>
};

export const ControlledInput = () => {
    const [parentValue, setParenValue] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

        setParenValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChangeHandler}/>
}

export const ControlledCheckBox = () => {
    const [parentValue, setParenValue] = useState<boolean>(true)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

        setParenValue(e.currentTarget.checked)
    }
    return <input type='checkbox' checked={parentValue}  onChange={onChangeHandler}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParenValue] = useState<string | undefined>(undefined)

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {

        setParenValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChangeHandler}>
        <option>None</option>
        <option value={'1'}>Moscow</option>
        <option value={'2'}>Minsk</option>
        <option value={'3'}>Sochi</option>
    </select>
}

export const ControlledInputWithFixedValue = () => <input value={'Controlled input'}/>;

