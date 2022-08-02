import React, {useState} from "react";

type OnOffAlternativeType = {}

export const OnOffAlternative = (props: OnOffAlternativeType) => {

    let [on, setOn] = useState(false);

    const onStyle = {
        width: '40px',
        height: '10x',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'white'
    };
    const offStyle = {
        height: '10x',
        width: '40px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'white' : 'red'
    };
    const indicatorStyle = {
        border: '0.07em solid #0F1C3F',
        borderRadius: '50%',
        boxShadow: '0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125)',
        height: '1em',
        width: '1em',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red',
    };



    return <div>
        <div style={onStyle} onClick={()=>{setOn(true)}}>On</div>
        <div style={offStyle} onClick={()=>{setOn(false)}}>Off</div>
        <div style={indicatorStyle} ></div>

    </div>
}