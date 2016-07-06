/* global $ */
/* global _ */
/* global list*/
(() => {
    $.ajax("customers.json")
    .done((customers) => {
        // WRITE YOUR CODE BELOW HERE
        console.log("customers: ",customers);    
        
        //how many femals
        let females = _.filter(customers, (c, i, list) => {
            return c.gender === "female";
        }); 
        
        console.log(`females: ${females.length}`);
        
        //how many males
        
        let males = _.filter(customers, (c, i, list) => {
            return c.gender === "male";
        })
        
        console.log(`males: ${males.length}`);
        
   
    
        //oldest customer
        
        let oldest = customers[0];
        let youngest = customers[0];
        customers.forEach(function(customers){
            if(oldest.age < customers.age){
                oldest = customers;
            }
            if(customers.age < youngest.age){
                youngest = customers;
            }
            console.log(youngest);
            console.log(oldest);
        });
        
        
        //youngest customer
        
        
    
        //average balance
       
       let balance = _.map(customers, (val, key, customers) => {
            return Number(val.balance.substring(1).replace(/,/, ''));
        });
        let sum = balance.reduce((previous, current) => current += previous);
        let avg = sum / balance.length;
        
        console.log(avg); 
        
    
        //how many customer's names begin with some letter
        
        
        let input = 'a';
        function customerNamenum(letter) {
            let names = _.map(customers, (el, i, collection) => {
                return el.name;
            });
            
            let inputLetter = _.map(names, (el, i, collection) => {
                if (letter.toUpperCase() === el.charAt(0).toUpperCase()){
                    return names;
                }
            });
            return inputLetter.length;
        }
        
        console.log(customerNamenum(input));
        
        
        

        //5 how many customer's friend's names begin with some letter
        
        /*let counter = 0;
        let letter = 'D';
        
        _.each(customers, (customer, i, col) => {
            _.each(customer.friends, (friend, i, col) => {
               if (letter.toUpperCase() === friend.name[0].toUpperCase()) {
                   counter++;
               } 
            });
        });*/
        
        
        //6 how many customers are friends
        
        let counter1=0;
        let customersName=_.pluck(customers, "name");
        console.log(customersName);
        _.each(customers, (customer) => {
            _.each(customer.friends, (friends) => {
                _.each(customersName, (names) => {
                    if(friends.name === names)
                        counter1++;
            });
        }); 
        
    });
        console.log(counter1);
        
        

        //how many customers have friends in common
        
        let count = 0;let counter = 0,
 friend2 = _.pluck([].concat.apply([], _.pluck(customers, 'friends')), 'name'); let friendnum = _.pluck(customers, "friends");
        
        let        __
            _.unique(friend2);
            
        console.log(friend2);
        
        
      
        
        
        

        //most common tags
        
        let tags = _.map(customers, (el, i, col) => {
                return el.tags;
            });
            let mergeTags = [].concat.apply([], tags);
            let orderedTags = [];
            let mostCommon = function(array) {
                if (array.length === 0)
                    return null;
                let modeMap = {};
                let maxEl = array[0];
                let maxCount = 1;
                for (let i = 0; i < array.length; i++) {
                    var el = array[i];
                    if (modeMap[el] == null)
                        modeMap[el] = 1;
                    else modeMap[el]++;
                    if (modeMap[el] > maxCount) {
                        maxEl = el;
                        maxCount = modeMap[el];
                    }
                }
                return maxEl;
            };
            let removeItem = function(item, array) {
                for (let i in array) {
                    if (array[i] === item) array.splice(i, 1);
                }
            };
            for (let i = 0; i < mergeTags.length; i++) {
                if (mergeTags.length === 0) {
                    return null;
                }
                let element = mostCommon(mergeTags);
                orderedTags.push(element);
                removeItem(element, mergeTags);
            }
            orderedTags.sort();
            mergeTags.sort();
            console.log(`Most common tags in order: ${orderedTags.concat(mergeTags)} `);
//
        
        
        
    
        
        
        
        
        
        
        
        
        
        // WRITE YOUR CODE ABOVE HERE
    })
    .fail((r) => console.error(r));
})();