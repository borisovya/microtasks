import React from "react";
import s from './OnOff.module.css'


type OnOff = {
    isOn: boolean,
}


function OnOff(props: OnOff) {
    return (
        <div>
            <button className={`${props.isOn && s.onStyle}`}>ON</button>
            <button className={`${!props.isOn && s.offStyle}`}>OFF</button>
            <div  className={`${s.circle} ${!props.isOn && s.offStyle || props.isOn && s.onStyle }`}></div>
        </div>
    )
}



export default OnOff;
