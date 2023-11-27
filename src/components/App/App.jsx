import React, { Component } from "react";
import './App.css';
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSection";

const totalTime = 60;
// const paragraphAPI = 'http://metaphorpsum.com/paragraphs/1/9';

class App extends Component {

    state = {
        selectedParagraph: "Hello World!!",
        timerStarted: true,
        timeRemaining: totalTime,
        words: 0,
        characters: 0,
        wpm: 0,
        testInfo: []
    }

    componentDidMount() {
        // fetch(paragraphAPI)
        //     .then((response) => response.text())
        //     .then((data) => {
        //         this.setState({selectedParagraph: data})
        //     });

        const paragraphList = this.state.selectedParagraph.split("");
        // console.log('splitted -> ', paragraphList);
        const testInfo = paragraphList.map((selectedLetter) => {
            return{
                testLetter: selectedLetter,
                status: "notAttempted",
            };
        });

        this.setState({testInfo: testInfo});
    }

    render() {

        return (
            <div className="app">
                <Nav />
                <Landing />

                <ChallengeSection 
                    selectedParagraph={this.state.selectedParagraph}
                    words={this.state.words}
                    characters={this.state.characters}
                    wpm={this.state.wpm}
                    timeRemaining={this.state.timeRemaining}
                    timerStarted={this.state.timerStarted}
                    testInfo={ this.state.testInfo }
                />
                <Footer />
            </div>
        )
    }
}

export default App;