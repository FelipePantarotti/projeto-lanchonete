function CardProd(props) {
    return (

      <div className="produto">
        <h3>{props.nome}</h3>
        <span className="preco">R$ {props.preco}</span>
      </div>

    );
  }
  
  export default CardProd;