import React from 'react';
import './App.css';
import GhostGrid from "./components/ghost-grid/GhostGrid";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <main>
                <GhostGrid/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
