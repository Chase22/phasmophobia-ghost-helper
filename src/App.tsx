import React, {useState} from 'react';
import './App.css';
import GhostGrid from "./components/ghost-grid/GhostGrid";
import Footer from "./components/footer/Footer";
import HelpDialog from "./components/help-dialog/HelpDialog";

function App() {
    const [helpDialogOpen, setHelpDialogOpen] = useState(false)

    return (
        <div className="App">
            <HelpDialog open={helpDialogOpen} onClose={() => setHelpDialogOpen(false)}/>
            <main>
                <GhostGrid onHelpButton={() => setHelpDialogOpen(true)}/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
