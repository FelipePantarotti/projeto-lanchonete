import Header from "./components/Header";
import Login from "./components/Login";
import CardProd from "./components/CardProd";
import Funcionario from "./components/Funcionario";
import Contador from "./components/Contador";
import Calculadora from "./components/Calculadora";

function App(){

    const lanches = [{id:1,nome:"x-salada",preco:"17.50"}]
                    [{id:2,nome:"x-burguer",preco:"15.90"}]
                    [{id:3,nome:"refrigerante",preco:"6.00"}]

    return(
        <>
            <Header titulo="Lanchonete Xpress" 
            subtitulo="O melhor da região" />
            <Login />

            <div className="lista_cards">
                {
                    lanches.map(lanche => (
                        <CardProd
                        key = {lanche.id}
                        nome = {lanche.nome}
                        preco = {lanche.preco}
                        />)
                    )
                }
            </div>

            <Calculadora />

            <Funcionario func="João" cargo="Atendente" />

            <Contador />

        </>
    )
}
export default App
