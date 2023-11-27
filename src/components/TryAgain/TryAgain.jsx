import React from "react";
import "./TryAgain.css"

const TryAgain = ({ words, characters, wpm }) => {
    return (
        <div className="try-again-container">
            <h1>Test Results</h1>
            <div className="result-container">
                <p>
                    <b>Characters:</b> {characters}
                </p>
                <p>
                    <b>Words:</b> {words}
                </p>
                <p>
                    <b>Speed:</b> {wpm}
                </p>
            </div>
            <div className="buttons-container">
                <button className="end-buttons start-again-btn">Re-Try</button>
                <button 
                    onClick={()=>{
                        window.open(
                            "https://www.facebook.com/sharer/sharer.php?u=theFirmFirewall.com/academics", 
                            "facebook-share-dialogue",
                            "width:800,height:600"
                        );
                    }}
                    className="end-buttons share-btn"
                >
                    Share
                </button>
            </div>
        </div>
    );
}

export default TryAgain;