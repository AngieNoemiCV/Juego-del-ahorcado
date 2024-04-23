import Hangman from '../img/Hangman.png';
import '../css/Welcome.css'

interface WelcomeProps{
    onStart: () => void;
}

function Welcome({ onStart }: WelcomeProps){
    return(
        <>
        <div className='wrapper'>
            <h1>Welcome o Hangman Game!</h1>
            <h2> Classical Game</h2>
            <img src={Hangman} alt='Hangman image...' width={200} height={200} />
            <div>
                <button className='Boton' onClick={onStart}>INICIAR JUEGO</button>
            </div>
        </div>
        </>
    );
}
export default Welcome;
               
