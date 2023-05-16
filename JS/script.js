function validarFormulario(){
    let nome = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let assunto = document.querySelector("#assunto").value;
    let descricao = document.querySelector("#descricao").value;
    console.log(nome);
    console.log(email);
    console.log(assunto);
    console.log(descricao);
    
    let mensagem = "";

    if (nome === "")
        mensagem = "Nome;";
    
    if (email === "")
        mensagem += "\nE-mail;";

    if (mensagem !== ""){   
        mensagem = "Os dados abaixo são obrigatórios:\n" + mensagem;                
        alert(mensagem);                
        return false;
    }
    return true;
}