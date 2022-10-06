import React from "react";
import {ClockViewProps} from "./Clock";

export const DigitalClockView: React.FC<ClockViewProps> = ({date}) => {

    const getTwoDigitsString = (number: number) =>  number < 10 ? ('0' + number) : number

    return <><span>{getTwoDigitsString(date.getHours())}</span>
        :
        <span>{getTwoDigitsString(date.getMinutes())}</span>
        :
        <span>{getTwoDigitsString(date.getSeconds())}</span> </>
}