import {Dialog, IconButton, Table, TableCell, TableRow} from "@material-ui/core";
import React from "react";
import styles from "./HelpDialog.module.css";
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

export interface HelpDialogProps {
    open: boolean,
    onClose: () => void
}

export default function HelpDialog(props: HelpDialogProps) {
    const {open, onClose} = props;

    return (
        <Dialog open={open} fullWidth>
            <div className={styles.helpHeader}>
                <h1>Phasmophobia Ghost Helper</h1>
                <IconButton size="medium" onClick={onClose}><CloseIcon/></IconButton>
            </div>
            <article className={styles.helpContent}>
                <p>In the Table you see all available evidences and each ghost type. Each ghost type has the identifying evidences marked with an 'X'.</p>

                <p>On the top under the evidences to cycle between unknown, found and not found</p>
                <Table>
                    <TableRow>
                        <TableCell><RadioButtonUncheckedIcon/></TableCell>
                        <TableCell>It is unknown if that evidence is present</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><CheckIcon/></TableCell>
                        <TableCell>The evidence has been found and can be marked in the journal</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><CloseIcon/></TableCell>
                        <TableCell>The evidence has not been found and is unlikely to be found (e.g. non-freezing temperatures in the Ghost room)</TableCell>
                    </TableRow>
                </Table>
                <p>A ghost type that is no longer possible under the given setting will be grayed out</p>
            </article>
        </Dialog>
    )
}
