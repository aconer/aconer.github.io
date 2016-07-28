/* global $ _ */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        $('#pic-billy').on('click', function(event){
            console.log(event.currentTarget);
        });
        
        // console.log(data);
        
        /*
         * Style the #section-bio and #section-quotes as per some of the 
         * examples we tried in the console.
         */
         
        
        /*
         * 1. Populate the #list-top-rated <ul>:
         *
         * Loop through the top rated recordings of Billy Higgins, and, 
         * using lodash, add a styled <li> for each recording. Inspect a 
         * recording object in the console to view its available properties.
         *
         * How can you use _.map() to your advantage here?
         */
         let topRated = data.discography.topRated;
         
         _.forEach(topRated, function(recording) {
              console.log(recording);
         });
        
        let recordList = _.map(topRated, function(recording) {
            return $('<li>')
            .append($('<div>').addClass('title').text(recording.title))
            .append($('<div>').addClass('year').text(recording.year))
            .append($('<div>').addClass('release').text(recording.release));
        });
        $('#list-top-rated').append(recordList);
        
        
        
        /*
         * 2. Create a discography <section>:
         *      a. Create a discography <section id="section-disc"> and add it 
         *         below the and add it below the #section-quotes on the 
         *         index.html page.
         * 
         *      b. Create a <ul id="list-disc">, style it, and add it to the 
         *         <section id="section-disc">.
         * 
         *      c. Add a styled <li class="recording"> for every recording in 
         *         the recordings Array. What lodash methods can help you here?
         *
         *      d. Add CSS styling rules to the site.css file to style the list
         *
         *      The resulting HTML should look something like this:
         *
         *         <section id="section-disc">
         *           <ul id="list-disc">
         *               <li class="recording">
         *                   <div class="title">Title: Eastern Rebellion</div>
         *                   <div class="artist">Artist: Cedar Walton</div>
         *                   <div class="release">Release: Timeless</div>
         *                   <div class="year">Year: 1976</div>
         *               </li>
         *           </ul>
         *       </section>
         */
         
         $('<section>').attr('id', 'section-disc').appendTo('.sidebar');
         $('<header>').text('Recordings').appendTo('#section-disc');
         $('<img>').addClass('album-art').attr('src', 'images/album/eastern-rebellion.jpg').appendTo('#section-disc');
         $('<ul>').attr('id', 'list-disc').appendTo('#section-disc');
         
        let recordings = data.discography.recordings;
        let recordingsList = _.map(recordings, function(recording) {
            return $('<li>')
            .addClass('recordings')
            .append($('<div>').addClass('title').text(recording.title).attr('url', recording.art));
        }); 
        $('#list-disc').append(recordingsList); 
        
         //creating recording class with event handler on url 
        $('.title').on('click', function(event){
            console.log($(event.currentTarget).attr('url'));
            $('.album-art').attr('src', $(event.currentTarget).attr('url'));
        });
        
        
         /*
          * 3. Below the <section id="section-disc">, create a new section for 
          * Billy's rider. Use jQuery to assemble a table to display the rider 
          * data. The rider data is at data.rider
          */
          
          //console.log(data.rider);
        let riders = data.rider;  
        
        $('<section>').attr('id','section-billy-rider').appendTo('#sections');
        $('<header>').text("Billy's Rider").appendTo('#section-billy-rider');
        
        let createTable = function(riders) {
            let createRow = function(rider) {
              let $row = $('<tr>');
              let $type = $('<td>').text(rider.type);
              let $desc = $('<td>').text(rider.desc);
              $row.append($type);
              $row.append($desc);
              return $row;
            };
            let $table = $('<table>');
            let $rows = riders.map(createRow);
            $table.append($rows);
            return $table;
        };
        
        let billysTable = createTable(riders);
        $('#section-billy-rider').append(billysTable);
        
        //show billy pictures
        var billyPics = ['billy-0.jpg','billy-1.jpg','billy-2.jpg','billy-3.jpg'];
        $(function(){
            let index = 1;
            $('#pic-billy').click(function(event){
                var img = billyPics[index++];
                if(index === billyPics.length){
                    return index = 0;
                } 
                $('#pic-billy').fadeOut(2000, function(){
                    $('#pic-billy').attr('src', 'images/billy/' + img);
                    $('#pic-billy').fadeIn(2000);
                });
            });
        });
        
         
        
        
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


