import React from "react";
import './TypingChallenge.css'
import TestLetter from "../TestLetter/TestLetter";

const TypingChallenge = (props) => {

    return(
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:{ props.timeRemaining >= 10 ? props.timeRemaining : `0${props.timeRemaining}` }</p>
                <p className="timer-info">
                    {!props.timerStarted && "Timer starts with your typing" }
                </p>

            </div>

            <div className="textarea-container">
                <div className="text-reader">
                    <div className="textarea test-paragraph">
                        {/* { props.selectedParagraph } */}
                        {
                            props.testInfo.map((individualLetterInfo) => {
                                return (
                                    <TestLetter individualLetterInfo={ individualLetterInfo } />
                                );
                            })
                        }
                    </div>
                </div>
                <div className="text-writer">
                    <textarea 
                        className="textarea"
                        placeholder="Start typing here"
                    >

                    </textarea>
                </div>
            </div>
        </div>
    );
}

export default TypingChallenge;