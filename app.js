console.log('app.js is connected')

function createParagraph() {
    console.log("create paragraph has been logged")
    var wordOne = document.getElementById("textOne").value;
    var wordTwo = document.getElementById("textTwo").value;
    var wordThree = document.getElementById("textThree").value;
    var wordFour = document.getElementById("textFour").value;
    var wordFive = document.getElementById("textFive").value;
    var wordSix = document.getElementById("textSix").value;
    var wordSeven = document.getElementById("textSeven").value;
    var wordEight = document.getElementById("textEight").value;
    

    console.log(wordOne,wordTwo,wordThree,wordFour,wordFive,wordSix,wordSeven,wordEight)

    var paragraph = "<p> Today, every student has a computer small enough to fit into his " + wordOne + " ." + " He can solve any math problem by simply pushing the computer\'s little " + wordTwo + "." + " Computers can add, multiply, divide, and " + wordThree + "." + " They can also " + wordFour + " better than a human.  Some computers are "+ wordFive + ". " + "Others have " + wordSix + " screen that shows all kinds of " + wordSeven +" and " + wordEight + " figures.</p>"

    console.log(paragraph);

    document.getElementById("answer").innerHTML = paragraph;
}