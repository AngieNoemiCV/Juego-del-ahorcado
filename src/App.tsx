import Welcome from './components/Welcome';
import Hangman from './components/Hangman';

const frutas = ["apple", "banana", "cherry", "date", "fig", "grape", "kiwi"];
const figuras = ["triangulo", "cuadrado", "rectangulo", "hexagono", "circulo"];
const colores = ["azul", "rosa", "morado", "cafe", "negro", "blanco", "gris"];
const electrodomesticos = ["television", "refrigerador", "lavadora", "microondas", "estufa"];

const wordCategories = {
  frutas: {
    words: frutas,
    pista: {
      manzana: "Es una fruta comúnmente asociada con dispositivos electrónicos.",
      banana: "Es una fruta amarilla y alargada que viene en racimos.",
      cereza: "Es una pequeña fruta roja o negra con un hueso en el centro.",
      mandarina: "Soy una fruta pequeña y redonda, mi piel es fácil de pelar sin ninguna fricción. Dentro de mí, encontrarás segmentos jugosos y dulces, que te harán sonreír con cada bocado. ¿Quién soy?",
      higo: "Es una fruta de forma ovalada con una piel suave y una textura carnosa.",
      uva: "Es una pequeña fruta que crece en racimos y se utiliza para hacer vino.",
      kiwi: "Es una fruta pequeña y peluda, de color marrón por fuera y verde por dentro."
    }
  },
  figuras: {
    words: figuras,
    pista: {
      triangulo: "Es una figura con tres lados y tres ángulos.",
      cuadrado: "Es una figura con cuatro lados de igual longitud y cuatro ángulos rectos.",
      rectangulo: "Es una figura con cuatro lados y cuatro ángulos, donde los ángulos opuestos son iguales.",
      hexagono: "Es una figura con seis lados y seis ángulos.",
      circulo: "Es una figura plana con todos los puntos equidistantes del centro."
    }
  },
  colores: {
    words: colores,
    pista: {
      azul: "Es el color del cielo y el mar, y se asocia con la calma y la serenidad.",
      rosa: "Es un color suave que se asocia con la feminidad y la delicadeza.",
      morado: "Es un color entre azul y rojo, y se asocia con la realeza y la espiritualidad.",
      cafe: "Es un color oscuro que se asemeja al color del café tostado.",
      negro: "Es el color más oscuro y se asocia con el misterio y la elegancia.",
      blanco: "Es el color de la pureza y se asocia con la inocencia y la paz.",
      gris: "Es un color intermedio entre blanco y negro, y se asocia con la neutralidad y la sobriedad."
    }
  },
  electrodomesticos: {
    words: electrodomesticos,
    pista: {
      television: "Es un dispositivo electrónico que muestra imágenes y sonido a través de ondas.",
      refrigerador: "Es un electrodoméstico que se utiliza para mantener los alimentos frescos y fríos.",
      lavadora: "Es un electrodoméstico utilizado para lavar la ropa.",
      microondas: "Es un electrodoméstico que se utiliza para calentar alimentos rápidamente.",
      estufa: "Es un electrodoméstico utilizado para cocinar alimentos mediante el calor."
    }
  }
};

function App() {
  const categories = Object.keys(wordCategories);
  const selectedCategory = categories[Math.floor(Math.random() * categories.length)];

  return (
    <div className="App">
      <Welcome />
      <Hangman words={wordCategories[selectedCategory].words} pista={wordCategories[selectedCategory].pista} />
    </div>
  );
}

export default App;
