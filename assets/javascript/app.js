$(document).ready(function () {

    // var score;
    // score = 0;
    // alert("Welcome to the Movie Quiz!")
    // var q1 = prompt("trivia")
    // if (q1 === correctAnswer) {
    //     score++
    // }

    for(var i=0; i<trivia.length; i++){
        var response = window.prompt (trivia[i].prompt);
        if (response === trivia [i].correctAnswer){
            score++;
            alert ("Correct!");
        }else{
            alert ("Incorrect!");
        }

    }

    alert("you got" + score)

    //Timer 
    var countDown = 30;
    var countdownTimer = setInterval(() => {
      timeleft--;

    
      document.getElementById('timer').textContent = timeleft;

      if (timeleft <= 0) {
        clearInterval(countdownTimer);
        resolve(true);
      }
    }, 1000);
  });


// An array of quiz questions

var trivia = [
    {
      question: 'Which of the following actors played James Bond in the most films?',
      choices: {
        a: 'Sean Connery',
        b: 'Roger Moore',
        c: 'Pierce Brosnan',
        d: 'Daniel Craig',
      },
      correctAnswer: 'b'
    },
    {
      question: 'Which of the following is the top grossing Mission Impossible film?',
      choices: {
        a: 'Mission: Impossible III',
        b: 'Mission: Impossible II',
        c: 'Mission: Impossible - Fallout',
        d: 'Mission: Impossile - Ghost Protocol',
      },
      correctAnswer: 'c'
    },
    {
      question: 'Which actor has won the most Oscars?',
      choices: {
        a: 'Jack Nicholson',
        b: 'Meryl Streep',
        c: 'Katherine Hepburn',
        d: 'Daniel Day-Lewis',
      },
      correctAnswer: 'c'
    },
    {
      question: 'Which of the following is the top grossing comedy movie?',
      choices: {
        a: 'Home Alone',
        b: 'Bruce Almighty',
        c: 'Meet the Fockers',
        d: 'The Hangover',
      },
      correctAnswer: 'a'
    },
    {
      question: 'Which comedian was paid the most in 2017?',
      choices: {
        a: 'Jeff Dunham',
        b: 'Terry Fator',
        c: 'Sebastian Maniscalco',
        d: 'Jerry Seinfeld',
      },
      correctAnswer: 'd'
    },
    {
      question: 'Which female actor was paid the most in 2017?',
      choices: {
        a: 'Emma Stone',
        b: 'Melissa McCarthy',
        c: 'Jennifer Aniston',
        d: 'Jennifer Lawrence',
      },
      correctAnswer: 'a'
    }
  ];
    


    // // This line of JavaScript "grabs" the main div on the page ("#drink-options");
    // var drinkDiv = document.getElementById("drink-options");

    // // We then use .forEach() to iterate through all the drinks in drinkList.
    // // With each iteration, we perform a series of code operations each time.
    // drinkList.forEach(function(drink) {

    //   // For each drink in the array, we create a new paragraph to hold that text.
    //   // A new paragraph will be created with each iteration of the loop.
    //   var newDrinkP = document.createElement("p");

    //   // We then assign the the text of this paragraph to be the text in the array item.
    //   newDrinkP.textContent = drink;

    //   // We then add the paragraph to the our main div on the page ("#drink-options")
    //   drinkDiv.appendChild(newDrinkP);
    // });