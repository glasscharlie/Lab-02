'use strict';

var number = 0;

var userName = prompt('What\'s your name?');
// console.log('userName: '+ userName);
alert('Hello ' + userName + ', welcome to my about me page, I am going to ask you 5 questions to see how well you know me!');

function born(){
  var bornInWashington = prompt('Question 1: Was I born in Washington?');
  // console.log('bornInWashington: '+ bornInWashington);
  bornInWashington = bornInWashington.toLowerCase();
  if (bornInWashington === 'yes' || bornInWashington === 'y') {
    alert('Correct, I was born in Woodinville, Washington!');
    number++;
  }
  else {
    alert('Incorrect, I was born in Woodinville, Washington');
  }
}
born();

function handed(){
  var leftHanded = prompt('Am I left handed?');
  // console.log('leftHanded: '+leftHanded);
  leftHanded = leftHanded.toLowerCase();
  if (leftHanded === 'no' || leftHanded === 'n') {
    alert('Correct, I am not left handed, except when it comes to shooting pool');
    number++;
  }
  else {
    alert('Incorrect, I am not left handed, except when it comes to playing pool');
  }
}
handed();

function lived(){
  var canadian = prompt('Have I ever lived outside of Washington?');
  // console.log('canadian: '+canadian);
  canadian = canadian.toLowerCase();
  if (canadian === 'yes' || canadian === 'y') {
    alert('Correct, I lived in Canada for awhile when I was younger');
    number++;
  }
  else {
    alert('Incorrect, I lived in Canada for awhile when I was younger');
  }
}
lived();

function charmanader(){
  var tattoo = prompt('Do I have a tattoo?');
  // console.log('tattoo: '+tattoo);
  tattoo = tattoo.toLowerCase();
  if (tattoo === 'yes' || tattoo === 'n') {
    alert('Correct, I have a charmanader tattoo on my left shoulder');
    number++;
  }
  else {
    alert('Incorrect, I have a charmander tattoo on my left shoulder');
  }

  var codingBackground = prompt('Do I have a background in coding?');
  // console.log('codingBackground '+codingBackground);
  codingBackground = codingBackground.toLowerCase();
  if (codingBackground === 'no' || codingBackground === 'n') {
    alert('Correct, I do not have a background in coding');
    number++;
  }
  else {
    alert('Incorrect, I do not have a background in coding');
  }
}
charmanader();



function favoriteNumber(){
  var tries = 4;
  var answer = 3;


  while (tries > 0) {
    var guess = prompt('What is my favorite number between 1 and 10');
    console.log('guess: ' + guess);
    if (guess > answer) {
      alert('Your guess is too high.');
    }
    else if (guess < answer) {
      alert('Your guess is too low');
    }

    else {
      alert('Great job, my favorite number is 3!');
      number++;
      { break; }
    }
    tries = tries - 1;
    while(tries === 0) {
      alert('You ran out of tries, my favorite number is 3');
      { break; }
    }
  }
}
favoriteNumber();


function movies(){
  var favoriteMovies = ['momento', 'breakfast club', 'shawshank redemption', 'harry potter', 'fast and the furious', 'love actually'];

  for (var i = 0; i < 5; i++) {
    var answerMovies = prompt('Can you guess one of my favorite movies?');
    //console.log('answerMovies: ' + answerMovies);
    if (favoriteMovies.includes(answerMovies)) {
      alert('Good job, ' + answerMovies + ' is one of my favorite movies!');
      alert('My favorite movies are ' + favoriteMovies);
      number++;
      break;
    } else {
      alert(answerMovies + 'is not one of my favorite movies, please try again!');
    }
  }
}
movies();




alert('Thanks for taking my short about me quiz, ' + userName + '!, you got ' + number + ' correct out of 7');

