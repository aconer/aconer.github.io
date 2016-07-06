var noises = ['bark'];
var animal = {};

 animal.species = 'mammal';   //adding key value pair to animal object

 animal.noises = noises;    //preferred way to add a property
 animal['noises'] = noises;

 var o = {
   one: 'a',
   two: 'b'
 };

 for(var key in o) {
   console.log(o[key]);
 }

function extend(copyTo, copyFrom){
    for(var key in copyFrom){
        if(copyTo[key] === undefined){
        copyTo[key] = copyFrom[key];
        }
    }
}

var o = {one: 'a'};
var o2 = {two: 'b'};

extend(o, o2); 

var customers = [
    {
        name: 'max',
        friends: [{
            name: 'john'
        }]
    },
    {
        name: 'john',
        friends: [{
            name: 'max'
        }]
    }
];

console.log(customers[1].friends.length);