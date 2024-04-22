import { useState } from "react";

interface HangmanProps {
    words: string[];
    pista: { [word: string]: string };
}

const Hangman = ({ words, pista }: HangmanProps) => { 

    const [selectedWords, setSelectedWord] = useState(words[0]);
    const [guessdLetters, setGuessedLetters] = useState<string[]>([]);
    const [errorCount, setErrorCount] = useState(0);

    const displayWord = selectedWords.split('').map((letter, index) => {
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
            <p>Pista: {pista[selectedWords]}</p>
            <input maxLength={1} onChange={(e) => handleGuess(e.target.value)} />
            {
                (displayWord.join('') === selectedWords || errorCount > 5) && (
                    <button onClick={() => {
                        restartGame();
                        setSelectedWord(words[Math.floor(Math.random() * words.length)]);
                    }}>Select New Word</button>
                )
            }
            <p>Cantidad de errors {errorCount}</p>
            {displayWord.join('') === selectedWords && (

                <p>You win in this game</p>

            )}
        </div>
    );




};

export default Hangman;