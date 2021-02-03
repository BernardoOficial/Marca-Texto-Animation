const elementsMarcaTexto = Array.from(document.querySelectorAll('.marca-texto'));

window.addEventListener('scroll', (evento) => {

    const scrolado = window.scrollY;
    // console.log(scrolado);
    const windowHeight = window.innerHeight;
    // console.log(windowHeight);
    
    const estaAparecendoEmTela = distanciaDoTopo => distanciaDoTopo < windowHeight;
    
    elementsMarcaTexto.forEach((element) => {
        const distanciaDoTopo = element.getBoundingClientRect().top;

        estaAparecendoEmTela(distanciaDoTopo)
            ? element.classList.add('marca-texto--ativo') 
            : element
    })
})

