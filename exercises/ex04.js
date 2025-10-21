// button that says "click me"
//when clicked, button says "Clicked x time"
//every click is +1 to the x
//if x is over 1, button changes to "Clicked x times"
//a top limit of 100

/*let totalNumber = 0;

$("#needy_button").click(function(){
 totalNumber = totalNumber + 1;
 
 //ignore here
 //let sentence = "I was clicked";
 //let totalNumber2 = sentence + totalNumber;
 
 
 $("#needy_button").html("You clicked me " + totalNumber + " times!");

});

$("#cat").click(function(){

    "#cat" = "#boom"

})
*/

//professor example
//what it does: click button = background
let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"];

$("#flower").click( function(){
    
    let reminder=count % colors.length;

    $("#flower").html( "Clicks: " + count + "Color " + 
    colors[count]);
    count = count + 1;

    $("body").css("background-color", colors[reminder]);
});







