import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onClickFunction: () => void
}


function ControlledAccordion(props: AccordionPropsType) {


    return (
        <div>
            <AccordionTitle title={props.titleValue} onClickFunction={ props.onClickFunction } collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody />}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string,
    collapsed: boolean
    onClickFunction: ()=> void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <h3 onClick={props.onClickFunction}> -- {props.title} -- </h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default ControlledAccordion;
