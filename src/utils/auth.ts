import secureLocalStorage from "react-secure-storage";

export function verificarAutenticacao(){
    const token = secureLocalStorage.getItem("Token");

    //transforma o token em boolean, e se existir informação dentro do token, retorna true.
    return !!token;
}