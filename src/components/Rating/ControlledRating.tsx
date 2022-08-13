import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type ControlledRatingPropsType = {
    value: RatingValueType
    onClickFunction: (value: RatingValueType) => void
}

export function ControlledRating(props: ControlledRatingPropsType) {

    return (
        <div>
            <Star selected={props.value > 0} onClickFunction={props.onClickFunction} value={1}/>
            <Star selected={props.value > 1} onClickFunction={props.onClickFunction} value={2} />
            <Star selected={props.value > 2} onClickFunction={props.onClickFunction} value={3} />
            <Star selected={props.value > 3} onClickFunction={props.onClickFunction} value={4} />
            <Star selected={props.value > 4} onClickFunction={props.onClickFunction} value={5} />
        </div>)

    type StarPropsType = {
        selected: boolean
        value: RatingValueType
        onClickFunction: (value: RatingValueType) => void
    }

    function Star(props: StarPropsType) {
        return <span onClick={ ()=>{props.onClickFunction(props.value)} }> {props.selected ? <b> @ </b>: ' @ '} </span>
    }
}