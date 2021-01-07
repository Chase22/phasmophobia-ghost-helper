import React from "react";
import {Button} from "@material-ui/core";

export interface MultiStateButtonState {
    key: string
    content?: JSX.Element
}

export interface MultiStateButtonProps {
    currentState: number
    states: Array<MultiStateButtonState>
    onClick: () => void
}

export default function MultiStateButton(props: MultiStateButtonProps) {
    return (
        <Button onClick={props.onClick}>
            {console.log(props.currentState)}
            {props.states[props.currentState].content}
        </Button>
    )
}
