import Footer from "@/components/footer/footer"
import Sub_Header from "@/components/sub-header/sub_header"
import styles from './historico.module.css'
import DataRow from "@/components/data-row/data-row"
import { useEffect, useState } from "react"
import { erro } from "@/utils/toast"
import { listarPorIdDoProduto } from "@/pages/api/logProdutoService"
import { useParams } from "next/navigation"

type HistoricoAlteracao = {
    logID: number,
    dataAlteracao: string,
    nomeAnterior: string,
    precoAnterior: number
}

const Historico = () => {

    const[historico, setHistorico] = useState<HistoricoAlteracao[] | null>(null);

    const params = useParams();
    const id = params?.id;

    async function listarHistorico(){
        try{
            const lista = await listarPorIdDoProduto(Number(id));
            
            setHistorico(lista);
        }
        catch(error : any){
            erro(error.message);
        }
    }

    useEffect(() =>{
        if(!id) return;

        setTimeout(() =>{
            listarHistorico();
        }, 1000);
    }, [id])

    return(
        <>
            <Sub_Header/>
            <main id={styles.main}>
                <h1>Histórico de alterações: Monstro</h1>
                {historico === null ?(
                    <p>Carregando histórico...</p>
                ) : historico.length === 0 ? (
                    <p>O produto não contém histórico de alterações</p>
                ) : (
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
                                {historico.map((item) => (
                                    <DataRow
                                        key={item.logID}
                                        dataAlteracao={item.dataAlteracao}
                                        nomeAnterior={item.nomeAnterior}
                                        precoAnterior={item.precoAnterior}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </main>
            <Footer/>
        </>
    )
}

export default Historico