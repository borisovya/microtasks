import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {OnOffAlternative} from "./components/OnOff/onOffAlternative";
import ControlledAccordion from "./components/ControlledAccordion/ControlledAccordion";
import {ControlledRating, RatingValueType} from "./components/Rating/ControlledRating";
import { ControlledOnOff } from './components/OnOff/ControlledOnOff';



function App() {

    let [ratingValue, setRatingValue]= useState<RatingValueType>(3)
    let [accordionCollapsed, setAccordionCollapsed]= useState<boolean>(true)
    let [isOn, setIsOn]= useState<boolean>(true)


    return (
        <div className={'App'}>

            <OnOff isOn={true} />

            <hr/>

            {/*<ControlledOnOff isOn={isOn} onChange={(on)=>setIsOn(on)}/>*/}

            <hr/>

            <OnOffAlternative onChange={setIsOn}/> {isOn.toString()}

            <hr/>

            <ControlledAccordion titleValue={'Menu'}
                                     collapsed={accordionCollapsed}
                                     onClickFunction={ ()=>{setAccordionCollapsed(!accordionCollapsed)} }/>

            <hr/>

            <Rating value={0}/>

            <hr/>

            <ControlledRating value={ratingValue}
                              onClickFunction={setRatingValue}/>


        </div>
    )
}



type PageTitlePropsType = {
    title: string,
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle Rendering')
    return <h1>{props.title}</h1>
}

export default App;
