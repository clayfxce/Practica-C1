/*  
ARCHIVO: logica.js
CAPA: LOGICA DE NEGOCIO
RESPONSABILIDAD: Controlar el comportamiento de la aplicacion, coordinar la comunicacion entre la capa de presentacion y la capa de datos.
*/

/*
Funcion: sumar
Esta funcion se ejecuta cuando el usuario presiona el boton SUMAR desde la interfaz (index.html).
*/
function sumar(){
    
    /*
    Flujo de ejecucion:

    1. El usuario escribe dos numeros en los campos de entrada.
    2. El usuario presiona el boton SUMAR.
    3. Se ejecuta esta funcion desde la capa de presentacion.
    4. Se obtienen los valores ingresados en los inputs.
    5. Se envian los datos a la capa de datos mediante la funcion obtenerResultados.
    6. Se recibe el resultado de la suma.
    7. Se muestra el resultado en la interfaz.
    */

    /* Obtiene el valor del primer input y lo convierte a numero entero */
    let a = parseInt(document.getElementById("num1").value);

    /* Obtiene el valor del segundo input y lo convierte a numero entero */
    let b = parseInt(document.getElementById("num2").value);

    /* Llama a la funcion de la capa de datos para realizar la suma */
    let resultado = obtenerResultados(a,b);

    /* Muestra el resultado en el elemento con id "resultado" */
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}