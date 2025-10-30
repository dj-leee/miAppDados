// Construir clase Dado de 6 caras
// Crear Herencia para los otros dados, 4, 6, 8, 10, caras
class DadoBasico {
    constructor(tamano = "básico", material, cantosRedondeados = true) {
        this.caras = 6;
        this.tamano = tamano;
        this.material = material;
        this.color = "blanco";
        this.cantos = cantosRedondeados;
        this.colorLetra = "negro";
    }
    // Metodo tirar el dado
    tirar() {
        return Math.floor(Math.random() * this.caras) + 1
    }
}

// Clase Herencia para el dado de 4 caras
class Dado4caras extends DadoBasico{
    constructor(tamano, material, cantosRedondeados){
        super(tamano, material, cantosRedondeados);
        this.caras = 4;
        this.color = "rojo";
        this.colorLetra = "blanco";
        

    }
}

// Clase Herencia para el dado de 8 caras
class Dado8caras extends DadoBasico{
    constructor(tamano, material, cantosRedondeados){
        super(tamano, material, cantosRedondeados);
        this.caras = 8;
        this.color = "verde";
        this.colorLetra = "negro";
    }
}

// Clase Herencia para el dado de 10 caras
class Dado10caras extends DadoBasico{
    constructor(tamano, material, cantosRedondeados){
        super(tamano, material, cantosRedondeados);
        this.caras = 10;
        this.color = "negro";
        this.colorLetra = "blanco";
    }
}

console.log(new DadoBasico());
console.log(new Dado4caras());
console.log(new Dado8caras());
console.log(new Dado10caras());

// Logica para crear un dado y tirarlo

// Crear la nueva instancia del dado y tirarlo, cuando pulsamos la imagen del dado elegido


document.getElementById("dado4").addEventListener("click", () => {
    const dado4 = new Dado4caras("standard", "plastico", true);
    const resultado = dado4.tirar();
    
    
    // DOM, crear el dado que es un div, con 
    const divDado4 = document.createElement("div");
    divDado4.classList.add("dadosDiv")
    divDado4.classList.add("dado4")
    document.querySelector("main").appendChild(divDado4);
    
    
    // Crear el h1 del numero
    const numeroDado4 = document.createElement("h1");
    numeroDado4.textContent = resultado;
    numeroDado4.style.color = dado4.colorLetra;
    numeroDado4.style.fontSize = "48px"
    divDado4.appendChild(numeroDado4);
    
});
document.getElementById("dado6").addEventListener("click", () => {
    const dado6 = new DadoBasico("standard", "plastico", true);
    const resultado = dado6.tirar();
    

    // DOM, crear el dado que es un div, con 
    const divDado6 = document.createElement("div");
    divDado6.classList.add("dadosDiv")
    divDado6.classList.add("dadoBasico")
    document.querySelector("main").appendChild(divDado6);
    

    // Crear el h1 del numero
    const numeroDado6 = document.createElement("h1");
    numeroDado6.textContent = resultado;
    numeroDado6.style.color = dado6.colorLetra;
    numeroDado6.style.fontSize = "48px"
    divDado6.appendChild(numeroDado6);

});
document.getElementById("dado8").addEventListener("click", () => {
    const dado8 = new Dado8caras("standard", "plastico", true);
    const resultado = dado8.tirar();
    // DOM, crear el dado que es un div, con 
    const divDado8 = document.createElement("div");
    divDado8.classList.add("dadosDiv")
    divDado8.classList.add("dado8")
    document.querySelector("main").appendChild(divDado8);
    

    // Crear el h1 del numero
    const numeroDado8 = document.createElement("h1");
    numeroDado8.textContent = resultado;
    numeroDado8.style.color = dado8.colorLetra;
    numeroDado8.style.fontSize = "48px"
    divDado8.appendChild(numeroDado8);
});
document.getElementById("dado10").addEventListener("click", () => {
    const dado10 = new Dado10caras("standard", "plastico", true);
    const resultado = dado10.tirar();
    

    // DOM, crear el dado que es un div, con 
    const divDado10 = document.createElement("div");
    divDado10.classList.add("dadosDiv")
    divDado10.classList.add("dado10")
    document.querySelector("main").appendChild(divDado10);
    

    // Crear el h1 del numero
    const numeroDado10 = document.createElement("h1");
    numeroDado10.textContent = resultado;
    numeroDado10.style.color = dado10.colorLetra;
    numeroDado10.style.fontSize = "48px"
    divDado10.appendChild(numeroDado10);
});

document.getElementById("botonTirar").addEventListener("click", function(){
    // Obtener todos los dados
    const dados = document.querySelectorAll(".dadosDiv h1");
    
    // Para cada dado, determinar su tipo y tirar
    dados.forEach(dado => {
        const contenedorDado = dado.parentElement;
        let resultado;
        
        if (contenedorDado.classList.contains("dado4")) {
            resultado = new Dado4caras().tirar();
        } else if (contenedorDado.classList.contains("dadoBasico")) {
            resultado = new DadoBasico().tirar();
        } else if (contenedorDado.classList.contains("dado8")) {
            resultado = new Dado8caras().tirar();
        } else if (contenedorDado.classList.contains("dado10")) {
            resultado = new Dado10caras().tirar();
        }
        
        dado.textContent = resultado;
    });
});

// Eliminar o comentar el código del final que hace referencia a zonaDado
// zonaDado.addEventListener("click", function (event) { ... });

// Si hago un clic encima de un dado y un dado es un div, ese div se elimina
document.querySelector("main").addEventListener("click", function(evento){
    // Busca el contenedor del dado más cercano (el div con clase dado6, dado4, dado8 o dado10)
    const dado = evento.target.closest(".dadosDiv");
    if (dado && this.contains(dado)) {
        dado.remove();
    }
});

// SOLO tirar los dados que hay creados, tener un boton o un mecanismo




// Botón para tirar el dado
zonaDado.addEventListener("click", function (event) {
    // tirarDado();
    event.preventDefault();
    const resultado = dado.tirar();
    zonaDado.children[0].textContent = resultado;
    zonaDado.style.transform = "rotate(" + Math.floor(Math.random() * 90) + "deg)";
});