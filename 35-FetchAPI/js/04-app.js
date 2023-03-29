// Consultar e imprimir los resultados de una API
const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){

    const url = 'https://picsum.photos/list';

    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( resultado => imprimirJSONHTML(resultado))
}

function imprimirJSONHTML(datos){

    const contenido = document.querySelector('.contenido');

    let html = '';
    let i = 0;

    datos.forEach( perfil => {
        
        if(i <= 10 ){

            const {author, post_url, filename} = perfil;
    
            html += `
                <p> Autor: ${author} </p>
                <a href="${post_url}" target="_blank"> Ver Imagen </a>
                <img src= "${filename}" />
            `;

            i++;
        }


    });

    contenido.innerHTML = html;
}