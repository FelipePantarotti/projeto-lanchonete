function Funcionario(props) {
    return (
      <div className="funcionario">
        <p><strong>Nome:</strong> {props.nome}</p>
        <p><strong>Cargo:</strong> {props.cargo}</p>
      </div>
    );
  }
  
  export default Funcionario;