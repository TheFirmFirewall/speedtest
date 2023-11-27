import React from "react";
import './ChallengeSection.css';
import TestContainer from "../TestContainer/TestContainer";

const ChallengeSection = (props) => {
    return (
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take a speed test now!
            </h1>

            <TestContainer 
                selectedParagraph={ props.selectedParagraph }
                words={ props.words } 
                characters={ props.characters } 
                wpm={ props.wpm } 
                timeRemaining={ props.timeRemaining }
                timerStarted={ props.timerStarted }
                testInfo={ props.testInfo }
            />
        </div>
    )
}

export default ChallengeSection;