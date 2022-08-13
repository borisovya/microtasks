import React, {useState} from "react";

type OnOffControlledType = {
    isOn: boolean
    onChange: (on: boolean)=>void
}

export const ControlledOnOff = (props: OnOffControlledType) => {

    console.log('on' + props.isOn)

    const onStyle = {
        width: '40px',
        height: '10x',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.isOn ? 'green' : 'white'
    };
    const offStyle = {
        height: '10x',
        width: '40px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.isOn ? 'white' : 'red'
    };
    const indicatorStyle = {
        border: '0.07em solid #0F1C3F',
        borderRadius: '50%',
        boxShadow: '0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125)',
        height: '1em',
        width: '1em',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.isOn ? 'green' : 'red',
    };



    return <div>
        <div style={onStyle} onClick={()=>props.onChange(true)}>On</div>
        <div style={offStyle} onClick={()=>props.onChange(false)}>Off</div>
        <div style={indicatorStyle} ></div>

    </div>
}