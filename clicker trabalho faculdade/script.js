let pontuacao = 0;
let pontuacaoRedonda = 0;
let jantar = 1;
let joias = 1;
let buque = 1;
let maquiagem = 1;
let viajar = 1;
let valorJantar = 20;
let valorJoia = 100;
let valorBuque = 300;
let valorMaquiagem = 1000;
let valorViajar = 2500;
let tempo = 6250;
let cartaoVar = 0;
let valorCartao = 50;
let compraAutom = false;

document.getElementById('compraAutomatica').style.backgroundColor = 'red';
document.getElementById('pontuacao').innerText = ('R$ ' + pontuacao);
document.getElementById('precoCartao').innerText = ('R$ ' + valorCartao);
document.getElementById('precoJantar').innerText = ('R$ ' + valorJantar);
document.getElementById('precoJoias').innerText = ('R$ ' + valorJoia);
document.getElementById('precoBuque').innerText = ('R$ ' + valorBuque);
document.getElementById('precoMaquiagem').innerText = ('R$ ' + valorMaquiagem);
document.getElementById('precoViajar').innerText = ('R$ ' + valorViajar);

function clicker() {
    pontuacao += (1 * jantar * joias * buque * maquiagem * viajar);
    pontuacaoRedonda = pontuacao.toFixed(2);
    document.getElementById('pontuacao').innerText = ('R$ ' + pontuacaoRedonda);
}

function funcaoJantar() {
    if (pontuacaoRedonda >= valorJantar) {
        jantar += (0.1 * jantar);
        pontuacao = pontuacao - valorJantar;
        pontuacaoRedonda = pontuacao.toFixed(2);
        document.getElementById('pontuacao').innerText = ('R$ ' + pontuacaoRedonda);
        valorJantar += (valorJantar * 0.11);
        valorJantarRedondo = valorJantar.toFixed(2);
        document.getElementById('precoJantar').innerText = ('R$ ' + valorJantarRedondo);
    }
}

function funcaoJoias() {
    if (pontuacaoRedonda >= valorJoia) {
        joias += (0.3 * joias);
        pontuacao = pontuacao - valorJoia;
        pontuacaoRedonda = pontuacao.toFixed(2);
        document.getElementById('pontuacao').innerText = ('R$ ' + pontuacaoRedonda);
        valorJoia += (valorJoia * 0.33);
        valorJoiaRedondo = valorJoia.toFixed(2);
        document.getElementById('precoJoias').innerText = ('R$ ' + valorJoiaRedondo);
    }
}

function funcaoBuque() {
    if (pontuacaoRedonda >= valorBuque) {
        buque += (0.5 * buque);
        pontuacao = pontuacao - valorBuque;
        pontuacaoRedonda = pontuacao.toFixed(2);
        document.getElementById('pontuacao').innerText = ('R$ ' + pontuacaoRedonda);
        valorBuque += (valorBuque * 0.55);
        valorBuqueRedondo = valorBuque.toFixed(2);
        document.getElementById('precoBuque').innerText = ('R$ ' + valorBuqueRedondo);
    }
}

function funcaoMaquiagem() {
    if (pontuacaoRedonda >= valorMaquiagem) {
        maquiagem += (0.8 * maquiagem);
        pontuacao = pontuacao - valorMaquiagem;
        pontuacaoRedonda = pontuacao.toFixed(2);
        document.getElementById('pontuacao').innerText = ('R$ ' + pontuacaoRedonda);
        valorMaquiagem += (valorMaquiagem * 0.88);
        valorMaquiagemRedondo = valorMaquiagem.toFixed(2);
        document.getElementById('precoMaquiagem').innerText = ('R$ ' + valorMaquiagemRedondo);
    }
}

function funcaoViajar() {
    if (pontuacaoRedonda >= valorViajar) {
        viajar += (1.2 * viajar);
        pontuacao = pontuacao - valorViajar;
        pontuacaoRedonda = pontuacao.toFixed(2);
        document.getElementById('pontuacao').innerText = ('R$ ' + pontuacaoRedonda);
        valorViajar += (valorViajar * 1.32);
        valorViajarRedondo = valorViajar.toFixed(2);
        document.getElementById('precoViajar').innerText = ('R$ ' + valorViajarRedondo);
    }
}

function cartao() {
    if (pontuacao >= valorCartao) {
        cartaoVar = 1;
        tempo = tempo * 0.8;
        pontuacao = pontuacao - valorCartao;
        pontuacaoRedonda = pontuacao.toFixed(2);
        document.getElementById('pontuacao').innerText = ('R$ ' + pontuacaoRedonda);
        valorCartao = valorCartao * 1.5;
        valorCartaoRedondo = valorCartao.toFixed(2);
        document.getElementById('precoCartao').innerText = ('R$ ' + valorCartaoRedondo);
        if (cartaoVar === 1) {
            setInterval(() => {
                clicker();
            }, tempo);
        }
    }
}

function ligarCompraAutomatica() {
    if (compraAutom == false) {
        compraAutom = true;
        document.getElementById('compraAutomatica').style.backgroundColor = 'rgb(0, 255, 0)';
    } else {
        compraAutom = false;
        document.getElementById('compraAutomatica').style.backgroundColor = 'red';
    }
}

setInterval(() => {
    if (compraAutom === true) {
        if (pontuacao > valorJantar) {
            funcaoJantar();
        } else if (pontuacao > valorJoia) {
            funcaoJoias();
        } else if (pontuacao > valorBuque) {
            funcaoBuque();
        } else if (pontuacao > valorMaquiagem) {
            funcaoMaquiagem();
        } else if (pontuacao > valorViajar) {
            funcaoViajar();
        } else if (pontuacao > valorCartao) {
            cartao();
        }
    }
}, 1);

setInterval(() => {
    if (pontuacao < valorJantar) {
        document.getElementById('jantar').style.backgroundColor = 'rgb(0, 160, 0)';
    } else {
        document.getElementById('jantar').style.backgroundColor = 'rgb(0, 255, 0)';
    }
    if (pontuacao < valorJoia) {
        document.getElementById('joias').style.backgroundColor = 'rgb(0, 160, 0)';
    } else {
        document.getElementById('joias').style.backgroundColor = 'rgb(0, 255, 0)';
    }
    if (pontuacao < valorBuque) {
        document.getElementById('buque').style.backgroundColor = 'rgb(0, 160, 0)';
    } else {
        document.getElementById('buque').style.backgroundColor = 'rgb(0, 255, 0)';
    }
    if (pontuacao < valorMaquiagem) {
        document.getElementById('maquiagem').style.backgroundColor = 'rgb(0, 160, 0)';
    } else {
        document.getElementById('maquiagem').style.backgroundColor = 'rgb(0, 255, 0)';
    }
    if (pontuacao < valorViajar) {
        document.getElementById('viajar').style.backgroundColor = 'rgb(0, 160, 0)';
    } else {
        document.getElementById('viajar').style.backgroundColor = 'rgb(0, 255, 0)';
    }
    if (pontuacao < valorCartao) {
        document.getElementById('cartao').style.backgroundColor = 'rgb(0, 160, 0)';
    } else {
        document.getElementById('cartao').style.backgroundColor = 'rgb(0, 255, 0)';
    }
}, 1);


