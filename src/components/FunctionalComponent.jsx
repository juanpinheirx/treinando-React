import PropTypes from "prop-types"
import FunctionalContent from '../pages/FunctionalContent';
import { useEffect, useState } from 'react';

function FunctionalComponent(props) {
    const initialState = {
        alert: '',
        mount: true,
    }

    const [message, setMessage] = useState(initialState);

    const triggerMessage = () => {
        alert(message);
    }

    
    useEffect(() => {
        setMessage('você alterou o estado inicial desse componente funcional')
    }, []) // aqui é a função que quando o componente é montado -- apesar que seu estado inicial permanece intacto como em initialState --, o estado muda quando essa montagem acontece. 
    
    return (
        <div>
            <h1>~olá, {props.name}~ com componente funcional. </h1>
            <button
            onClick={() => triggerMessage()}
            >
                Clique em mim!
            </button>
            <FunctionalContent name='Juan'/>
        </div>
    );
}

FunctionalComponent.propTypes = {
  name: PropTypes.any
}

export default FunctionalComponent;