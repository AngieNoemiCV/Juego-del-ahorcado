import { useState } from "react";
import Reloj from './Reloj';


interface HangmanProps {
    words: string[];
    pista: { [word: string]: string };
}

import error1 from '../img/Error1.png'
import error2 from '../img/Error2.png'
import error3 from '../img/Error3.png'
import error4 from '../img/Error4.png'
import error5 from '../img/Error5.png'
import error6 from '../img/Error6.png'
import error7 from '../img/Error7.png'

const Errores = [error1,error2,error3,error4,error5,error6,error7]
const Hangman = ({ words, pista }: HangmanProps) => { 

    const [selectedWords, setSelectedWord] = useState(words[0]);
    const [guessdLetters, setGuessedLetters] = useState<string[]>([]);
    const [errorCount, setErrorCount] = useState(0);

    const displayWord = selectedWords.split('').map((letter) => {
        console.log("SelectWord: ", selectedWords)
        if (guessdLetters.includes(letter)) {
            console.log("guesedLetters: ", guessdLetters)
            return letter;
        } else {
            return '_';
        }
    });

    const handleGuess = (letter: string) => {
        if (!guessdLetters.includes(letter)) {
            setGuessedLetters([...guessdLetters, letter]);
            if (!selectedWords.includes(letter)) {
                setErrorCount((prev) => prev + 1);
                console.log("setErrorCount: ", setErrorCount)
            }
        }
    };

    const restartGame = () => {
        const newWordIndex = Math.floor(Math.random() * words.length);
        const newWord = words[newWordIndex];
        setSelectedWord(newWord); 
        setGuessedLetters([]); 
        setErrorCount(0); 
    };

    return (

        <div>
            <p>{displayWord.join(' ')}</p>
            <Reloj intervalo={1000} /> 
            <p>Pista: {pista[selectedWords]}</p>
            <img className="imagenFases" src={Errores[errorCount]} />
            
            <input maxLength={1} onChange={(e) => handleGuess(e.target.value)} />
            {
                (displayWord.join('') === selectedWords || errorCount > 5) && (
                    <button onClick={() => {
                        restartGame();
                        setSelectedWord(words[Math.floor(Math.random() * words.length)]);
                    }}>Select New Word</button>
                )
            }
            <p>Cantidad de errors: { errorCount }</p>
            {displayWord.join('') === selectedWords && (

                <p>You win in this game</p>

            )}
        </div>
    );




};

export default Hangman;