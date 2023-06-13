/**
 * ##########  Qué es Cypress  ##########
 * Cypress es una herramienta para hacer testing de la "siguiente
 * generación", ofrece pruebas que antes no se podían hacer.
 * 
 * Cuando escribes pruebasde código o de consola, (como con JEST)
 * no puedes visualizar ni saber que es lo que el usuario
 * experimenta.
 * 
 * La página web donde se puede averigüar mas sobre es en su
 * página, cypress.io.
 * 
 * 
 * ==========  Tipos de Pruebas en Cypress  ==========
 * Es considerado end-to-end pero también ofrece pruebas unitarias
 * y de integración.
 * 
 * Funciona en el navegador, por lo tanto puedes probar con Cypress
 * proyectos hechos en Java, C#, Python, PHP, Node, React o VueJS
 * 
 * ########## Instalando y Primeros Pasos con Cypress ##########
 * ~ Ejecutamos el comando "npm init" para generar el archivo package.json
 * ~ Especificamos los valores para el archivo package.json
 * ~ Instalamos Cypress en entorno de desarrollo con el siguiente comando:
 *      npm i --save-dev cypress
 * ~ Luego ejecutamos el siguiente comando:
 *      npx cypress open
 * ~ En caso de presentar algún error al momento de instalar o
 *      ejecutar por primera vez, borramos la carpeta node_modules
 *      (sí se creo alguna) vamos al archivo package.json y nos
 *      aseguramos de tener la dependencia de cypress, y validamos
 *      que sea la versión 12.14.0
 * ~ Una vez validado, ejecutamos el comando :
 *      npx cypress install --force
 * ~ Sí ya se logró ejecutar el Cypress, veremos que es una 
 *      versión actualizada, ingresamos desde la interfaz a
 *      pruebas e2e (end-to-end) y luego ingresamos en Specs
 *      para que se generen las carpetas con los tests defaults
 * ~ Los tests serán generados en una carpeta llamada "e2e" que
 *      será generada dentro de la carpeta "cypress", en caso no se 
 *      haya generado podemos generarla nosotros mismos
 * ~ Dentro de dicha carpeta van los archivos de los tests, los
 *      cuales debemos nombrar especificamente según la siguiente
 *      estructura: (nombre_archivo).cy.js
 * ~ Para configurar cypress podemos editar el archivo llamado:
 *      cypress.config.js, podemos modificar el viewport y
 *      la URL base desde acá, pero tener en cuenta que las
 *      especificaciones van a la altura de la función 
 *      setupNodeEvents y no dentro de dicha función,
 *      es decir, por lo menos para el tamaño de viewport,
 *      y URL, se especifica como hijo de "e2e" y hermano de
 *      setupNodeEvents.
 * 
 *  */