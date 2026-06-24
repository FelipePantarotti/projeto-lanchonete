import './Login.css'

function Login(){
    return (
        <>
        <div className="card">
            <div className="container">
                <h2>Login</h2>
                <input type="text" placeholder="Digite o usuário"/>
                <input type="text" placeholder="Digite a senha"/>
                <button>Enviar</button>
                <a href="#">Esqueceu a senha?</a>
            </div>
        </div>
        </>
    )
}
export default Login
