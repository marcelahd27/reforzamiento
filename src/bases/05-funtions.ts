

// Una función es un bloque de código reutilizable que ejecuta una tarea.
// Tiene un nombre, puede recibir valores (parámetros) y puede devolver un resultado.

// function greet(name: string): string {
// }

// const greet2 = (name: string): string => {
//     return 
// }

// const message = greet ('goku');
// const message2 = greet2('vegeta');

// console.log(message, message2);

/* function getUser() {
    return{
        uid: 'abc-123',
        username: 'el_papi23',
    };
}

const getUser2 = () => {
    return {
        uid: 'hola',
        username: 'fsdsasda',
    }
} */

/* function esMayorDeEdad(edad: number): boolean{
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(esMayorDeEdad(18)); */

/* FUNCION FLECHA */

const siEsMayorDeEdad = (edad: number): boolean => edad >= 18;

console.log(siEsMayorDeEdad(17));

function saludar(nombre: string): void {
    console.log(`hola, ${nombre}`);
}

saludar("marcela");

const saludar2 = (nombre: string): void => console.log(`hola, ${nombre}`);

saludar2("carlos")


function sumar(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

console.log(sumar(5, 3));

const sumar2 = (numero1: number, numero2: number): number => numero1 + numero2;

console.log(sumar2(6,9));

function promedio(a: number, b:number, c:number): string {
    
    let resultado = (a + b + c)/3;
    return resultado.toFixed(2);
}

console.log(promedio(8,10,10));

// function promedioInf(notas: Array<number>): string {
//     let suma = 0;
//     notas.forEach(element => {
//         suma = suma + element;
//     });
//     suma = suma / notas.length;
//     return suma.toFixed(2);
// }
// console.log(promedioInf([8,10,10,5]));


const promedio2 = (a: number, b:number, c:number): number => a + b + c 

console.log(promedio2(8,10,10)/3);

function aMayusculas (texto: string): string {
    return texto.toUpperCase()
}

console.log(aMayusculas("hola mundo"));

const aMayusculas2 = (texto: string): string => texto.toUpperCase()

console.log(aMayusculas2("lorem21"));


function obtenerPares(numeros: number []): number {
    
}


/* const saludar = (nombre:string,puesto:string):string =>{
    const saludo = `Bienvenido ${nombre} vaya a trabajar a ${puesto}`;

    return saludo;
}

const calcularRenta = (a:number):number => salario * 0.1;
   


calcularRenta(600);
 */
/* 
<h1>
saludar("pedro","limpieza")
</h1> */
/* const user = getUser();
const user2 = getUser2();
console.log(user, user2); */

/*  function imprimirTriangulo (){
        for (let i = 1; i <= 1; i++) 
            {
                console.log("*");  
        }
        for (let i = 1; i <= 1; i++) 
            {
                console.log("**");  
        }
        for (let i = 1; i <= 1; i++)
            {
                console.log("***");  
        }
        for (let i = 1; i <= 1; i++) {
            console.log("****");
            
        }
        for (let i = 1; i <= 1; i++)
        {
            console.log("*****");
            
        }
} 

imprimirTriangulo() */

function imprimirTriangulo2 (){

    
    for (let i = 1; i <= 5; i++) {
        let resultado = '';
        for (let j = 1; j <= i; j++) {
            resultado = resultado + " ";
        } 
        for (let j = 1; j <= i; j++) {
            resultado = resultado + "*";
        } 
       
         
       console.log(resultado);
    }
       
} 

imprimirTriangulo2() 
        /* console.log("**");
        console.log("***");
        console.log("****");
        console.log("*****"); */

