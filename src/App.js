import React from "react";
import "./App.css";
import { Home } from "./Layout/Home";
import GlobalContext from "./Contexts/GlobalContext";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return(
        <GlobalContext>    
            <div className="app-container">
                <Router>
                    <Home/>
                </Router>
            </div>
        </GlobalContext>
    )
}

export default App