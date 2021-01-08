import {Dialog, IconButton} from "@material-ui/core";
import React from "react";
import styles from "./TextDialog.module.css";
import CloseIcon from '@material-ui/icons/Close';

export interface TextDialogProps {
    title: string
    open: boolean,
    onClose: () => void
    centerText?: boolean
}

const TextDialog: React.FC<TextDialogProps> = ({title, open, onClose, centerText, children}) => {
    return (
        <Dialog open={open} fullWidth>
            <div className={styles.header}>
                <h1>{title}</h1>
                <IconButton size="medium" onClick={onClose}><CloseIcon/></IconButton>
            </div>
            <article className={`${styles.content} ${centerText ? styles.contentCenter : ""}`}>
                {children}
            </article>
        </Dialog>
    )
}

export default TextDialog
