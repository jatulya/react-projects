import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver (){
    const {gameOver, currAttempt, correctWord} = useContext(AppContext)
    return(
        <div className="gameover">
            <h3>{gameOver.correct ? "You Correctly Guessed.." : "Guessed Incorrect word "}</h3>
            <h3> Correct: {correctWord}</h3>
            { gameOver.correct && 
              (<h3> You guessed in {currAttempt.attempt} attempts</h3>)
            }
        </div>
    )
}

export default GameOver

