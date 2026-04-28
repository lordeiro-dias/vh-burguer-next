import { api } from "./api"
import secureLocalStorage from "react-secure-storage";

export async function login(email: string, senha: string){
    try{
        //requisição
        const response = await api.post("Autenticacao/login", {email, senha});

        // console.log("eba deu certo slc só sucesso pa nois");
        // console.log(response.data.token);

        const token = response.data.token;

        //localStorage.setItem("tokenzinho", token);
        secureLocalStorage.setItem("tokenzinho2", token);
    }
    catch(error: any){
        throw new Error("Email ou senha inválidos"); 
    }
}