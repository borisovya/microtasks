import {action} from "@storybook/addon-actions";
import Accordion from "../components/Accordion/Accordion";
import React, {useState} from "react";


export default {
    title: 'Accordion',
    component: Accordion,
};

const callBack = action('accordion mode change event fired')
const onClickCallBack = action('Item was clicked')

export const MenuCollapsed = () => <Accordion
    titleValue={'Menu'}
    collapsed={true}
    onChange={callBack}
    items={[]}
    onClick={onClickCallBack}/>;
export const MenuCollapsedMode = () => <Accordion
    titleValue={'Users'} collapsed={false}
    onChange={callBack}
    onClick={onClickCallBack}
    items={[{title: 'Dimych', value: 1}, {title:'Valera', value: 2}]}/>;


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion
        titleValue={'Users'}
        collapsed={value}
        onChange={() => setValue(!value)}
        items={[{title: 'Dimych', value: 1}, {title:'Valera', value: 2}]}
        onClick={onClickCallBack}/>
};