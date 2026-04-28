import { api } from "./api"

export async function cadastrarCategoria(nome: string){
    try{
        await api.post("Categoria", {nome});
        console.log("categoria P O N T O");
    }
    catch(error: any){
        throw new Error("Erro ao cadastrar categoria");
    }
}