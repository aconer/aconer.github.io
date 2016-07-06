/*global $*/
(() => {
    let avengers = ["Iron Man", "Thor", "Hulk", "Ant Man", "Wasp"];
    
    const toDashCase = 
        (str) => str.toLowerCase().split(" ").join("-");
    
    const createAvenger = (a) => {
            return $('<li>')
                .addClass(toDashCase(a))
                .text(a);
        }
    
    const createAvengers = (avengers) => {
        let $ul = $("<ul>").attr("id", "avengers");
        
        let avengersLis = avengers.map(createAvenger);
        
        return $ul.append(avengersLis);
    };
    
    const avengersReassemble = () => {
        $(".ant-man").detach();
        $(".wasp").detach();
    };
    
    $(".container").append(createAvengers(avengers));
    
    avengersReassemble();
    
    $("button").on("click", () => {
        console.log("TADA")
    });
    
   $("[name='first-input']").on("keyup", (e) => {
    console.log(e.target.value);
})





})();