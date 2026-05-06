import styles from './card_produto.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faPenToSquare, faSliders, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { formatarPreco } from '@/utils/formatacao'
import Link from 'next/link'

interface Produto{
    titulo: string,
    descricao: string,
    preco: number,
    imagem: string,
    produtoID: number,
    //criando uma props que recebe uma função
    onDelete: (produtoId: number) => void
}

const Card_Produto = ({titulo, descricao, preco, imagem, produtoID, onDelete } : Produto) => {
    return(
        <>
            <article id={styles.card}>
                <Link href={"/detalhe-produto/" + produtoID} id={styles.imagemCard}>
                    <img src={imagem} alt="" />
                </Link>
                <p id={styles.tituloCard}>{titulo}</p>
                <div id={styles.descricao}>
                    <p>{descricao}</p>
                </div>
                <div id={styles.icones}>
                    <p id={styles.preco}>{formatarPreco(preco)}</p>
                    <Link href={"/historico/" + produtoID} className={styles.botoesLink}><FontAwesomeIcon icon={faCircleInfo} /></Link>
                    <Link href={"/produto?id=" + produtoID} className={styles.botoesLink}><FontAwesomeIcon icon={faPenToSquare} /></Link>
                    <button onClick={() => onDelete(produtoID)}><FontAwesomeIcon icon={faTrashCan} /></button>
                </div>
            </article>
        </>
    )
}

export default Card_Produto