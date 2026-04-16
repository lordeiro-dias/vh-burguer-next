import styles from './login.module.css';

//ESTRUTURA PADRÃO
const Login = () => {
    return(
        <>
            <main id={styles.telaInteira}>
                <img src="/imgs/hamburguer_login.png" alt="Imagem de um hambúrguer caindo com os ingredientes espaçados em um fundo escuro." />
                <div id={styles.centralizarLogin}>

                    <h1 className={styles.titulu}>Login</h1>

                    <form action="" id={styles.divisaoFormulario}>
                        <div className={styles.campo_form}>
                            <label htmlFor="email">E-mail</label>
                            <input className={styles.inputs} type="text" name="email" placeholder="email@exemplo.com" required/>
                        </div>

                        <div className={styles.campo_form}>
                            <label htmlFor="senha">Senha</label>
                            <input className={styles.inputs} type="password" name="senha" placeholder="********" required/>
                        </div>
                        
                        <a id={styles.esqueceuSenha}href="">Esqueceu sua Senha?</a>
                        <button className={styles.botaoEntrar}>Entrar</button>
                    </form>

                </div>
            </main>
        </>
    )
}

export default Login;