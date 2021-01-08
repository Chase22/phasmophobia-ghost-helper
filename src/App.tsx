import React, {useState} from 'react';
import styles from './App.module.css';
import GhostGrid from "./components/ghost-grid/GhostGrid";
import Footer from "./components/footer/Footer";
import HelpDialog from "./components/help-dialog/HelpDialog";
import AppBar from "./components/app-bar/AppBar";
import {DrawerMenu, DrawerMenuItem} from "./components/drawer-menu/DrawerMenu";
import HelpIcon from '@material-ui/icons/Help';
import AboutDialog from "./components/about-dialog/AboutDialog";

function App() {
    const [helpDialogOpen, setHelpDialogOpen] = useState(false)
    const [aboutDialogOpen, setAboutDialogOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const menuItems: Array<DrawerMenuItem> = [
        {
            text: "Help", icon: <HelpIcon/>, onClick: () => {
                setHelpDialogOpen(true);
                setMenuOpen(false);
            }
        },
        {
            text: "About", icon: <HelpIcon/>, onClick: () => {
                setAboutDialogOpen(true);
                setMenuOpen(false);
            }
        },
    ]

    function toggleMenu(event: React.KeyboardEvent | React.MouseEvent, newState: boolean) {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setMenuOpen(newState)
    }

    return (
        <div className={styles.App}>
            <header><AppBar title={"Ghost Helper"} onMenuButton={() => setMenuOpen(true)}/></header>
            <DrawerMenu
                open={menuOpen}
                onClose={event => toggleMenu(event, false)}
                onOpen={event => toggleMenu(event, true)}
                items={menuItems}
            />
            <HelpDialog open={helpDialogOpen} onClose={() => setHelpDialogOpen(false)}/>
            <AboutDialog open={aboutDialogOpen} onClose={() => setAboutDialogOpen(false)}/>
            <main>
                <GhostGrid/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
