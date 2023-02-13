/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */
 
 function libro(texto){
 
 const letras = { A:"@",B:"*",C:"/",D:".",E:"+",F:"·",G:"?",H:"¿"};
 
 let linea_texto = " ";
 
 for(terminal in texto){
    if(terminal in Object.keys(letras)){
         linea_texto += Object.values(letras);        
    } else {
          linea_texto += terminal;
    };
};
  console.log(linea_texto)
}

libro("estoy aqui");

libro("estoy escribiendo una nota");