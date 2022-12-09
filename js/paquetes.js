const ofertas = [
    { id: 1, producto: "vuelo", destino:"Ushuaia",  precio: 12500 },
    { id: 2, producto: "vuelo", destino:"Tucuman",precio: 9000 },
    { id: 3, producto: "vuelo", destino:"Bariloche", precio: 23000 },
    { id: 4, producto: "vuelo", destino:"Chapelco",precio: 17000 },
    { id: 5, producto: "hotel", destino:"Mar del Plata",precio: 6500 },
    { id: 6, producto: "hotel", destino:"Las grutas",precio: 5000 },
    { id: 7, producto: "hotel", destino:"Mendoza",precio: 11500 },
    { id: 8, producto: "paquete", destino:"Sudamerica",precio: 150000 },
    { id: 9, producto: "crucero", destino:"Caribe",precio: 89000 },
    { id: 10, producto: "auto", destino:"Miami",precio: 2500 },
  ];
  
  const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);
  };
  
  for (const producto of ofertas) {
    guardarLocal(producto.id, JSON.stringify(producto));
  }
  
  guardarLocal("listaProductos", JSON.stringify(ofertas));
  
  
  const almacenados = JSON.parse(localStorage.getItem("listaProductos"));

  console.log (almacenados);
  
  const paquetes = [
    {
        id: 1,
        name: "Ushuaia",
        img:"../images/Ushuaia.jpg",
        text:"La ciudad más austral del mundo",
        precio: 25000,
        
    },
    {
        id: 2,
        name: "Iguazu",
        img:"../images/Iguazu.jpg",
        text:"Una de las 7 maravillas del mundo",
        precio: 22000,
      
    },
    {
        id: 3,
        name: "Jujuy",
        img:"../images/Jujuy.jpg",
        text:"Es el punto de acceso al corazón indigena de Argentina",
        precio: 17000,

    },
    {
        id: 4,
        name: "Bariloche",
        img:"../images/Bariloche.jpeg",
        text:"......",
        precio: 27000,

    },
    {
        id: 5,
        name: "Puerto Madryn",
        img:"../images/Puerto-madryn.jpg",
        text:"......",
        precio: 25000,

    },
    {
        id: 5,
        name: "San Martin de los Andes",
        img:"../images/SanMartin.jpg",
        text:"......",
        precio: 31000,

    },
];

const contenedorPaquetes = document.querySelector(".contenedor-paquetes");

const resultado = document.querySelector(".resultados");

const elegidos = [];

document.addEventListener("DOMContentLoaded", () => {
    mostrarOpciones();
});

function mostrarOpciones() {
    for (const item of paquetes) {
        const divPaquetes = document.createElement("div");
        divPaquetes.classList.add("card");
        
        const tituloDestino = document.createElement("h2");
        tituloDestino.classList.add("titulo-destino");
        tituloDestino.textContent = item.name;

        const imgDestino = document.createElement("img");
        imgDestino.classList.add("img-destino");
        imgDestino.src = item.img;
       
        const btnInfo = document.createElement("button");
        btnInfo.classList.add("btn-info");
        btnInfo.textContent = "Saber costo";
        btnInfo.onclick = ()=>{
            mostrarPrecio (item.precio);
        }; 
            
        
        const textInfo = document.createElement("p");
        textInfo.classList.add("info");
        textInfo.textContent = "**Aprovecha el beneficio de PreViaje para conocer este destino**";
        
        divPaquetes.appendChild(tituloDestino);
        divPaquetes.appendChild(imgDestino);
        divPaquetes.appendChild(textInfo);
        divPaquetes.appendChild(btnInfo);

        
        contenedorPaquetes.appendChild(divPaquetes);

    };
};

function mostrarPrecio (precio){

    resultado.innerHTML = "";
    const destinoElegido = document.createElement("p");
    destinoElegido.textContent = ("El precio por persona en base doble es: $" + precio);
    destinoElegido.classList.add("detalle")
    elegidos.push(destinoElegido);

    const btnInfoPlus = document.createElement("button");
        btnInfoPlus.classList.add("btn-info");
        btnInfoPlus.textContent = "Ir al cotizador";
        elegidos.push(btnInfoPlus);
        btnInfoPlus.onclick = ()=>{
        }; 


    resultado.appendChild(destinoElegido);
    resultado.appendChild(btnInfoPlus);


    

};