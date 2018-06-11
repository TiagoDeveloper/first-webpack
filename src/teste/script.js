function addElementsDados(teste){
    let dados = document.getElementById("dados");
    let liElement = document.createElement("li");
    let text = document.createTextNode("tESTE TESTADO");

    liElement.id = teste;
    liElement.className = "list-group-item";
    liElement.appendChild(text);

    let button = document.createElement("button")
    button.appendChild(document.createTextNode("Adicionar"));

    liElement.appendChild(button);

    button.id = 'botao'+teste;

    
    
    dados.appendChild(liElement);
    
    let bot = document.getElementById('botao'+teste);

    bot.onclick = function(){
        selecionados(teste);
    };

}

function selecionados(teste){
    let ele = document.getElementById(teste);
    let parent = document.getElementById("selecionados");
    parent.appendChild(ele);
    
}