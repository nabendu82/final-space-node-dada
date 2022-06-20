const getCharacters = require('./utils/characters');

getCharacters((error, characters) => {
    if(error){
        console.log(error);
    } else {
        console.log(characters);
    }
})