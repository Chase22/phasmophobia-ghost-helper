import {Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import React, {useState} from "react";
import ghosts, {Ghost} from "../../data/Ghost";
import classes from './GhostGrid.module.css';
import MultiStateButton, {MultiStateButtonState} from "../tristate-button/MultiStateButton";
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close'
import {evidences} from "../../data/Evidence";


const buttonStates: Array<MultiStateButtonState> = [
    {key: "unknown"},
    {key: "found", content: <CheckIcon/>},
    {key: "not-found", content: <CloseIcon/>},
]

export default function GhostGrid() {
    const [evidenceStates, setEvidenceStates] = useState({
        "GHOST_WRITING": 0,
        "SPIRIT_BOX": 0,
        "FREEZING_TEMPERATURE": 0,
        "GHOST_ORB": 0,
        "FINGERPRINTS": 0,
        "EMF_LEVEL_5": 0,
    })

    return (
        <>
            <Table>
                <TableHead className={classes.Header}>
                    <TableRow>
                        <TableCell align="center"/>
                        {evidences.map(value => (
                            <TableCell align="center">
                                {value.toString().replaceAll("_", " ")}
                                <MultiStateButton
                                    currentState={evidenceStates[value]}
                                    states={buttonStates}
                                    onClick={() => setEvidenceStates(prevState => {
                                        prevState[value] = prevState[value] + 1
                                        if (prevState[value] >= buttonStates.length) {
                                            prevState[value] = 0
                                        }
                                        return prevState
                                    })}
                                />
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ghosts.map(ghost => GhostRow(ghost))}
                </TableBody>
            </Table>
        </>
    )
}


function GhostRow(ghost: Ghost): JSX.Element {
    return (
        <TableRow>
            <TableCell align="center" className={classes.Header}>{ghost.name}</TableCell>
            {evidences.map(value =>
                <TableCell align="center">
                    {ghost.evidence.includes(value) ? "X" : ""}
                </TableCell>)}
        </TableRow>
    )
}
