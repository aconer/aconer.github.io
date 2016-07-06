var animal = {};
animal.species = "cat";
animal["name"] = "black" + " " + "panther";
animal.noises = [];
console.log(animal);

//Step Two
//b1
var noises = [];
//b2
noises[0] = "meow";
//b3
noises.push("rawr");
//b6
noises.unshift("hiss");
//b7
noises[noises.length] = "purr";
//b8
console.log(noises.length);
//b9
console.log(noises[noises.length - 1]);
//b10
console.log(noises);

//Step Three
//c1
animal["noises"] = noises;
//c2
animal.noises = "yawl";
//c3
console.log(animal);

//Step Six
//d1
var animals = [];
//d2
animals.push(animal);
console.log(animals);
//d4
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
//d6
console.log(animals);
//d7
var dog = {species: 'dog', name: 'Lois', noises: ['woof', 'bark']};
animals.push(dog);
var bird = {species: 'bird', name: 'Waffles', noises: ['chirp', 'caw']};
animals.push(bird);
//d8
console.log(animals);
console.log(animals.length);

//Step Seven
//e3
var friends = []; //an array is used for the friend list in case I would like to add properties
//e5
function getAnimal(animals){
   var randomIndex = [Math.floor(Math.random()*animals.length)];
    return randomIndex;
}
//e6
friends.push('ducky');
console.log(friends);
duck['friends'] = friends;


//Step Eight
//f1
function search(animalName){
    for(var i = 0; i <= animals.length; i++){
        if(animals[i].name.toLowerCase() === animalName.toLowerCase()){
            return animals[i];
        }
    }
    return null;
}

function edit(animalName, updatedAnimal){
    var matchingAnimal = search(animalName);
    if (matchingAnimal !== null) {
        var index = animals.indexof(matchingAnimal);
        animals[index] = updatedAnimal;
    }
}

function remove (animalName){
    for(var i = 0; i <= animals.length; i++){
       if(animals[i].name === animalName){
           animals.splice(i, 1);
           return animals;
       } 
    }
}

function create (createAnimal){
    if(createAnimal.name.length > 0 && createAnimal.species.length > 0){
        for(var i = 0; i <= animals.length; i++){
            if(animals[i].name === createAnimal.name){
            }
        }
    
    }animals.push(createAnimal);
} 
