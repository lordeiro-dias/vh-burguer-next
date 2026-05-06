import Footer from '@/components/footer/footer'
import styles from './detalhe_produto.module.css'
import Sub_Header from '@/components/sub-header/sub_header'
import { useEffect, useState } from 'react'
import { listarPorId } from '@/pages/api/produtoService'
import { useParams } from 'next/navigation'

interface Produto{
    nome: string,
    descricao: string,
    preco: number,
    imagemUrl: string,
    categorias: string[],
    categoriaIds: number
}

const Detalhe_Produto = () => {

    const[produto, setProduto] = useState<Produto>();

    const params = useParams();

    const id = params?.id;

    async function listarProduto() {
        try{
            const response = await listarPorId(Number(id));
            console.log(response);
            setProduto(response);
        }
        catch(error: any){
            console.log(error.message);
        }
    }

    useEffect(() =>{
        if(!id) return;

        setTimeout(() =>{
            listarProduto();
        }, 1000);
    }, [id])

    return(
        <>
            <Sub_Header/>
                <main id={styles.main}>
                    <div id={styles.cardDetalhe}>
                        {produto ? (
                            <>
                            <div id={styles.centralizarImg}>
                                <h1>DETALHES DO {produto?.nome.toUpperCase()}</h1> 
                                <img src={produto.imagemUrl} alt="Hambúrguer de Alcatra com bacon em cima de uma tábua de madeira"/>
                            </div>

                            <div id={styles.detalhes}>
                                <div id={styles.esquerda}>
                                    <div>
                                        <p className={styles.titulo}>Nome do Produto</p>
                                        <p className={styles.textos}>{produto?.nome}</p>
                                    </div>
                                    <div id={styles.descricao}>
                                        <p className={styles.titulo}>Descrição</p>
                                        <p className={styles.textos}>{produto?.descricao}</p>
                                    </div>
                                </div>

                                <div id={styles.direita}>
                                    <div>
                                        <p className={styles.titulo}>Preço (R$)</p>
                                        <div id={styles.alinhaTexto}>
                                            <p className={styles.textos} id={styles.riscado}>R$45,00</p>
                                            <p className={styles.textos}>{produto?.preco}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className={styles.titulo}>Categoria</p>
                                        <ul className={styles.textos} id={styles.lista}>
                                            {produto.categorias.map((cat) => (
                                                <li key={cat}>{cat}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </>
                        ) : (<p>Carregando produto....</p>)}
                    </div>
                </main>
            <Footer/>
        </>
    )
}

export default Detalhe_Produto