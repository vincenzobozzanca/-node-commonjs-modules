//importazione nomi
const createFullName = require('./names');
const result = createFullName('Vincenzo', 'Bozzanca');
console.log(result)

//importazione hobby
const allMyHobbies = require('./hobbies');
const iLike = allMyHobbies('MMA', 'Kickboxing', 'Boxe');
console.log(iLike);

//funzione senza parametri 
function nameHobbies () {
    return {
        fullName: result,
        hobbies: iLike
    }
}

console.log(nameHobbies());