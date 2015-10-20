//constructor
var Author = function (name, path, p1, p2, p3, p4, p5) {
  this.name = name;
  this.path = path;
  this.p1 = p1;
  this.p2 = p2;
  this.p3 = p3;
  this.p4 = p4;
  this.p5 = p5;
}

//objects generated
var coates = new Author('Ta-Nehasi Coates');
var douglass = new Author('Frederick Douglass');
var dubois = new Author('W.E.B. DuBois');
var garvey = new Author('Marcus Garvey');
var hooks = new Author('Bell Hooks');
var kingjr = new Author('Martin Luther King Jr');
var lincoln = new Author('Abraham Lincoln');
var malcolmx = new Author('Malcolm X');
var misc = new Author('Black History Compilation');
var obama = new Author('Barak Obama');
var truth = new Author('Sojourner Truth');
var washington = new Author('Booker T. Washington');
var wells = new Author('Ida B. Wells');
var west = new Author('Cornel West');

//array of objects
var authors = [coates, douglass, dubois, garvey, hooks, kingjr, lincoln, malcolmx, misc, obama, truth, washington, wells, west]

//generate a random number
var random = Math.floor(Math.random() * (13 - 0 + 1) +0);

var randomAuthor = authors[random];




//this function will run onClick.  The meat of this js.  Needs to log the form data for
//parameters, grab text & manipulate it based on those params, then feed it to html.  Also save these (in
//an array) choices to localStorage.
var clicked = function(event) {
  event.preventDefault();
  //Following Lines assign variables to user inputs in the html form, Logs to console and places them in an array.
  var formAuthor = document.getElementById('authorname').value;
  var formQuantity = document.getElementById('quantity').value;
  if (document.getElementById('para').checked) {
    var formParaWords = "Paragraphs";
    } else if (document.getElementById('words').checked) {
    var formParaWords = "Words"
  };

  if (document.getElementById('pTag').checked) {
    var formPTag = true;
  } else {
    var formPTag = false;
  };

  var formFont = document.getElementById('fontname').value;

  console.log(formAuthor, formQuantity, formParaWords, formPTag, formFont);
  var userEntry = [formAuthor, formQuantity, formParaWords, formPTag, formFont]
}


//Event Listener for 'Generate Ipsum' Button
var generate = document.getElementById('generate');
generate.addEventListener('click', clicked, false);

