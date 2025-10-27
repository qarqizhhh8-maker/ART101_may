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

var count = 0;
let colorCount=0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"]; 


$("#flower").click(function () {

    if ( count < 5) { mood = "fresh and happy" ; }
    else if ( (count >=5) && (count <10 ) ) { mood="keep pushing"; }
    else { mood = "so tired" ; }

    $("#flower").html( "Clicks: " + count + ", Color: " + colors[colorCount] + ", " + mood); //print "text" + var

    $("body").css("background-color", colors[colorCount]);

    if ( colors[colorCount] == "Orchid" ) {
        $("body").append("<img width=50 src='cat.jpg'>");
    }

    count = count + 1;
    colorCount = colorCount + 1;

    if ( colorCount == 4 ) {  colorCount=0;  } //loops colorCount

});







