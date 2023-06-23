import  heroes, {owners} from '../data/heroes'
console.log(heroes);

const getHeroeById = (id) =>  heroes.find( ( heroe ) => heroe.id === id);

console.log(getHeroeById(1));

const getHeroesbyOwner  = (owner) =>  heroes.filter( ( heroe ) => heroe.owner === owner);
console.log(getHeroesbyOwner('Marvel'));
console.log(owners);