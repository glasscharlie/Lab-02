'use strict';

var number = 4;
var string = 'string';
var booleon = true;

var userName = prompt('What\'s your name?');
console.log('userName: '+ userName);
alert('Hello '+userName+', welcome to my about me page, I am going to ask you 5 questions to see how well you know me!');

var bornInWashington = prompt('Question 1: Was I born in Washington?');
console.log('bornInWashington: '+ bornInWashington);
bornInWashington = bornInWashington.toLowerCase();
if(bornInWashington === 'yes' || bornInWashington === 'y') {
  alert('Correct, I was born in Woodinville, Washington!');
}
else {
  alert('Sorry, I was born in Woodinville, Washington');
}