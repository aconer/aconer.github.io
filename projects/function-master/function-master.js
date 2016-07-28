// objectValues:
function objectValues(obj){
   let output = []; 
   for(var key in obj){
       output.push(obj[key]);
   }
   return output;
}

//keysToString() : Should take an object and return all its keys in a string each separated with a space
function keysToString(obj){
    return Object.keys(obj).join(' ');
}

//valuesToString() : Should take an object and return all its string values in a string each separated with a space

function valuesToString(object){
    var output = [];
    for(var key in object){
        if(typeof object[key] === 'string'){
            output.push(object[key]);
        }
    }
    return output.join(' ');
}

//arrayOrObject() : Should take one argument and return 'array' if its an array and 'object' if its an object

function arrayOrObject(argument){
    if(Array.isArray(argument)){
        return 'array';
    }
    return 'object';
}

//capitalizeWord() : Should take a string of one word, and return the word with its first letter capitalized

function capitalizeWord(string){
    return string[0].toUpperCase() + string.slice(1);
}

//capitalizeAllWords() : Should take a string of words and return a string with all the words capitalized

function capitalizeAllWords(strings){
    var allCaps = [];
    var splitWords = strings.split(' ');
    splitWords.forEach(function(word){
       allCaps.push(capitalizeWord(word)) 
    });
    return allCaps.join(' ');
}

//welcomeMessage() : Should take an object with a name property and return 'Welcome <Name>!'

function welcomeMessage(object){
    return 'Welcome ' + capitalizeWord(object.name) + '!';
}

//profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>'

function profileInfo(object){
    return capitalizeWord(object.name) + ' is a ' + capitalizeWord(object.species);
}

//maybeNoises() : Should take an object, if this object has a noises array return them as a string separated by a space, 
//if there are no noises return 'there are no noises'

function maybeNoises(object) {
    if(object.noises && object.noises.length > 0) {
        return object.noises.join(' ');
    } 
    return 'there are no noises';
}

//hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false

function hasWord(string, word){
    return string.indexOf(word) !== -1;
}

//addFriend() : Should take a name and an object and add the name to the object's friends array then return the object

function addFriend(name, object){
    object.friends.push(name);
    return object;
}

//isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise

function isFriend(name, object){
    if(!object.friends){
        return false;
    }
    for(var i = 0; i < object.friends.length; i++){
        if(object.friends[i] === name){
            return true;
        }    
    }
    return false;
}

//nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with

function nonFriends(name, list){
    var noFriend = [];
    for(var i = 0; i < list.length; i++){
        if(list[i].name !== name && list[i].friends.indexOf(name) === -1){
            noFriend.push(list[i].name);
        }
    }
    return noFriend;
}

//updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on 
//<object> create it

function updateObject(object, key, value){
    object[key] = value;
    return object;
}

//removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>

function removeProperties(object, array){
    for(var i = 0; i < array.length; i++){
        for(var key in object){
        if(key === array[i]){
            delete object[key];
        }
        }
    }
    return object;
}

//dedup() : Should take an array and return an array with all the duplicates removed

function dedup(array){
    var output = [];
    for(var i = 0; i < array.length; i++){
        if(array.indexOf(array[i] === i)){
            output.push(array[i]);
        }
    }
    return output;
}