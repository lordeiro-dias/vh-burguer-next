import Card_Produto from '../card-produto/card_produto'
import styles from './lista_produto.module.css'
import Link from 'next/link'

const Lista_Produto = () => {
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
                        <li><Card_Produto/></li>
                        <li><Card_Produto/></li>
                        <li><Card_Produto/></li>
                        <li><Card_Produto/></li>
                        <li><Card_Produto/></li>
                        <li><Card_Produto/></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Lista_Produto