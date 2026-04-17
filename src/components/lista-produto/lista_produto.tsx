import Card_Produto from '../card-produto/card_produto'
import styles from './lista_produto.module.css'

const Lista_Produto = () => {
    return(
        <>
            <div className={`${styles.container}`}>
                <button>Filtrar</button>

                <ul id={styles.listagem}>
                    <li><Card_Produto/></li>
                    <li><Card_Produto/></li>
                    <li><Card_Produto/></li>
                    <li><Card_Produto/></li>
                    <li><Card_Produto/></li>
                    <li><Card_Produto/></li>
                </ul>
            </div>
        </>
    )
}

export default Lista_Produto