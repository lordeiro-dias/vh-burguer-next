import { useState } from 'react';
import styles from './login.module.css';
import { login } from '../api/authService';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

//ESTRUTURA PADRÃO
const Login = () => {

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const router = useRouter();
    const notificacao = (msg: string) => toast(msg);
    const erro = (msg: string) => toast.error(msg);

    async function autenticar(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            await login(email, senha);
            notificacao("Login bem sucedido!");
            
            setTimeout(() =>{
                router.push("/home");
            }, 2000);
            
        }
        catch(error: any)
        {
            erro("Login Inválido");
        }
    } 

    return(
        <>
            <ToastContainer/>
            <main id={styles.telaInteira}>
                <img src="/imgs/hamburguer_login.png" alt="Imagem de um hambúrguer caindo com os ingredientes espaçados em um fundo escuro." />
                <div id={styles.centralizarLogin}>

                    <h1 className={styles.titulu}>Login</h1>

                    <form action="" id={styles.divisaoFormulario} onSubmit={autenticar}>
                        <div className={styles.campo_form}>
                            <label htmlFor="email">E-mail</label>
                            <input className={styles.inputs} type="text" name="email" placeholder="email@exemplo.com" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className={styles.campo_form}>
                            <label htmlFor="senha">Senha</label>
                            <input className={styles.inputs} type="password" name="senha" placeholder="********" required value={senha} onChange={(s) => setSenha(s.target.value)}/>
                        </div>
                        
                        <a id={styles.esqueceuSenha}href="">Esqueceu sua Senha?</a>
                        <button className={styles.botaoEntrar} type='submit'>Entrar</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Login;