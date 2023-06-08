const persona = {
    nombre: 'Esteban',
    apellido: 'Pereda',
    edad: 21,
    direccion: {
        ciudad: 'Durango',
        zip: '324412',
        lat: '14.456',
    }
};
//console.table(persona);
const persona2 = {...persona};
persona2.nombre = 'Scabby';

console.log(persona);
console.log(persona2);