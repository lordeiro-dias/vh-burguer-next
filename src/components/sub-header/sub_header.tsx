import styles from './sub_header.module.css'
import Link from 'next/link'

const Sub_Header = () => {
    return(
        <>
            <header id={styles.header}>
                <div className={`${styles.container} layout_guide`}>
                    <img src="../imgs/Logo_footer.svg" alt="Logo do VH Burguer que contém como plano de fundo um hambúrguer" id={styles.logo}/>
                    <Link href="/home#cardapio" id={styles.voltar}>Voltar</Link>
                </div>
            </header>
        </>
    )
}

export default Sub_Header