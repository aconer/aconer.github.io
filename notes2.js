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

//console.log(customers[1].friends.length);

/**
 * function search(collection){
 * // create something to hold objects in which target is found
 * //iterate collection//
 * //base case// isString?
 * //       if String > is target within String
 * //       push whole object into some output
 * //       isCollection()?
 * //       if search(value).length ---> subsearch
 *               push whole object into some output
 * //
 * //return output
 }
 * function isCollection() {
* //weeds out false positives for object, returns true if 
* //value is Array or Object intended as collection
 }
 * 
 */
 
 var names = ['John', 'Gordon', 'Tyrin'];
 var uppercase = names.map(function(name, i, names){
     return name.toUpperCase();
 });
 
 var listItems = names.map(function(name, i, names){
     return $('<li>').text(name);
 });
 //list of jQuery wrapped li's
 console.log(listItems[0][0].innerHTML);
 
 