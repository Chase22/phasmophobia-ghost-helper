import {Table, TableCell, TableRow} from "@material-ui/core";
import React from "react";
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import TextDialog from "../text-dialog/TextDialog";

export interface HelpDialogProps {
    open: boolean,
    onClose: () => void
}

const HelpDialog: React.FC<HelpDialogProps> = ({open, onClose}) => {
    return (
        <TextDialog title="Help" open={open} onClose={onClose} centerText>
            <p>In the Table you see all available evidences and each ghost type. Each ghost type has the identifying
                evidences marked with an 'X'.</p>

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
                    <TableCell>The evidence has not been found and is unlikely to be found (e.g. non-freezing
                        temperatures in the Ghost room)</TableCell>
                </TableRow>
            </Table>
            <p>A ghost type that is no longer possible under the given setting will be grayed out</p>
        </TextDialog>
    )
}

export default HelpDialog
