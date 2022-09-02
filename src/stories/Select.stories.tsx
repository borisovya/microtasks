import {action} from "@storybook/addon-actions";
import React, {useState} from "react";
import {Select} from "../components/Select/Select";


export default {
    title: 'Select',
    component: Select,
};

export const SelectExample = () => {
    const [value, setValue] = useState('2')

    return <>
        <Select value={value}
                onChange={setValue}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Samara'}]}/>

    </>
}

export const SelectExampleWithoutValue = () => {
    const [value, setValue] = useState(null)
    return <>

        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Samara'}]}/>
    </>
}