import {Button, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import React, {useState} from "react";
import ghosts, {Ghost} from "../../data/Ghost";
import classes from './GhostGrid.module.css';
import MultiStateButton, {MultiStateButtonState} from "../tristate-button/MultiStateButton";
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import {Evidence, evidences} from "../../data/Evidence";


const buttonStates: Array<MultiStateButtonState> = [
    {key: "unknown", content: <RadioButtonUncheckedIcon/>},
    {key: "found", content: <CheckIcon/>},
    {key: "not-found", content: <CloseIcon/>},
]

type GhostGridState = {
    [key in Evidence]: number;
};

export default function GhostGrid() {
    const defaultState = {
        "GHOST_WRITING": 0,
        "SPIRIT_BOX": 0,
        "FREEZING_TEMPERATURE": 0,
        "GHOST_ORB": 0,
        "FINGERPRINTS": 0,
        "EMF_LEVEL_5": 0,
    };
    const [evidenceStates, setEvidenceStates] = useState<GhostGridState>(defaultState)

    const renderedGhost: Array<Ghost & { active: boolean }> = ghosts.map(ghost => {
        let active = true;
        for (const evidenceIndex in evidences) {
            const evidence: Evidence = evidences[evidenceIndex];

            if (evidenceStates[evidence] === 1 && !ghost.evidence.includes(evidence)) {
                active = false
            }
            if (evidenceStates[evidence] === 2 && ghost.evidence.includes(evidence)) {
                active = false
            }
        }
        return {name: ghost.name, evidence: ghost.evidence, active: active}
    })

    return (
        <>
            <Table>
                <TableHead className={classes.Header}>
                    <TableRow>
                        <TableCell align="center"><Button color="primary" onClick={() => setEvidenceStates(defaultState)}>Reset</Button></TableCell>
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
                                        return {...prevState}
                                    })}
                                />
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderedGhost
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .sort((a, b) => (a.active === b.active)? 0 : a.active? -1 : 1)
                        .map(ghost => GhostRow(ghost))
                    }
                </TableBody>
            </Table>
        </>
    )
}


function GhostRow(ghost: Ghost & { active: boolean }): JSX.Element {
    const className = ghost.active ? "" : classes.TableRowInactive
    console.log(className)
    return (
        <TableRow className={`${className}`}>
            <TableCell align="center">{ghost.name}</TableCell>
            {evidences.map(value =>
                <TableCell align="center">
                    {ghost.evidence.includes(value) ? "X" : ""}
                </TableCell>)}
        </TableRow>
    )
}
