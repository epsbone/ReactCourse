const persona = {
    nombre: 'Esteban',
    edad: 21,
    clave: 'Prueba'
};
const {nombre, edad, clave,} = persona;
console.log(nombre);
console.log(edad);
console.log(clave);

const uContext = ({clave,nombre,edad,rango = 'Capitan'}) =>{
    //console.log(nombre, edad, rango);

    return{
        nombreClave: clave,
        anos: edad,
        latlng: {
            lat: 14.535,
            lng: -12.425
        }
    }

}
const {nombreClave,anos,latlng:{lat,lng}} = uContext(persona);
console.log(nombreClave);
console.log(anos);
console.log(lat,lng);