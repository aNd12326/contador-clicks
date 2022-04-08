import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton'
import Contador from './componentes/Contador'
import { useState } from 'react';

function App() {

  const [numClics,setNumClics] = useState(0)
  /*
    numClics => es el valor que queremos mostrar como el estado, este es el estado que vamos a guardar,usar y actualizar

    setNumClics => es una funcion que nos va a permitir actualizarlo
  */

  const manejarClick = () => {
    setNumClics(numClics + 1)
  }

  const reiniciarContador = () => {
    setNumClics(0)
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freecodecamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Click'
          esBotonDeClick = {true}
/*este es un prop*/ manejarClick = {manejarClick}/*este es un function*/
        />
        <Boton 
          texto = 'Reiniciar'
          esBotonDeClick = {false}
          manejarClick = {reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
