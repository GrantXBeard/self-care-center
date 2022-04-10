var affirmations = [
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',
  'I am in the process of becoming the best version of myself.',
  'I have the freedom & power to create the life I desire.',
  'I choose to be kind to myself and love myself unconditionally.',
  'My possibilities are endless.',
  'I am worthy of my dreams.',
  'I am enough.',
  'I deserve to be healthy and feel good.',
  'I am full of energy and vitality and my mind is calm and peaceful.',
  'Every day I am getting healthier and stronger.',
  'I honor my body by trusting the signals that it sends me.',
  'I manifest perfect health by making smart choices.'
]
var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don’t let yesterday take up too much of today.',
  'Every day is a second chance.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'In the beginning it is you, in the middle it is you and in the end it is you.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday is not today.',
  'The only constant is change.',
  'Onward and upward.',
  'I am the sky, the rest is weather.'
]

var h2 = document.querySelector('h2');
var choiceInputs = document.querySelector('.inputs');
var icon = document.querySelector('.icon');
var message = document.querySelector('.message');
var newForm = document.querySelector('.add-message')
var messageInput = document.querySelector('#add-message')


var addNewButton = document.querySelector('.add-new')
addNewButton.addEventListener('click', addNewMessage)



var messageButton = document.querySelector('.receive');
messageButton.addEventListener('click', showMessage);

var addButton = document.querySelector('.add');
addButton.addEventListener('click', showForm)

var clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearMessage)

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function showMessage() {
  var affirmation = document.querySelector('input[value="affirmation"]');
  var mantra = document.querySelector('input[value="mantra"]');
  event.preventDefault();

  if (affirmation.checked) {
    show(clearButton);
    hide(icon);
    message.classList.remove('hidden','red');
    message.innerText = `${affirmations[getRandomIndex(affirmations)]}!`;
  } else if (mantra.checked) {
    show(clearButton);
    hide(icon);
    message.classList.remove('hidden','red');
    message.innerText = `${mantras[getRandomIndex(mantras)]}!`;
  } else {
    hide(icon);
    hide(clearButton);
    message.classList.remove('hidden');
    message.classList.add('red')
    message.innerText = 'Please make a selection.'
  }
  affirmation.checked =false;
  mantra.checked = false;
}

function showUserMessage(message){
  hide(newForm);
  hide(messageInput);
  hide(addNewButton);
  show(choiceInputs);
  show(messageButton);
  show(addButton);
  clearMessage();
  hide(icon);
  show(clearButton);
  message.innerText = `${message}!`;
}

function addNewMessage(){
  var addAffirmation = document.querySelector('input[value="addaffirmation"]');
  var addMantra = document.querySelector('input[value="addmantra"]');

  if (addAffirmation.checked) {
    h2.classList.add('red');
    affirmations.push(messageInput.value);
    showUserMessage(addaffirmation)
  } else if (addMantra.checked) {
    h2.classList.add('red');
    mantras.push(messageInput.value);
    showUserMessage(addMantra);
  } else {
    h2.classList.add('red');
    h2.innerText = 'Please make a selection';
  }
}

function showForm(){
  h2.innerText = 'Which type of message would you like to add?';
  hide(choiceInputs);
  hide(messageButton);
  hide(addButton);
  show(newForm);
  show(messageInput);
  show(addNewButton);
  clearMessage();
  hide(icon);



}

function clearMessage(){
  hide(message);
  hide(clearButton);
  show(icon);
}

function show(variable){
  variable.classList.remove('hidden');
}

function hide(variable) {
  variable.classList.add('hidden');
}
