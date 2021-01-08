import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import styles from './DrawerMenu.module.css';

export interface DrawerMenuItem {
    text: string,
    icon: JSX.Element,
    onClick: () => void
}

export interface DrawerMenuProps {
    open: boolean,
    onClose: (event: React.KeyboardEvent | React.MouseEvent) => void,
    onOpen: (event: React.KeyboardEvent | React.MouseEvent) => void,
    items: Array<DrawerMenuItem>
}

export function DrawerMenu({items, onClose, onOpen, open}: DrawerMenuProps) {
    return (
        <SwipeableDrawer
            anchor="left"
            open={open}
            onClose={onClose}
            onOpen={onOpen}
        >
            <List className={styles.List}>
                {items.map(item => (
                        <ListItem button onClick={item.onClick}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>{item.text}</ListItemText>
                        </ListItem>
                    )
                )}
            </List>
        </SwipeableDrawer>
    )
}
