"use strict";

let alias = prompt("What is your name?");
let greeting_text="Hello "+alias+"!";

window.onload = function() {
    greeting();
    function greeting() {
        document.getElementById("greeting").innerHTML=greeting_text+" Welcome to my page!";
    };
}

function question() {

let int_mess ="";
// question 1
let book = prompt("Have you read all the Harry Potter books?");
let book_convert = book.toLowerCase();
while (!((book_convert == "yes")||(book_convert == "y")||(book_convert == "no")||(book_convert == "n"))) {
    book = prompt("Invalid answer. Have you read all the Harry Potter books?");
    book_convert = book.toLowerCase();
}
alert("Your answer is "+book)
if ((book_convert == "yes")||(book_convert == "y")) {
    int_mess = "I have read all the Harry Potter books as well. It is one of my favorite book series! "
} else {
    int_mess = "What a pity! You should give the series a try. It is not a best seller for no reason. "
}

// question 2
let game = prompt("Do you like video games?");
let game_convert = game.toLowerCase();
while (!((game_convert == "yes")||(game_convert == "y")||(game_convert == "no")||(game_convert == "n"))) {
    game = prompt("Invalid answer. Do you like video games?");
    game_convert = game.toLowerCase();
}
alert("Your answer is "+game)
if ((game_convert == "yes")||(game_convert == "y")) {
    int_mess += "I rarely play video games. But my favorite game of all time is Mario Party. "
} else {
    int_mess += "Me too! I rarely play video games. "
}

//question 3
let travel = prompt("Have you ever gone camping?");
let travel_convert = travel.toLowerCase();
while (!((travel_convert == "yes")||(travel_convert == "y")||(travel_convert == "no")||(travel_convert == "n"))) {
    travel = prompt("Invalid answer. Have you ever gone camping?");
    travel_convert = travel.toLowerCase();
}
alert("Your answer is "+travel)
if ((travel_convert == "yes")||(travel_convert == "y")) {
    int_mess += "I see that you went camping before. Do you like it? Rocky Mountain is my favorite to go camping and hiking. "
} else {
    int_mess += "You should go camping and hiking sometime. It is really relaxing. "
}

//question 4
let trick = prompt("Can you whistle?");
let trick_convert = trick.toLowerCase();
while (!((trick_convert == "yes")||(trick_convert == "y")||(trick_convert == "no")||(trick_convert == "n"))) {
    trick = prompt("Invalid answer. Can you whistle?");
    trick_convert = trick.toLowerCase();
}
alert("Your answer is "+trick)
if ((trick_convert == "yes")||(trick_convert == "y")) {
    int_mess += "I am jelous. I cannot whistle. "
} else {
    int_mess += "I cannot whistle as well.  "
}

let park = prompt("Have you ever been to Disneyland");
let park_convert = park.toLowerCase();
while (!((park_convert == "yes")||(park_convert == "y")||(park_convert == "no")||(park_convert == "n"))) {
    park = prompt("Invalid answer. Have you ever been to Disneyland?");
    park_convert = park.toLowerCase();
}
alert("Your answer is "+park)
if ((park_convert == "yes")||(park_convert == "y")) {
    int_mess += "I really enjoyed my time at Disneyland. Hope you like your trip as well. "
} else {
    int_mess += "You give Disneyland a try. It is fun to be there. Eventhough the line is frustrated sometime. "
}

document.getElementById("message").innerHTML = int_mess;
document.getElementById("q_button").disable = true;

let count =5;
    let number = prompt("Please guess a number");
    let i = 2;
    let random = Math.floor(Math.random()*1000);
    while (i <= 5) {
        if (number == random) {
            alert("You are correct! The answer is "+random+".");
            count++;
            {break;}
        } else {
            let cmp = (number < random) ? "Too low":"Too High";
            alert("The number is not correct. "+cmp+"!");
            if (i<=4) {
                number = prompt("Please guess the number again. This is the attemp number "+i);
                i++;
            } else {
                alert("The correct number is "+random+".");
                i++;
            }                 
        }     
        }

    let q7_key =["the fellowship of the ring","the two tower","the return of the king"];
    let q7_i = 2;
    let q7_ans = prompt("What is one of the Lord of the Rings trilogy movies?");
    while (q7_i <=7) {
        let q7_ansconvert = q7_ans.toLowerCase();
        if (q7_key.includes(q7_ansconvert)) {
            alert("You have the correct answer!");
            count++;
            {break;}
        } else {
            if (q7_i <= 6) {
                q7_ans = prompt("Your answer is not correct! Please try again. What is one of the Lord of the Rings Trilogy movies? This is the attempt number "+q7_i);
            } else {
                alert("You answer is not correct and run out of attempt");
            }
            q7_i++;
        }
    }
    alert("Lord of the Rings trilogy includes: "+q7_key);
    alert("Your correct answers are "+count);
}
    

