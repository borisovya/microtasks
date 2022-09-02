import {action} from "@storybook/addon-actions";
import React from "react";
import {Select} from "../components/Select/Select";


export default {
    title: 'Select',
    component: Select,
};

export const SelectExample = () =>
    <>
        <Select value={'2'} onChange={action('Value changed')}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Samara'}]}/>

    </>

export const SelectExampleWithoutValue = () => <>

    <Select onChange={action('Value changed')}
            items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Moscow'},
                {value: '3', title: 'Samara'}]}/>
</>