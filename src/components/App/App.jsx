import React, { Component } from "react";
import './App.css';
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";

class App extends Component {
    render() {
        return (
            <div className="app">
                {/* {Nav section} */}
                <Nav />
                
                {/* {Landing Page} */}
                <Landing />

                {/* {Challenge Section} */}

                {/* {Footer} */}
            </div>
        )
    }
}

export default App;