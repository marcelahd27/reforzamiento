
/*definicion de la variable*/

const ironman = {
    firstName: 'Marcela',
    lastName: 'Hernandez',
    age: 24,
    address: {
        postalCode: 'ABC123',
        city: 'New York',
    },
};

const spiderman = structuredClone(ironman);

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.address.city = 'San josé';

console.log(ironman, spiderman);
