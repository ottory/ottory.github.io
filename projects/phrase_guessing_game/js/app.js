///******************************************************************************
///Created by: Andrew Ryan
///Created on: 09/02/2020
///Description: My first programmed game.  A phrase guessing game.
///******************************************************************************


// Grab data from document
const qwerty = document.getElementById('qwerty');  //grabs the qwerty id 
const randomChosenPhrase = document.getElementById('phrase'); // grabs the phrase id 
const startGameButton = document.querySelector('.btn__reset'); //grab class of .btn__reset
const overlay = document.getElementById('overlay');  // grab the overlay id

const resetGameButton = document.createElement('button');   //create a button 
resetGameButton.textContent = 'Play Again';            //label the button 
resetGameButton.className = 'resetButton';             //newly created button a class so we can grab it/style it

let missedGuesses = 0;                                  ///missed guesses started at 0 

 
/////Description: Created an array of phrases.
const completePhrases = [
        'can of corn',
        'go big or go home',
        'penuts and crackerjacks',
        'grand slam',
        'out in left field'
];


/////INPUT: An array of phrases. 
/////OUTPUT: Single characters of one phrase in an array.
/////Description: This takes a phrase from an array and splits it into singel characters.
const getRandomPhraseAsArray = (arr) => {
        const randomNumber = Math.floor(Math.random() * completePhrases.length);                //gives a random number
        let randomPhrase = completePhrases[randomNumber];                                      //creates a index of random number
        const splitRandomPhrase = randomPhrase.split('',);                      //splits the random phrase up in a string of letters 
        return splitRandomPhrase;                                              //returns the value of random phrase
}
 

/////INPUT: Single characters belonging to one phrase array.
/////OUTPUT: 
/////Description:  Formats and displays individuals characters.
function addPhraseToDisplay(arr)  {                                   ////the function that accepts array
        for (let i = 0; i < chosenPhraseLetters.length; i ++) {         // loop through the arr
                let loopedPhraseLetter = chosenPhraseLetters[i];      //the looped phrase letter
                const listElement = document.createElement('li');                // create a list item 
                listElement.textContent = loopedPhraseLetter;                  //put the actual letter into a container called loopedPhraseLetter
                const ulElement = document.querySelector('#phrase ul');        //grab the phrase id and <ul> put it in a container
                
                if (listElement.textContent !== " ") {                           ///if theres a letter and not a space
                         listElement.className = 'letter';                       //add class name letter to the <li>
                } else {
                         listElement.className = 'space';                        // otherwise add a class name .space to the <li>
                }
                  
                ulElement.appendChild(listElement);                              /// append the listElements text content(the loopedPhraseLetter) to the ulElement 
        }
}
  

/////INPUT: Button clicked by user from qwerty keyboard.
/////OUTPUT:
/////Description: Compares guessed button to the text of the letter at the current index. If they match
/////             add the class "show". If they do not match take away a heart.            
const checkLetter = button => { 
        let allClassLetters = document.querySelectorAll('.letter');           //store all of the li elements with class letter
        let heart = document.querySelector(".tries > img[src= 'images/liveHeart.png']");
        let matchFound = false;                           //variable to store if a match is found and give it an initial value of null
                                         
        for (i = 0; i < allClassLetters.length; i ++) {                         ///loop through all the elements with class name letter
               
                if (button.textContent === allClassLetters[i].textContent ){  // compare text of the letter at the current index to text of button
                        allClassLetters[i].classList.add('show');             //add the show class to the letter class name  
                        matchFound = true;
                } 
                
                                 
        }
        
        if ( matchFound === false )  {                                          ////false if no match is found
                heart.setAttribute("src", "images/lostHeart.png");              ///change the picture to the lost heart
                missedGuesses++;                                                ///increment the missedGuesses by1
                
        }
       
}

/////INPUT: None
/////OUTPUT:None
/////Description: Compares # of <li> with class "letter" and # of <li> with class "show".  If equal win... 
/////             If number of wrong guesses >=5 then display "lose" class.     
function checkWin() {
        const classLetter = document.querySelectorAll('.letter');                 //get all the class="letter"
        const classShow = document.querySelectorAll('.show');                     // get all the class="show"
        const hidePhrase = document.getElementById('phrase');                     // grab the phrase
       
        
         if (classLetter.length === classShow.length) { 
                hidePhrase.style.display = 'none';                                 //hide the phrase
                overlay.className = 'win';                                        //add the overlay to the win class                                   
                overlay.firstElementChild.textContent = "You win!";              //change the text of the button to read "You Win"
                overlay.style.display = 'flex';                                 //overlay display to flex
                startGameButton.style.display = 'none';                         //hide the start button 
                overlay.appendChild(resetGameButton);                           //add resetButton to page
                           
        } 
        else if (missedGuesses >= 5) {                                         //if missedGuessed is >= 5 do something
                hidePhrase.style.display = 'none';                             //hide the phrase
                overlay.className = 'lose';                           //change the overlay class name to lose                 
                overlay.firstElementChild.textContent = "Sorry, not a winner";   //change the text of the button to "you lost"
                overlay.style.display = 'flex';                       //overlay display to flex
                startGameButton.style.display = 'none';                        //hide the Start button 
                overlay.appendChild(resetGameButton);                   // add resetButton to page
               
                     
        }
        
        }

///******************************************************************************/////
///**********************START GAME, HIDE START SCREEN, RESET GAME************************/////
///*****************************************************************************/////

//Description: When a user clicks the "Start" button, hide the overlay to reveal the game.
 startGameButton.addEventListener('click', () => { 
        overlay.style.display = 'none';
});

//Description: When a user clicks the "Play again" button, restart the game. 
resetGameButton.addEventListener('click', (event) => {
        if (event.target = resetGameButton){
               window.location.reload();
        }
});

const chosenPhraseLetters = getRandomPhraseAsArray(completePhrases);       // variable with storedPhrases as argument
addPhraseToDisplay(chosenPhraseLetters);  

/// add an event listener to the keyboard //////
qwerty.addEventListener('click', (e) => {
        const button = e.target; 
        if (e.target.tagName === 'BUTTON') {        
               button.className = 'chosen';       
               button.disabled = 'true'; 
                if (button.className === 'keyrow'){
                       button.disabled == 'true';
               }
                //Passing in the button the user click to compare against phrase. 
                checkLetter(button);
        
               //Seeing if the player won or lost.
                checkWin(); 

        
        }
        
}); 


  