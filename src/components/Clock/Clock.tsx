import React, {useEffect, useState} from 'react';
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";


type PropsType = {
    mode?: 'digital' | 'analog'
}

export const Clock= (props: PropsType) => {

    const [date, setDate] = useState(new Date())

    useEffect(()=> {
        const intervalId = setInterval(()=>{
            console.log('Tick')
            setDate(new Date())
        }, 1000)

        return ()=>{
            clearInterval(intervalId)
        }
    }, [])

    // const secondsString = getTwoDigitsString(date.getSeconds())
    // const minutesString = getTwoDigitsString(date.getMinutes())
    // const hoursString = getTwoDigitsString(date.getHours())

    let view
    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break
        case 'digital':
        default: view = <DigitalClockView date={date}/>
    }

    return (
        <div>
            {view}
        </div>
    );
};


export type ClockViewProps = {
    date: Date
}

