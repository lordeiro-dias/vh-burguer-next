import Sub_Header from '@/components/sub-header/sub_header'
import styles from './produto.module.css'
import Footer from '@/components/footer/footer'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { listarCategoria } from '../api/categoriaService'
import { cadastrarProduto, editarProduto, listarPorId } from '../api/produtoService'
import { erro, notificacao } from '@/utils/toast'
import Toast from '@/components/toast/toast'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'

interface Categoria {
    categoriaID: number,
    nome: string
}

const Produto = () =>{

    const[categorias, setCategorias] = useState<Categoria[]>([]);

    const[nome, setNome] = useState<string>("");
    const[descricao, setDescricao] = useState<string>("");
    const[preco, setPreco] = useState<string>("");
    const[imagem, setImagem] = useState<File | null>(null);
    const[categoriaSelecionada, setCategoriaSelecionada] = useState<number[]>([]);
    //const[telaEditar, setTelaEditar] = useState<Boolean>();

    const router = useRouter();
    const id = router.query.id;

    // if(id){
    //     setTelaEditar(true);
    // }

    let telaEditar = id ? true : false;

    async function listarCategoriaEmProduto(){
        const lista = await listarCategoria();
        setCategorias(lista.data);

        console.log(lista.data);
    }

    async function carregarInformacoes(){
        if(!id) return;

        const produto = await listarPorId(Number(id));
        setNome(produto.nome);
        setDescricao(produto.descricao);
        setPreco(produto.preco);
        setCategoriaSelecionada(produto.categoriaIds);

    }

    async function SalvarProduto(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            const dados = {
                nome,
                descricao,
                preco,
                imagem,
                categoriasId: categoriaSelecionada
            }

            
            if(telaEditar){
                await editarProduto(Number(id), dados);
                notificacao("Produto editado!");
            }
            else{
                await cadastrarProduto(dados);
                notificacao("Produto cadastrado!");
            }

        }
        catch(error: any){
            erro(error.message);
        }
    }

    // quando produto for renderizado, a função listarCategoriaEmProduto acontece
    useEffect(() =>{
        listarCategoriaEmProduto();
        carregarInformacoes();
    }, [])

    return(
        <>
            <Toast/>
            <Sub_Header/>
                <main id={styles.main}>
                    <h1>{telaEditar ? "EDITAR PRODUTO" : "CRIAR PRODUTO"}</h1>

                    <form action="" id={styles.formulario} onSubmit={SalvarProduto}>
                        <div className={styles.campo_formulario}>
                            <label htmlFor="">Nome do Produto</label>
                            <input type="text" placeholder='BBQ Especial' value={nome} onChange={(e) => setNome(e.target.value)}/>
                        </div>
                        <div className={styles.campo_formulario}>
                            <label htmlFor="">Descrição</label>
                            <textarea name="" placeholder='Hambúrguer com molho barbecue defumado com cebola caramelizada.' id={styles.descricao}
                             value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
                        </div>
                        <div className={styles.campo_formulario}>
                            <label htmlFor="">Preço (R$)</label>
                            <input type="text" placeholder='40,00' value={preco} onChange={(e) => setPreco(e.target.value)}/>
                        </div>
                        <div className={styles.campo_formulario}>
                            <label htmlFor="">Categoria</label>
                            <select multiple value={categoriaSelecionada.map(String)} onChange={(e) => setCategoriaSelecionada(
                                Array.from(e.target.selectedOptions).map((option) => Number(option.value))
                            )}>                                
                                {categorias.map((item) => (
                                    <option value={item.categoriaID} key={item.categoriaID}>{item.nome}</option>
                                ))}
                            </select>
                            <div id={styles.alinharCategoria}>
                                <Link href="/categoria" id={styles.textCategoria}>Adicionar categoria</Link>
                            </div>
                        </div>
                        <div className={styles.campo_formulario}>
                            <label htmlFor="">Imagem do Produto</label>
                            <input type="file" onChange={(e) =>{
                                if(e.target.files && e.target.files[0])
                                {
                                    setImagem(e.target.files[0]);
                                }
                            }}/>
                        </div>
                        <div id={styles.campo_botoes}>
                            <button id={styles.botaoPromocao} type='submit'>Adicionar Promoção</button>
                            <button id={styles.botaoSalvar}>Salvar</button>
                        </div>
                    </form>
                </main>
            <Footer/>
        </>
    )
}

export default Produto