import { api } from "./api"

export async function cadastrarCategoria(nome: string){
    try{
        await api.post("Categoria", {nome});
        // console.log("categoria P O N T O");
    }
    catch(error: any){
        throw new Error(error.response.data);
    }
}

export async function listarCategoria(){
    try{
        const response = await api.get("Categoria");
        return response;
    }
    catch(error: any){
        throw new Error(error.response.data);
    }
}