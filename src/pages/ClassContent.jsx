import PropTypes from "prop-types"
import { Component } from 'react'
import swal from 'sweetalert';
export class ClassContent extends Component {
  constructor() {
    super();
    this.props;
    
    this.state = {
      alert: '',
    }
    console.log(this.state.alert);
  }
  
  componentDidMount() {
    this.setState({
      alert: 'você acessou o estado deste componente de classe!' //esta é uma ótima maneira de preservar o estado inicial do componente.
    })
  }
  
  render() {
    console.log(this.state.alert);
    return (
      <div>
        <h2>
          aqui é o conteúdo do meu componente de classe.
        </h2>
        <h2>
          olá novamente, {this.props.name}
        </h2>
        <button onClick={() => swal(this.state.alert)}>
          Clique em mim para gerar um sweet alert.
        </button>
      </div>
    )
  }
}

ClassContent.propTypes = {
  name: PropTypes.any
}

export default ClassContent;
