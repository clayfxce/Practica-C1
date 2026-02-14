/*
ARCHIVO: datos.js
CAPA: DATOS
RESPONSABILIDAD: Proveer y manipular datos basicos de la aplicacion.
No interactua directamente con la interfaz, solo devuelve informacion a la capa logica.
*/

/* Recibe dos valores numericos y devuelve el resultado de su suma. */
function obtenerResultados(a,b){

    /*
    Flujo de ejecucion:
    1. La capa logica envia dos numeros como parametros.
    2. Se realiza la suma de ambos valores.
    3. Se devuelve el resultado a la capa logica.
    */
    return a + b;
}