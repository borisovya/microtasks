import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {OnOffAlternative} from "./components/OnOff/onOffAlternative";
import ControlledAccordion from "./components/ControlledAccordion/ControlledAccordion";
import {ControlledRating, RatingValueType} from "./components/Rating/ControlledRating";



function App() {

    let [ratingValue, setRatingValue]= useState<RatingValueType>(3)
    let [accordionCollapsed, setAccordionCollapsed]= useState<boolean>(true)


    return (
        <div className={'App'}>

            <OnOffAlternative />

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
