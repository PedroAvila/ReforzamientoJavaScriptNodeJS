
const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    //edad: 50,
    getNombre (){
        return `${ this.nombre } ${ this.apellidos } ${ this.poder }`
    }
}

// console.log(deadpool.getNombre());


// const nombre = deadpool.nombre;
// const apellido = deadpool.apellidos;
// const poder = deadpool.poder; 

function imprimeHeroe( { nombre, apellido, poder, edad = 0 } ) {
    nombre = 'Fernando';
    console.log( nombre, apellido, poder, edad );
}

//imprimeHeroe( deadpool );

const heroes = [ 'Deadpool', 'Superman', 'Batman' ];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

//const [ h1, h2, h3 ] = heroes;
const [ , , h3 ] = heroes;

console.log( h3 );