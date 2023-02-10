import App from "./classes/App.js";

/* Una vez que instanciemos la clase App importada se ejecutarán
todas las sentencias ubicadas dentro del constructor, por lo cual
se ejecutará el initApp, y como observación, cada vez que hagamos
una nueva instancia de la clase se ejecutará nuevamente el
constructor y con ello el initApp*/
const app = new App();