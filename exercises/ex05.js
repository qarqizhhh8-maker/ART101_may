var count = 0;
let colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];

$("#needy-button").click(function () {
   if (count < 5) { mood = "fresh and happy"; }
   else if ((count >= 5) && (count < 10)) { mood = "keep pushing!"; }
   else { mood = "so tired..."; }
   
   $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorCount] + " " + mood);
   $("body").css("background-color", colors[colorCount]);

    if (colors[colorCount] == "Orchid") {
        $("body").append("<img width=50 src='images/Orchid.webp'>");
   }
    if (colors[colorCount] == "Coral") {
        $("body").append("<img width=50 src='images/Coral.webp'>");
   }
   count = count + 1;
   colorCount = colorCount + 1;
   if (colorCount == 4) { colorCount = 0; }
});

function changeBackground  (newColor) {
    $("body").css("background-color", newColor);
    }

$(".color-button").click( function() {

    changeBackground(this.id);

});