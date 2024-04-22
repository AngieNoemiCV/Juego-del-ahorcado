import Hangman from '../img/Hangman.png';
import '../css/Welcome.css'


export default function Welcome (){
    return(
        <>
        <div className='wrapper'>
            <h1>Welcome o Hangman Game!</h1>
            <h2> Classical Game</h2>
            <img src={Hangman} alt='Hangman image...' width={200} height={200} />
        </div>
        </>
    );
}

               
