import ComponentWithClass from "./components/ComponentWithClass.jsx";
import FunctionalComponent from "./components/FunctionalComponent.jsx";
import './App.css'
import { useState } from 'react';

function App() {
  const initialState = {
    mount: false,
  }
  const [mount, setMount] = useState(initialState)

  return (
    //aqui eu tenho dois componentes criados através da lógica React. Sendo o componente pai "App.jsx" o responsável por renderizar seus filhos "ComponentWithClass" e "FunctionalComponent".
    //trabalharemos primeiro a criação de lógica para estes componentes através de estado.
    <>
    {mount === true ? <FunctionalComponent name='Juan' /> : <ComponentWithClass name='Rodrigo' />}
        <button onClick={() => setMount(true)}>
          Montar componente funcional
        </button>
        <button onClick={() => setMount(false)}>
          Montar componente de classe
        </button>
    </>
  )
}

export default App
