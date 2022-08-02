import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {OnOffAlternative} from "./components/OnOff/onOffAlternative";
import SelfControlledAccordion from "./components/SelfControlledAccordion/SelfControlledAccordion";


function App() {
    console.log('App Rendered')
    return (
        <div className={'App'}>

            <OnOffAlternative />
            {/*<PageTitle title={'This is APP component!'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}

            <hr/>

            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'Users list'} collapsed={false}/>*/}

            <SelfControlledAccordion titleValue={'Menu'} />
            {/*<SelfControlledAccordion titleValue={'Users list'} />*/}

            <hr/>

            <Rating />

            {/*test rating example below */}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}


            {/*<OnOff isOn={true}/>*/}
            {/*<OnOff isOn={false}/>*/}

            {/*<div>*/}
            {/*    <OnOffAlternative />*/}
            {/*    <OnOffAlternative />*/}
            {/*    <OnOffAlternative />*/}
            {/*</div>*/}
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
