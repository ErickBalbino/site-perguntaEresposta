//Verificar questão 1
function verificarQuestao01() {
    //Variaveis
    var resposta = window.document.getElementsByName('alt1')  // Pegar resposta do usuário
    var resultado = window.document.getElementById('resposta1') // Substituir pelo resultado

    //Verificar as respostas
    if(resposta[0].checked){
        resultado.innerHTML = `A sua resposta está correta!`
        resultado.style.color = '#0f0'
    }else{
        if(resposta[1].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
            resultado.style.color = "#f00"
        }
        if(resposta[2].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
            resultado.style.color = '#f00'
        }
        if(resposta[3].checked){
            resultado.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
            resultado.style.color = 'f00'
        }
    }
}

//Verificar questão 2
function verificarQuestao02() {
    var resposta = window.document.getElementsByName('alt2')  //verificar resposta do usuario
    var resultado = window.getElementById('resposta2')  //substituir pelo resultado

    if(resposta[0].checked){
        resposta.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
        resultado.style.color = '#f00'
    }else{
        if(resposta[1].checked){
            resposta.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
            resultado.style.color = '#f00'
        }
        if(resposta[2].checked){
            resposta.innerHTML = `A sua resposta está correta!`
            resposta.style.color = '#0f0'
        }
        if(resposta[3].checked){
            resposta.innerHTML = `A sua resposta está incorreta! Mas não desanime.`
            resposta.style.color = '#f00'
        }
    }
} 