import Footer from '@/components/footer/footer'
import styles from './detalhe_produto.module.css'
import Sub_Header from '@/components/sub-header/sub_header'

const Detalhe_Produto = () => {
    return(
        <>
            <Sub_Header/>
                <main id={styles.main}>
                    <div id={styles.cardDetalhe}>
                        <div id={styles.centralizarImg}>
                            <h1>DETALHES DO X-BACON</h1>
                            <img src="/imgs/HamburguerAlcatraComBacon.png" alt="Hambúrguer de Alcatra com bacon em cima de uma tábua de madeira"/>
                        </div>

                        <div id={styles.detalhes}>
                            <div id={styles.esquerda}>
                                <div>
                                    <p className={styles.titulo}>Nome do Produto</p>
                                    <p className={styles.textos}>Monstro</p>
                                </div>
                                <div id={styles.descricao}>
                                    <p className={styles.titulo}>Descrição</p>
                                    <p className={styles.textos}>Um pão brioche macio segura a fera: duas (ou três) carnes altas e suculentas, queijo cheddar derretido escorrendo pelas laterais, bacon crocante, cebola caramelizada no ponto adocicado, alface fresca, tomate e um molho especial intenso que amarra tudo. Para completar o ataque, uma camada extra de onion rings ou molho defumado que transforma cada mordida numa explosão.</p>
                                </div>
                            </div>

                            <div id={styles.direita}>
                                <div>
                                    <p className={styles.titulo}>Preço (R$)</p>
                                    <div id={styles.alinhaTexto}>
                                        <p className={styles.textos} id={styles.riscado}>R$45,00</p>
                                        <p className={styles.textos}>R$35,00</p>
                                    </div>
                                </div>
                                <div>
                                    <p className={styles.titulo}>Categoria</p>
                                    <ul className={styles.textos} id={styles.lista}>
                                        <li>Premium</li>
                                        <li>Artesanal</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>
            <Footer/>
        </>
    )
}

export default Detalhe_Produto