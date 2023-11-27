import React from "react";
import './TypingChallengeContainer.css';
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from '../TypingChallenge/TypingChallenge';

const TypingChallengeContainer = (props) => {
    return (
        <div className="typing-challenge-container">
            <div className="details-container">
                
                <ChallengeDetailsCard metricName="words" metricValue={ props.words } />
                <ChallengeDetailsCard metricName="characters" metricValue={ props.characters } />
                <ChallengeDetailsCard metricName="speed" metricValue={ props.wpm } />
                
            </div>

            <div className="test-attempt-container">
                <TypingChallenge 
                    selectedParagraph={ props.selectedParagraph } 
                    words={ props.words }
                    characters={ props.characters }
                    wpm={ props.wpm }
                    timeRemaining={ props.timeRemaining }
                    timerStarted={ props.timerStarted }
                    testInfo={ props.testInfo }
                />
            </div>
        </div>
    );
};

export default TypingChallengeContainer;