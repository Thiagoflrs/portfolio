//SCRIPT DESTINADO PARA O HEADER DA PÁGINA PRINPAL
window.addEventListener("scroll", function () { //Janela/fofoqueiro-HEADER
    let header = document.querySelector('nav') //variável
    header.classList.toggle('scroll', window.scrollY > 100) //Add classe que não existe
})

//SCRIPT DESTINADO PARA OS LINKS DO MENU
const itensnav = document.querySelectorAll('nav a') //Seleciona elemetos

itensnav.forEach(item => {
    item.addEventListener('click', scrollclick) //CLick
})

function getScrollTopByHref(element) { //Procura e retorna em relacao ao topo
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop
}

function scrollclick(event) {
    event.preventDefault() //Tira o scroll padrão
    const secao = getScrollTopByHref(event.target) -60 //Local que desejo que pare
    scrollposicao(secao) //Chame e aplica na var
}
    
function scrollposicao(secao) {
    window.scroll({
        top: secao, //Posição que deve ficar
        behavior:'smooth', //Rolagem suave
    })
}

//SCRIPT DESTINADO PARA O H2 DA PÁGINA PRINCIPAL
const el = document.querySelector('.digitando') // Elemento onde será inserido o texto
const text = "DESENVOLVEDOR FULLSTACK" // Texto a ser digitado
const interval = 70 // Intervalo por letra

function showtext(el, text, interval) {
    let armazenar = '' //Armazenar o texto atual
    const char = text.split("").reverse() // Um por um, reverse...

    const digitador = setInterval(() => {
        if (char.length === 0) { // Verifica há mais caracteres para adicionar
            clearInterval(digitador) // Stop
            setTimeout(() => {
                borracha(el, armazenar, interval) // Chama a função para apagar
            }, 3000) // Tempo de espera para recomeçar
            return
        }

        const next = char.pop(); // Próximo caractere
        armazenar += next; // Próximo caractere ao texto atual
        el.innerHTML = armazenar; // Atualizar o Html com o texto atual
    }, interval);
}

function borracha(el, text, interval) {
    const char = text.split(""); //
    const apagador = setInterval(() => {
        if (char.length === 0) { // Verifica se há algo para apagar
            clearInterval(apagador)
            setTimeout(() => {
                showtext(el, text, interval)
            }, 3000)
            return
        }

        char.pop() // Remover o último caractere
        el.innerHTML = char.join("") // Atualiza com o texto restante
    }, interval)
}

// Chamada inicial para mostrar o texto
showtext(el, text, interval);

//SCRIPT DESTINADO PARA O CONTÉUDO PRINCIPAL DA PÁGINA SOBRE
const main = document.querySelector('.main') //Main página sobre

const view = new IntersectionObserver((main) => {
    main.forEach((entry) => {
        if (entry.isIntersecting) { //Se verdadeira aplique class showman
            entry.target.classList.add('showman');
        } else { //Se falso remova class showman
            entry.target.classList.remove('showman');
        }
    })
})

view.observe(main) //Observar o main

//SCRIPT DESTINADO PARA OS CARDS DA PÁGINA EXPERIÊNCIA
const myObserver = new IntersectionObserver((entrada) => { //Cards página experiência
    entrada.forEach((entry) => {
        if (entry.isIntersecting) { //Se verdadeira aplique class show
            entry.target.classList.add('show');
        } else { //Se falso remova class show
            entry.target.classList.remove('show');
        }
    })
})

const elements = document.querySelectorAll('.card') //Pegar todos os elementos

elements.forEach((element) => myObserver.observe(element)) //Observar todos os elementos

//SCRIPT DESTINADO PARA O CONTEÚDO DE TEXTO DO FOOTER
const footer = document.querySelector('.text-footer') //JS Rodapé

const rodape = new IntersectionObserver((footer) => {
    footer.forEach((entry) => {
        if (entry.isIntersecting) { //Se verdadeira aplique class show
            entry.target.classList.add('showfoot');
        } else { //Se falso remova class show
            entry.target.classList.remove('showfoot');
        }
    })
})

rodape.observe(footer) //Observar o footer
