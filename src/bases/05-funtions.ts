

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

function getUser() {
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
}

const saludar = (nombre:string,puesto:string):string =>{
    const saludo = `Bienvenido ${nombre} vaya a trabajar a ${puesto}`;

    return saludo;
}

const calcularRenta = (a:number):number => salario * 0.1;
   


calcularRenta(600);


<h1>
saludar("pedro","limpueza")
</h1>
const user = getUser();
const user2 = getUser2();
console.log(user, user2);

