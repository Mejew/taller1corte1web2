import { useState } from 'react';
import Card from "./Componentes/Card";
import Contador from "./Componentes/Contador";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css'

//creo el array de objetos en este caso de animales, fuera para que no se cargue cada vez que se renderiza

const animales = [
  {
    id: 1,
    name: "Leon",
    image:
      "https://img.freepik.com/free-photo/portrait-lion-lying-ground_181624-9055.jpg?w=740&t=st=1691834352~exp=1691834952~hmac=3550772c6346b9ad7764203c7774b3954fc3d0f0b343249ac7c2d6dd31dfb696",
    descripcion:
      "El león, es el rey de las sabanas africanas. Su melena y fuerza  lo distinguen como un depredador unico.",
  },
  {
    id: 2,
    name: "Tigre",
    image:
      "https://img.freepik.com/free-photo/tiger-natural-habitat-hidden-forest_167946-91.jpg?w=740&t=st=1691834685~exp=1691835285~hmac=0dd341acb93e06bd30fc853a283f58e5317c4f8530a57e325dc93ec8420398a8",
    descripcion:
      "El tigre, reina en los bosques asiáticos. Su agilidad y poder lo definen como un cazador solitario y emblemático.",
  },
  {
    id: 4,
    name: "Leopardo de las Nieves",
    image:
      "https://img.freepik.com/free-photo/view-wild-snow-leopard-nature_23-2150460878.jpg?t=st=1691838589~exp=1691842189~hmac=80824376890065d48a2e18422d8a2db7e7c507dd0862d302d72d67e27297c6ee&w=740",
    descripcion:
      "El leopardo, esquivo y elegante. listo para luchar en entornos extremos y remotos.",
  },
  {
    id: 5,
    name: "Lince",
    image:
      "https://img.freepik.com/free-photo/view-wild-lynx-nature_23-2150460906.jpg?t=st=1691836987~exp=1691840587~hmac=8681753d714ef813f9a71d5e6a6373815b87e6e695d07394f7422dc1386369d0&w=740",
    descripcion:
      "El lince, habita bosques y montañas. Orejas puntiagudas y manchas distintivas definen su gracia salvaje.",
  },
  {
    id: 6,
    name: "Pantera Negra",
    image:
      "https://img.freepik.com/free-photo/view-black-panther-nature_23-2150460854.jpg?t=st=1691837287~exp=1691840887~hmac=e9a783d7959ddacaeeeb13aef5e54f0fde8dc4863ae9b6e10fd939834e64eb77&w=740",
    descripcion:
      "Pantera negra, elegancia y misterio en la oscuridad, cazador sigiloso que domina la selva nocturna.",
  },
  {
    id: 3,
    name: "Jaguar",
    image:
      "https://img.freepik.com/free-photo/view-leopard-animal-wild_23-2150374898.jpg?t=st=1691835031~exp=1691838631~hmac=b4e7211a6f5ace2844b3d5eb07502008525819bd69caa287a205a79040c41e59&w=740",
    descripcion:
      "El jaguar, domina las selvas tropicales. Su presencia en la mitología lo hace un depredador legendario.",
  },
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-center my-5">Animales</h1>
      <Card animales={animales} count={count} />
      <Contador count={count} setCount={setCount}/>

    </>
  )
}

export default App