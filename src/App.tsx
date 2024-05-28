import { useState } from "react";
import Welcome from './components/Welcome';
import Hangman from './components/Hangman';

const pistas:any[] = [
     [
        {palabra:"manzana",pista: "Es una fruta comúnmente asociada con dispositivos electrónicos."},
{palabra:"banana",pista: "Es una fruta amarilla y alargada que viene en racimos."},
{palabra:"cereza",pista: "Es una pequeña fruta roja o negra con un hueso en el centro."},
{palabra:"mandarina",pista: "Soy una fruta pequeña y redonda, mi piel es fácil de pelar sin ninguna fricción. Dentro de mí, encontrarás segmentos jugosos y dulces, que te harán sonreír con cada bocado. ¿Quién soy?"},
{palabra:"higo",pista: "Es una fruta de forma ovalada con una piel suave y una textura carnosa."},
{palabra:"uva",pista: "Es una pequeña fruta que crece en racimos y se utiliza para hacer vino."},
{palabra:"kiwi",pista: "Es una fruta pequeña y peluda, de color marrón por fuera y verde por dentro."}
    ],
     [
        {palabra:"triangulo",pista: "Es una figura con tres lados y tres ángulos."},
        {palabra:"cuadrado",pista: "Es una figura con cuatro lados de igual longitud y cuatro ángulos rectos."},
        {palabra:"rectangulo",pista: "Es una figura con cuatro lados y cuatro ángulos, donde los ángulos opuestos son iguales."},
        {palabra:"hexagono",pista: "Es una figura con seis lados y seis ángulos."},
        {palabra:"circulo",pista: "Es una figura plana con todos los puntos equidistantes del centro."}
    ],
     [
        {palabra:"azul", pista: "Es el color del cielo y el mar, y se asocia con la calma y la serenidad."},
        {palabra:"rosa", pista: "Es un color suave que se asocia con la feminidad y la delicadeza."},
        {palabra:"morado", pista: "Es un color entre azul y rojo, y se asocia con la realeza y la espiritualidad."},
        {palabra:"cafe", pista: "Es un color oscuro que se asemeja al color del café tostado."},
        {palabra:"negro", pista: "Es el color más oscuro y se asocia con el misterio y la elegancia."},
        {palabra:"blanco", pista: "Es el color de la pureza y se asocia con la inocencia y la paz."},
        {palabra:"gris", pista: "Es un color intermedio entre blanco y negro, y se asocia con la neutralidad y la sobriedad."}
    ],
     [
        {palabra:"television",pista: "Es un dispositivo electrónico que muestra imágenes y sonido a través de ondas."},
        {palabra:"refrigerador",pista: "Es un electrodoméstico que se utiliza para mantener los alimentos frescos y fríos."},
        {palabra:"lavadora",pista: "Es un electrodoméstico utilizado para lavar la ropa."},
        {palabra:"microondas",pista: "Es un electrodoméstico que se utiliza para calentar alimentos rápidamente."},
        {palabra:"estufa",pista: "Es un electrodoméstico utilizado para cocinar alimentos mediante el calor."}
    ]
];

function App() {
    const [start, setStart] = useState(false);
    const random = Math.floor(Math.random() * pistas.length);
    const pista = pistas[random];
    return (
        <div className='App'>
            {start ? (
                <Hangman words={pista}  />
            ) : (
                <Welcome onStart={() => setStart(true)} />
            )}
        </div>
    );
}
export default App;




