import { excluirProduto, listarProduto } from '@/pages/api/produtoService'
import Card_Produto from '../card-produto/card_produto'
import styles from './lista_produto.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { erro, notificacao, toastConfirmarExclusao } from '@/utils/toast'
import { ToastContainer } from 'react-toastify'

type Produto = {
    produtoID: number,
    nome: string,
    descricao: string,
    preco: number,
    imagemUrl: string,
    statusProduto: boolean
}

const Lista_Produto = () => {

    const[produtos, setProdutos] = useState<Produto[]>([]);

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
        listar();
    },[])

    return(
        <>
            <div className={`${styles.container}`}>

                <div id={styles.alinharBotoes}>
                    <button id={styles.botaoFiltrar}>Filtrar <img src="./imgs/filtrar.svg" alt="" /></button>
                    <div id={styles.alinharBotoes2}>
                        <Link className={styles.outrosBotoes} href="/promocoes">Promoções</Link>
                        <Link className={styles.outrosBotoes} href="/produto">Adicionar Produto</Link>
                    </div>
                </div>

                <div id={styles.alinhamento}>
                    <ul id={styles.listagem}>
                        {produtos.length > 0 ? produtos.map((item) =>(
                            <li key={item.produtoID}>
                                <Card_Produto
                                    produtoID={item.produtoID}
                                    titulo={item.nome}
                                    descricao={item.descricao}
                                    preco={item.preco}
                                    imagem={item.imagemUrl}
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