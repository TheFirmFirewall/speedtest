import React from "react";
import "./TestContainer.css";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";
import TryAgain from "../TryAgain/TryAgain";

const TestContainer = (props) => {

    return (

        <div className="test-container">

            {
                props.timeRemaining > 0 ? (
                    <div data-aos="fade-up" className="typing-test-container">
                        <TypingChallengeContainer 
                            words={ props.words } 
                            characters={ props.characters } 
                            wpm={ props.wpm } 
                            timerStarted={ props.timerStarted }
                            selectedParagraph={ props.selectedParagraph }
                            timeRemaining={ props.timeRemaining }
                            testInfo={ props.testInfo }
                        />
                    </div>
                ) : (
                    <div data-aos='fade-in' className="try-again-container">
                        <TryAgain words={ props.words } characters={ props.characters } wpm={ props.wpm }/>
                    </div>
                )
            }

        </div>
    )
}

export default TestContainer;