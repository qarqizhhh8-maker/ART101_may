let myFruit = ["watermelon","apple","banana","orange","strawberry"];

let myFavoriteFruit = {
    fruit: "watermelon",
    taste:"juicy",
    color: "red",
    weight: "heavy",
};
let megaSentences;
megaSentences = "<p> My favorite fruits are " + myFruit[0] + ", "
                                             + myFruit[1] + ", "
                                             + myFruit[2] + ", "
                                             + myFruit[3] + ", "
                                             + myFruit[4] + ", "
                "</p>";

megaSentences = megaSentences + "<p>My favorite fruit is the " + myFavoriteFruit.fruit +
                                                 ", " + myFavoriteFruit.taste +
                                                 ", " + myFavoriteFruit.color +
                                                 ", " + myFavoriteFruit.weight +
                                ".</p>";





$("#output").html(megaSentences);
/*
//professior example
let myCommutes = ["metro bus", "UCSC taps bus", "personal bike", "rental bike", "some random car", "friends"];

let myFavouriteCommute = {
    type: "Bus",
    route: 1,
    print: "Mountain Lion",
    hasMiddleDoor: true,
    drivers: ["Elena", "Alex", "the guy with a red beard"],
};

let megaSentence;
megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[5] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[0] + "</p>";

$("#output").html(megaSentence);
*/