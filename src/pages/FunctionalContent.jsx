import PropTypes from "prop-types"
export default function FunctionalContent(props) {
  return (
    <div>
      <h2>
        aqui é o conteúdo do meu componente funcional.
      </h2>
      <h2>
        olá novamente, {props.name}
      </h2>
    </div>
  )
}

FunctionalContent.propTypes = {
  name: PropTypes.any
}
