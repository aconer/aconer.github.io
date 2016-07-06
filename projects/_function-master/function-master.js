//1
function objectValues (object){
    var array = [];
    for(var value in object){
        array.push(object[value]);
    } return array;
}

//2
function keysToString(object){
    return Object.keys(object).join(" ");
}

//3
function valuesToString(object){
    var array = [];
    for(var value in object){
        if(typeof object[value] === "string"){
            array.push(object[value]);
        }
    }return array.join(" ");
}

//4
function arrayOrObject(argument){
    if(Array.isArray(argument)){
        return "array";
    }else return "object";
}

//5
function capitalizeWord(word){
     return word[0].toUpperCase() + word.slice(1);
}

//6
function capitalizeAllWords(words){
    var splitWords = words.split(" ");
    for(var i = 0; i < splitWords.length; i++){
        splitWords[i] = capitalizeWord(splitWords[i]);
    } return splitWords.join(" ");
}


//7
function welcomeMessage(object){
    return "Welcome " + capitalizeWord(object["name"]) + "!"; 
}
    
//8
function profileInfo(object){
    return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);
}

//9
function maybeNoises(object){
    var string = "";
    if(Array.isArray(object.noises) && object.noises.length){
        for(var i = 0; i < object.noises.length; i++){
           string += object.noises[i] + " ";
        }return string.trim();
    }else return "there are no noises";
}

//10
function hasWord(words, word){
    var splitWords = words.split(" ");
    for(var i = 0; i < splitWords.length; i++){
        if(word === splitWords[i]){
         return true; 
        }
        
    }return false;
    
}

//11
function addFriend(name, object){
    object.friends.push(name);
    return object;
}

//12
function isFriend(name, object){
    if(!object.friends){
        return false;
    }
    for(var i = 0; i < object.friends.length; i++){
    if(name === object.friends[i]){
        return true;
    } 
  }return false;
}

//13
function nonFriends(name, people){
    //find the named person:
    var namedPerson;
    for(var i = 0; i < people.length; i++ ){
        if(name === people[i].name){
            namedPerson = people[i];
        }
    }
    //make sure not to add the named person to the outgoing list
    var out = [];
    for(var j = 0; j < people.length; j++){
        if(people[j].name === name) continue;
        
     //see who is NOT in the named person's friends list
        if(namedPerson.friends.indexOf(people[j].name) === -1){
          out.push(people[j].name);
      }
    }
    return out;
}

//14

function updateObject(obj, key, value) {
    obj[key] = value;
    return obj;
}
//15

function removeProperties(obj, array) {
    for (var i = 0; i < array.length; i++) {
        for (var key in obj) {
            if (key === array[i]) {
                delete obj[key];
            }
        }
    }
    return obj;
}

//16
function dedup(array) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        if (arr.indexOf(array[i]) == -1) {
            arr.push(array[i]);
        }
    }
    return arr;
}       
