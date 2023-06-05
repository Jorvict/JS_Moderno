/**
 * Introducción al testing
 * 
 * # Ventajas de hacer Testing:
 *      ~ Mejorará la calidad de tu software evitando bugs.
 *      ~ Probar todos los dieferentes escenarios puede ser complicado
 *          o tardado, pero hay herramientas que automatizan las pruebas 
 *          de nuestros proyectos como Jest y Cypress.
 *      ~ Liberar nuevas versiones sin las preocupaciones de que algo
 *          salga mal.
 * 
 * # Consideraciones con el Testing
 *      ~ ¿Cuántas veces has agregado nuevas funciones a un proyecto
 *          existente pero desconoces si funciona bien con lo existente o
 *          sí el proyecto sigue funcionando correctamente luego de la
 *          nueva implementación? Es decir que la nueva implementación no
 *          entre en conflicto con el proyecto previo (por ejemplo que
 *          deshabilite campos o que genere errores de ejecución).
 * 
 *      ~ Tener pruebas hará que una persona que no ha mantenido un
 *          proyecto conozca que es lo que hace cada parte.
 * 
 *      ~ No harás pruebas de todo, más bien de como se integran diferentes
 *          partes de la aplicación.
 * 
 * # Diferentes tipos de Testing
 *      ~ End to End: Más interactivo, simula algunos clicks, llenar
 *          formularios y asegurarse de que lo se muestre en pantalla es 
 *          lo que se desea ver (Popularmente utilizado en Cypress).
 * 
 *      ~ Integración: Revisar que múltiples partes de nuestro proyecto 
 *          funcionen bien. (Puede ser realizado con Jest)
 * 
 *      ~ Unit: Revisar que cada parte por si sola funcione bien. (Puede 
 *          ser realizado con Jest)
 * 
 *      ~ Static: Revisar por errores en el código mientras vas escribiendo.
 *          (Puede ser realizado con Jest e incluso Typescript que es
 *           sensible a carácteres y tipo de datos).
 * 
 * # Herramientas para Testing
 *      ~ Cada tecnología tiene sus herramientas para Testing, pero una
 *          muy popular es Jest, hay versiones para VueJS, Angular, 
 *          TypeScript, Node, React, etc. Es necesario tener instalado
 *          Node.js
 * 
 *      ~ Otra opción es Cypress que es una herramienta para hacer testings
 *          End to End.
 */