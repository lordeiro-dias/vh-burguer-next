import styles from './data-row.module.css'

const DataRow = () => {
    return(
        <>
            <tr id={styles.linhaTabela}>
                <td>12/12/12</td>
                <td>Monstro</td>
                <td>R$55,55</td>
            </tr>
        </>
    )
}

export default DataRow