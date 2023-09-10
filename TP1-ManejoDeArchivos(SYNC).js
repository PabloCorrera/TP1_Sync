
const { error } = require('console');

const fs = require('fs');
const { addAbortSignal } = require('stream');



//1
function leerArchivoComoString(){
    let datos = fs.readFileSync('archivoALeer.txt','utf-8')       //.toString()
        console.log(datos)
}
leerArchivoComoString();




//2
const escribirTextoEnArchivo = (ruta, texto, flag) => {
    try{
        let datos = fs.writeFileSync(ruta, texto)
        console.log('Archivo escrito exitosamente.');
    } catch{
        if(flag){
            let datos = fs.readFileSync(ruta, 'utf-8' )
            console.log(datos)
        } else {
            throw new Error('Ruta invalida')
        }
    }
    
}




escribirTextoEnArchivo("C:/Users/Cocodrilo/Desktop/ORT3/TP2/TP1/archivoDeCocodrilo.txt", "Soy un gran cocodrilo", true)

//C:\Users\Cocodrilo\Desktop\ORT3\TP2\TP1


//3



const transformarStringEnArrayDeNumeros = (texto, separador) => {
    const textoSplit = texto.split(separador)
    const numeros = []

    textoSplit.forEach( parte => {
        if(!isNaN(parte)){
            numeros.push(parte)
        }
    })

    return numeros
}

const texto = '123 | 456 | 789 | 1bc | 10 | cocodrilos';
const separador = ' | ';
console.log('transformarStringEnArrayDeNumeros')
const numerosSeparados = transformarStringEnArrayDeNumeros(texto, separador);
console.log(numerosSeparados);


//4

const transformarArrayDeNumerosAUnSoloString = (arrayDeStrings, separador) => {
    const string = arrayDeStrings.join(separador)
    return string
}

const array= [123, 456, 789, 10] 
const separador2 = ',';
console.log('transformarArrayDeNumerosAUnSoloString')
console.log(transformarArrayDeNumerosAUnSoloString(array,separador2))


//5


const combinarDosArrays = (array1, array2) => {
  
    const arrayConcatenado = array1.concat(array2);
    
    arrayConcatenado.sort((a, b) => a - b);

    const resultado = arrayConcatenado.filter((valor, indice, array) => array.indexOf(valor) === indice);
  
    return resultado;
  }
  
 
  const array1 = [1, 5, 10,450, 2];
  const array2 = [2, 3, 8, 11, 33, 1];
  const resultado = combinarDosArrays(array1, array2);
  
  console.log(resultado); 
  
//6

const combinarNArrays = (arrays) => {
    // Combinar arrays
    let arrayCombinado = [].concat(...arrays);
  
    // Filtro y ordeno
    arrayCombinado =  arrayCombinado.filter((valor, indice, array) => {
      return array.indexOf(valor) === indice;
    }).sort((a, b) => a - b);
  
    return  arrayCombinado;
  }
  
  const arrays = [[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]];
  const resultado2 = combinarNArrays(arrays);
  
  console.log(resultado2);
