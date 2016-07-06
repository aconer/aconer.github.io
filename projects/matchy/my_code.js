var animal = {};
animal.species = "cat";
animal["name"] = "Lily";
animal["noises"] = [];
console.log(animal);

var noises = [];
animal[0] = "rawr";
noises.push("purr");
noises.unshift("meow");
noises[noises.length ++] = "lawl";
console.log(noises);

animal[noises] = noises;
animal["noises"] = "ouch";
console.log(animal);

var animals = [];
animals.push(animal);

var duck = { 
            species: 'duck', 
            name: 'Jerome', 
            noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);

var wolf = { 
            species: 'wolf', 
            name: 'Black', 
            noises: ['ow', 'woof'] };
animals.push(wolf);

var frog = { 
            species: 'frog', 
            name: 'Green', 
            noises: ['ribbit', 'croak'] 
    
};

animals.push(frog);
console.log(animals);
console.log(animals.length);

/*You want to use an array for the list of friends 
because arrays are unordered lists.*/

var friends = [];
function getRandomAnimal(animals){
    return animals[Math.floor(Math.random()* animals.length)];
}

friends.push(getRandomAnimal(animals).name);

console.log(friends);

frog.friends = friends;

function search(animalname){
    for(var i = 0; i < animals.length; i++){
        if(animalname.toUpperCase() === animals[i].name.toUpperCase()){
            return animals[i];
        }
    }
    return null;
}

function edit(animalname, object){
    for(var i = 0; i < animals.length; i++){
        if(animalname.toUpperCase() === animals[i].name.toUpperCase()){
            return animals.splice(animals[i], 1, object);
        }
    }
}

function remove(animalname){
    for(var i = 0; i < animals.length; i++){
        if(animalname.toUpperCase() === animals[i].name.toUpperCase()){
            return animals.splice(animals[i], 1);
        }
    }
    
}

function create(object){
    for(var i = 0; i < animals.length; i++){
        var uniqueName = object.name.toUpperCase();
        var sameName = animals[i].name.toUpperCase();
        if(uniqueName === sameName){
            return;
         }
    }
    if((object.name.length > 0) && (object.species.length > 0)){
            animals.push(object);
        }
}



