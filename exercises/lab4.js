let myFruit = ["watermelon","apple","banana","orange","strawberry"];

let myFavoriteFruit = {
    fruit: "watermelon",
    taste:"juicy",
    color: "red",
    weight: "heavy"
};
let megaSentences;
megaSentence = "<p> My favorite fruits are " + myFavoriteFruit.fruit[1] + "," //bruh what, im confused
                                             + myFavoriteFruit[2] + ","
                                             + myFavoriteFruit[3] + ","
                                             + myFavoriteFruit[4] + ","
                                             + myFavoriteFruit[5] + ","
                "</p>";

megaSentences = megaSentences + "<p>My favorite fruit is the" + myFavoriteFruit.fruit +
                                                 ", taste" + myFavoriteFruit.taste +
                                                 ", color" + myFavoriteFruit.color +
                                                 ", weight" + myFavoriteFruit.heavy +
                                ".</p>";





$("#output").html(megaSentences);

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