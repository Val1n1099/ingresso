function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if (tipo.value == 'pista'){
        comprarPista(qtd);
    } else if (tipo.value == 'inferior') {
        comprarInferior(qtd);
    } else {
        comprarSuperiro(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if (qtd > qtdPista){
        alert ('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert ('Compra realizada com sucesso');
    }
}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (qtd > qtdInferior){
        alert ('Quantidade indisponível para tipo inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert ('Compra realizada com sucesso');
    }
}

function comprarSuperiro(qtd){
    let qtdSuperiror = parseInt(document.getElementById('qtd-superior').textContent);

    if (qtd > qtdSuperiror){
        alert ('Quantidade indisponível para tipo superiro');
    } else {
        qtdSuperiror = qtdSuperiror - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperiror;
        alert ('Compra realizada com sucesso');
    }
}