import Footer from "@/components/footer/footer"
import Sub_Header from "@/components/sub-header/sub_header"
import styles from './historico.module.css'
import DataRow from "@/components/data-row/data-row"

const Historico = () => {
    return(
        <>
            <Sub_Header/>
            <main id={styles.main}>
                <h1>Histórico de alterações: Monstro</h1>
                <div id={styles.alinharTabela}>
                    <table id={styles.tabela}>
                        <thead>
                            <tr>
                                <th>Data da Alteração</th>
                                <th>Nome anterior</th>
                                <th>Preço Anterior</th>
                            </tr>
                            <div id={styles.linhaPersonalizada}><hr /></div>
                        </thead>
                        <tbody id={styles.separarLinhas}>
                            <DataRow/>
                            <DataRow/>
                            <DataRow/>
                            <DataRow/>
                            <DataRow/>
                            <DataRow/>
                            <DataRow/>
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Historico