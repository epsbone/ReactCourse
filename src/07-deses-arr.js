const personajes = ['Goku' , 'Vegeta', 'Trunks'];
const [ ,p2 ] = personajes;
console.log(p2);

const retornaArreglo = () =>{
    return ['ABC', 123];
}
const [letras,numeros] = retornaArreglo();
console.log(letras,numeros);

const Ustate = (valor) => {
    return [valor, ()=>{console.log('Hola Mundo')}];

}
const [nombre, setNombre] = Ustate('Goku');

console.log(nombre);
setNombre();
