import { api } from "./api";

export async function listarPorIdDoProduto(produtoID : number){
    try{
        const response = await api.get("LogProduto/produto/" + produtoID);
        return response.data;
    }
    catch(error: any){
        throw new Error(error.response.data);
    }
}