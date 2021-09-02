// Capturar evento de submit do formeulário

const form = document.querySelector('.form')

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const grauImc = getGrauImc(imc);

    const msg = `Seu IMC é ${imc} (${grauImc}).`

    setResultado(msg, true)
});

function getGrauImc(imc) {
    const grau = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
    if (imc >= 39.9) {
        return grau[5]
    }

    if (imc >= 34.9) {
        return grau[4]
    }

    if (imc >= 29.9) {
        return grau[3]
    }

    if (imc >= 24.9) {
        return grau[2]
    }

    if (imc >= 18.5) {
        return grau[1]
    }

    if (imc < 18.5) {
        return grau[0]
    }
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}


function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ``;

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad')
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}