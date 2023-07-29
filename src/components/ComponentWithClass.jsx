import PropTypes from "prop-types"
import {Component} from 'react';
import ClassContent from '../pages/ClassContent';

class ComponentWithClass extends Component {
    constructor() {
        super()
        this.props;

    }
    render() {
        return (
            <div>
                <h1>~olá, {this.props.name}~ com componente de classe.</h1>
                <ClassContent name={this.props.name}/>
            </div>
        );
    }
}

ComponentWithClass.propTypes = {
  name: PropTypes.any
}

export default ComponentWithClass;