import { formatarPreco } from '@/utils/formatacao'
import styles from './data-row.module.css'

type Dados = {
    dataAlteracao: string,
    nomeAnterior: string,
    precoAnterior: number
}

const DataRow = ({dataAlteracao, nomeAnterior, precoAnterior} : Dados) => {
    return(
        <>
            <tr id={styles.linhaTabela}>
                <td>{dataAlteracao}</td>
                <td>{nomeAnterior}</td>
                <td>{formatarPreco(precoAnterior)}</td>
            </tr>
        </>
    )
}

export default DataRow