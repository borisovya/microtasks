import React, {useReducer} from "react";
import {reducer} from "./Reducer";

type ItemType = {
    title: string
    value: any
}


type AccordionPropsType = {
    titleValue: string

}


function UncontrolledAccordion(props: AccordionPropsType) {

    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=>dispatch({type: 'TOGGLE-COLLAPSED'})}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string,
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={(e) => props.onClick()}> -- {props.title} -- </h3>
}


function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UncontrolledAccordion;
