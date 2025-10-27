/*
$(".yes").click(function() {
      var image = document.getElementById("cat");
      image.src = "images/exploding_cat.gif";
      $(".yes").html("Kitty has exploded!");
});


$(".no").click(function() {
      var image = document.getElementById("guppy");
      image.src = "images/Vert.webp";
      $(".no").html("You've killed Guppy!");
});
*/

$("button").click(function() {

    if ($(this).hasClass("yes")){
    $(".yes").html("Kitty has exploded!");
    var image = document.getElementById("cat");
    image.src = "images/exploding_cat.gif";
    }
    
    else {
    $(".no").html("You've killed Guppy!");
    var image = document.getElementById("guppy");
    image.src = "images/Vert.webp";
    }

});


