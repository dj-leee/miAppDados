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
document.getElementById("dado6").addEventListener("click", () => {
    const dado6 = new DadoBasico("standard", "plastico", true);
    const resultado = dado6.tirar();
    

    // DOM, crear el dado que es un div, con 
    const divDado6 = document.createElement("div");
    divDado6.classList.add("dado6")
    document.querySelector("main").appendChild(divDado6);
    

    // Crear el h1 del numero
    const numeroDado6 = document.createElement("h1");
    numeroDado6.textContent = resultado;
    numeroDado6.style.color = dado6.colorLetra;
    numeroDado6.style.fontSize = "48px"
    divDado6.appendChild(numeroDado6);

});

document.getElementById("botonTirar").addEventListener("click", function(){
    const dados = document.querySelectorAll("h1");
    dados.forEach(function(h1DelDado){
        h1DelDado.textContent = Math.floor(Math.random() * 6) + 1;
    })
    
})

// Si hago un clic encima de un dado y un dado es un div, ese div se elimina
document.querySelector("main").addEventListener("click", function(evento){
    // Busca el contenedor del dado más cercano (el div con clase dado6, dado4, dado8 o dado10)
    const dado = evento.target.closest(".dado6");
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