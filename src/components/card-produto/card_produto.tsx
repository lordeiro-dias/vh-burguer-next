import styles from './card_produto.module.css'

const Card_Produto = () => {
    return(
        <>
            <div id={styles.card}>
                <img src="/imgs/HamburguerAlcatraComBacon.png" alt="" />
                <p id={styles.tituloCard}>Monster</p>
                <div id={styles.descricao}>
                    <p>Hambúrguer brutal, suculento e exageradamente saboroso.</p>
                </div>
                <p id={styles.preco}>R$ 35,00</p>
            </div>
        </>
    )
}

export default Card_Produto