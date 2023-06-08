const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar2('Esteban'));
console.log(saludar3('Paul'));
console.log(saludar4());

const getUser = () => ({
        uid: 'ABC',
        username: 'steve123'
    })
;
const user = (getUser());
console.log(user);

const getUsuarioActivo = (nombre) => 
({
    
        uid: 'ABCD',
        username: nombre
    });

const usuarioActivo = getUsuarioActivo('Esteban');
console.log(usuarioActivo);