import Sub_Header from '@/components/sub-header/sub_header'
import styles from './produto.module.css'
import Footer from '@/components/footer/footer'
import Link from 'next/link'

const Produto = () =>{
    return(
        <>
            <Sub_Header/>
                <main id={styles.main}>
                    <h1>CRIAR PRODUTO</h1>

                    <form action="" id={styles.formulario}>
                        <div className={styles.campo_formulario}>
                            <label htmlFor="">Nome do Produto</label>
                            <input type="text" placeholder='BBQ Especial'/>
                        </div>
                        <div className={styles.campo_formulario}>
                            <label htmlFor="">Descrição</label>
                            <textarea name="" placeholder='Hambúrguer com molho barbecue defumado com cebola caramelizada.' id={styles.descricao}></textarea>
                        </div>
                        <div className={styles.campo_formulario}>
                            <label htmlFor="">Preço (R$)</label>
                            <input type="number" placeholder='40,00'/>
                        </div>
                        <div className={styles.campo_formulario}>
                            <label htmlFor="">Categoria</label>
                            <select name="" id="">
                                <option value="" disabled selected>Selecione a categoria</option>
                                <option value="" id={styles.blablabla}>um</option>
                                <option value="">dois</option>
                                <option value="">três</option>
                            </select>
                            <div id={styles.alinharCategoria}>
                                <Link href="/categoria" id={styles.textCategoria}>Adicionar categoria</Link>
                            </div>
                        </div>
                        <div className={styles.campo_formulario}>
                            <label htmlFor="">URL da imagem</label>
                            <input type="url" placeholder='https://urldasuaimagemaqui/url/urlurl-url.com'/>
                        </div>
                        <div id={styles.campo_botoes}>
                            <button id={styles.botaoPromocao}>Adicionar Promoção</button>
                            <button id={styles.botaoSalvar}>Salvar</button>
                        </div>
                    </form>
                </main>
            <Footer/>
        </>
    )
}

export default Produto