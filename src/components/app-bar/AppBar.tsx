import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography";
import MaterialAppBar from "@material-ui/core/AppBar";
import MenuIcon from '@material-ui/icons/Menu';
import React from "react";

export interface AppBarProps {
    title: string,
    onMenuButton?: () => void
}

export default function AppBar(props: AppBarProps) {
    const {title, onMenuButton} = props;
    return (
        <MaterialAppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={onMenuButton}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6">
                    {title}
                </Typography>
            </Toolbar>
        </MaterialAppBar>
    )
}
