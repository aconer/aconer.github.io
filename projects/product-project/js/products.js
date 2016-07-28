/* global $ _ */
$(document).on('ready', function(event) {
    $.getJSON('data/product.json', function(data) {
            console.log(data);
            
            initializeSearch(data);
            createDropdownItems(data);
            dropdownFilter(data);
            createProductList(data).appendTo('#products');
            showAllProducts(data);
        })
        .fail(function() {
            throw new Error('getJSON on product data failed!');
        });
});

$(function() {

});


 // ALL YOUR CODE GOES BELOW HERE //

            function initializeSearch(data){
                $('#button-search').on('click', function(event){
                   $('#product-list').empty();
                   var target = document.getElementById('input').value;
                   var searchResults = search(data, target);
                   var listItems = _.map(searchResults, function(product){
                      return createProductListItem(product).appendTo('#product-list'); 
                   });
                   $('#product-list').append(listItems);
                });
            }
            
            //Functionality for search bar
            function search(collection, target){
                var output = [];
                _.each(collection, function(value){
                   if(typeof value === 'string'){
                       if(value.toLowerCase().indexOf(target.toLowerCase()) > -1){
                           output.push(value);
                        }
                   } else if(isCollection(value)){
                        if(search(value, target).length){
                            output.push(value);
                        }
                    }
                });
                return output;
            }
            
            
            function isCollection(value){
                if(typeof value !== null && value instanceof Date === false && typeof value === 'object') return true;
                return false;
            }
            
            
            
            function createProductList(data){
                return $('<ul>').attr('style', 'list-style-type:none')
                .attr('id', 'product-list')
                .addClass('product-list')
                .append(_.map(data, function(product, item){
                    return createProductListItem(product);
                }))
            }
            
            function createProductListItem(product){
                return $('<li>').css('padding', 20)
                .attr('id', 'list-item')
                .addClass('list-item container')
                .append(createProductImage('img/product/thumbs/' + product.image))
                .append(createProductDetails(product.desc)
                .append(createProductDetails('$' + product.price.toFixed(2)))
                .append (createProductDetails('Stock: ' + product.stock)))
            }
            
            function createProductImage(url){
                return $('<div>').addClass('image-div')
                .append($('<img>').attr('src', url).addClass('image col-sm-1'));
            }
            
            function createProductDetails(desc, price, stock){
                var price = $('<div>')
                .addClass('price')
                .html(price)
                var price = $('<div>')
                .addClass('desc')
                .html(desc)
                var price = $('<div>')
                .addClass('stock')
                .html(stock)
                return $('<div>').addClass('product-text col-md-4-6').append(desc, price, stock);
            }
            
           function getTypes(data) {
               var output = [];
               _.each(data, function(product) {
                   output.push(product.type);
               });
               return _.uniq(output);
           }
           
           function normalizeString(string) {
               var rest = string.slice(1);
               return (string[0].toUpperCase() + rest + 's');
           }
           
           function createDropdownItems(data) {
               var types = getTypes(data);
               var items = _.map(types, function(value) {
                   var type = normalizeString(value);
                   return $('<li>')
                       .attr('id', value)
                       .addClass('dropdown-items')
                       .append($('<a>')
                           .attr('href', '#')
                           .text(type));
               });
               $('#dropdown-menu').append(items);
           }
           
           function dropdownFilter(data) {
               $('.dropdown-items').on('click', function(event) {
                   var output = [];
                   var elem = $(event.currentTarget);
                   var type = elem.attr('id');
                   _.each(data, function(product) {
                       if (product.type === type) {
                           output.push(product);
                       }
                   });
                   $('#product-list').empty();
                   var listItems = _.map(output, function(product){
                      return createProductListItem(product).appendTo('#product-list'); 
                   });
                   $('#product-list').append(listItems);
               });
           }
           
           function showAllProducts(data){
               $('.all-products').on('click', function(event) {
                   $('#product-list').empty();
                var listItems = _.map(data, function(product){
                      return createProductListItem(product).appendTo('#product-list'); 
                   });
                   $('#product-list').append(listItems);   
               });
           }
            
            // ALL YOUR CODE GOES ABOVE HERE //
