import { excluirProduto, listarProduto } from '@/pages/api/produtoService'
import Card_Produto from '../card-produto/card_produto'
import styles from './lista_produto.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { erro, notificacao, toastConfirmarExclusao } from '@/utils/toast'
import { ToastContainer } from 'react-toastify'
import { verificarAutenticacao } from '@/utils/auth'

type Produto = {
    produtoID: number,
    nome: string,
    descricao: string,
    preco: number,
    imagemUrl: string,
    statusProduto: boolean
    estaLogado: boolean
}

const Lista_Produto = () => {

    const[produtos, setProdutos] = useState<Produto[]>([]);

    const[ordem, setOrdem] = useState("todos");
    //salvar o que foi escrito pelo usuário
    const[pesquisa, setPesquisa] = useState("");
    //salva a info do usuário logado
    const[estaAutenticado, setEstaAutenticado] = useState(false);

    async function listar(){
        try{
            const lista = await listarProduto();
            setProdutos(lista);
        }
        catch(error: any){
            console.log(error.message);
        }
    }

    function confirmarExclusao(produtoId: number){
        toastConfirmarExclusao(async () => {
            try{
                await excluirProduto(produtoId);
                setProdutos((listaAtual) => ( 
                    listaAtual.map((produto) => ( 
                        produto.produtoID === produtoId 
                        ? {...produto, statusProduto: false}
                        : produto 
                    ))))

                notificacao("Produto inativado");
                listar();
            }   
            catch(error: any){
                erro(error.message);
            }
        })
    }

    useEffect(() => {
        setEstaAutenticado(verificarAutenticacao());
        listar();
    },[])

    const produtosFiltrados = produtos.filter((e) => 
    e.nome.toLowerCase().includes(pesquisa.toLowerCase()))
    .sort((a, b) => {
        if(ordem === "menor_valor")
        {
            return a.preco - b.preco
        }
        else if(ordem === "maior_valor")
        {
            return b.preco - a.preco
        }

        return a.produtoID - b.produtoID;
    });

    return(
        <>
            <div className={`${styles.container}`}>

                <div id={styles.alinharBotoes}>
                    <select id={styles.botaoFiltrar} value={ordem} onChange={(e) => setOrdem(e.target.value)}>Filtar
                        <option value="todos">Todos</option>
                        <option value="menor_valor">Menor valor</option>
                        <option value="maior_valor">Maior valor</option>
                    </select>
                    <div>
                        <label htmlFor="">Pesquise</label>
                        <input type="text" name="pesquisa" id="" placeholder="Digite o nome do produto" onChange={(e) => {setPesquisa(e.target.value)}}/>
                    </div>
                    {estaAutenticado && ( <div id={styles.alinharBotoes2}>
                        <Link className={styles.outrosBotoes} href="/promocoes">Promoções</Link>
                        <Link className={styles.outrosBotoes} href="/produto">Adicionar Produto</Link>
                    </div>)}
                    
                </div>

                <div id={styles.alinhamento}>
                    <ul id={styles.listagem}>
                        {produtosFiltrados.length > 0 ? produtosFiltrados.map((item) =>(
                            <li key={item.produtoID}>
                                <Card_Produto
                                    produtoID={item.produtoID}
                                    titulo={item.nome}
                                    descricao={item.descricao}
                                    preco={item.preco}
                                    imagem={item.imagemUrl}
                                    estaLogado={estaAutenticado}
                                    onDelete={confirmarExclusao}
                                />
                            </li>
                        )) : (
                            <p>Carregando produto...</p>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Lista_Produto