import styles from './card_produto.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faPenToSquare, faSliders, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Card_Produto = () => {
    return(
        <>
            <article id={styles.card}>
                <img src="/imgs/HamburguerAlcatraComBacon.png" alt="" />
                <p id={styles.tituloCard}>Monster</p>
                <div id={styles.descricao}>
                    <p>Hambúrguer brutal, suculento e exageradamente saboroso.</p>
                </div>
                <div id={styles.icones}>
                    <p id={styles.preco}>R$ 35,00</p>
                    <button><FontAwesomeIcon icon={faCircleInfo} /></button>
                    <button><FontAwesomeIcon icon={faPenToSquare} /></button>
                    <button><FontAwesomeIcon icon={faTrashCan} /></button>
                </div>
            </article>
        </>
    )
}

export default Card_Produto