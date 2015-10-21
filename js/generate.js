//constructor
var Author = function (name, shortname, text) {
  this.name = name;
  this.shortname = shortname;
  this.text = text;
}

//objects generated
var coates = new Author('Ta-Nehasi Coates', 'coates', 'I started this narrative bibliography for \"The Case for Reparations\" back in June, but, regrettably, I didn\'t finish the final section before I left for the summer. Some time has passed but I think it is very important that, as much as possible, I complete this public acknowledgement of all the previous work that contributed to my own. As I\'ve written, the process began with the understanding that racism was a \"done thing\" and not an irrepressible clash between people of different hues. Another way of putting this is to say white supremacy is not an invention of white people; white people are an invention of white supremacy. The second step was understanding that the most flagrant demonstration of white supremacy, enslavement, is not ancillary to American history but at its very roots. The enslavement of Africans is foundational to the United States, and it is tough to imagine this country without it. The third step was understanding that the legacy of that enslavement gave us a suite of policies that injured—and continues to injure—people who are alive and well and living in North Lawndale.  Knowing those three things, the way forward became clear to me.  I first seriously grappled with the concept reparations in my early 20s, in the form Randall Robinson\'s moving argument in The Debt. A taut and beautifully rendered book, The Debt mostly focuses on enslavement. But I remember sitting with Robinson some years ago—he was the subject of my first big profile for a national magazine—and hearing him almost off-handedly note that housing discrimination alone is estimated to have cost black people billions. And I recall dimly thinking, \"Some of those people are alive.\" One critique made by those who oppose reparations holds that the claim is null because it was made so long after the actual injury, when all members of the injured class were dead. But this is not true of a claim rooted in housing discrimination. Maps show who lived where. Records of the policies are clear. Histories have been written outlining the execution of these policies and their effects. Indeed, a paper trail probably exists for those who\'d been directly refused loans. I knew a reparations claim could be made by living victims.  But was that actually something \"new?\" And was the \"Everybody who was enslaved is dead\" argument really an argument, or a component of some larger device? In this pursuit, the historian Roy E. Finkenbine was indispensable in shaping my thinking. His article on Belinda Royall\'s petition and her early claims of redress for enslavement established that reparations was not an \"after-the-fact\" claim; in fact blacks and whites had made the claim long before enslavement ended. For many of the same reasons, historian Mary Frances Berry\'s biography of reparations activist Callie House—My Face Is Black Is True—was equally important. Callie House argued for \"pensions\" for enslaved black people. Again, this was a claim made while the direct victims were alive.  Finally, I came upon this issue of the Journal of African-American History, totally devoted to reparations. The issue is indispensable for understanding the history of the reparations movement. I am specifically indebted to anthropologist James M. Davidson for his article, \"Encountering the Ex-Slave Reparations Movement From the Grave.\" Taken together I understood that the claim for reparations was—at the very least—as old as the United States of America itself. The claim for reparations did not begin a century after the crime, but was made at the time of the crime and immediately after.  Now I began to see the entire device—a method by which you exploit a people and then clean yourself of all responsibility. An act is committed—enslavement, for instance. The victims make a credible claim. The claim is disputed with poor logic. (\“They have been taught Christian civilization, and to speak the noble English language instead of some African gibberish. The account is square with the ex‑slaves.\”) The people making the claim eventually die. At that point the claim is acknowledged as having been credible, but because the claimants are dead, nothing can be done.');
// var douglass = new Author('Frederick Douglass');
// var dubois = new Author('W.E.B. DuBois');
// var garvey = new Author('Marcus Garvey');
// var hooks = new Author('Bell Hooks');
// var kingjr = new Author('Martin Luther King Jr');
// var lincoln = new Author('Abraham Lincoln');
// var malcolmx = new Author('Malcolm X');
// var misc = new Author('Black History Compilation');
// var obama = new Author('Barak Obama');
// var truth = new Author('Sojourner Truth');
// var washington = new Author('Booker T. Washington');
// var wells = new Author('Ida B. Wells');
// var west = new Author('Cornel West');

//array of objects
var authorsArray = [coates/*, douglass, dubois, garvey, hooks, kingjr, lincoln, malcolmx, misc, obama, truth, washington, wells, west*/]

//generate a random number
//var random = Math.floor(Math.random() * (13 - 0 + 1) +0);
//var randomAuthor = authors[random];


//this function will run onClick.  The meat of this js.  Needs to log the form data for
//parameters, grab text & manipulate it based on those params, then feed it to html.  Also save these (in
//an array) choices to localStorage.
var clicked = function(event) {
  event.preventDefault();
  //Following Lines assign variables to user inputs in the html form, Logs to console and places them in an array.
  var formAuthor = document.getElementById('authorname').value;
  console.log(formAuthor);
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

  var generatorStorage = JSON.stringify(userEntry);
  localStorage.setItem("select", generatorStorage);
  //localStorage(("select" + num), generatorStorage);

  //BEGIN IPSUM GENERATOR

  for (var i = 0; i < authorsArray.length; i++) {
    // if (formAuthor === authors[i].shortname) {
    // }
      var str = authorsArray[i].text
      // var str = authorsArray[i].text;
      // console.log(authorsArray[i]);
      // console.log(formAuthor);
  };

  //var counter = 0
  var num = formQuantity;
  var font = formFont;
  var placement = document.getElementById('generatedtext');

  var wordCount = str.match(/(\w+)/g).length;
  //console.log(wordCount);

  if (formParaWords === "Paragraphs" && formPTag) {
    //take str and split it into num parts and add ptags

  } else if (formParaWords === "Words" && formPTag) {
    //take str and split it into a new string with only num words and wrap it in ptags?
    str = str.split(" ").splice(0,num).join(" ");
    str = "&lt;p&gt" + str + "&lt/p&gt"
  } else if (formParaWords === "Paragraphs") {

  } else if (formParaWords === "Words") {
    str = str.split(" ").splice(0,num).join(" ");

  };

  //assign section id='generatedtext' a classname based on font choice
  if (formFont === "lora") {
    document.getElementById('generatedtext').className = "lora";
  } else if (formFont === "poiret1") {
    document.getElementById('generatedtext').className = "poiret1"
  } else if (formFont === "o2") {
    document.getElementById('generatedtext').className = "o2";
  } else if (formFont === "changa1") {
    document.getElementById('generatedtext').className = "changa1";
  } else if (formFont === "pmarker") {
    document.getElementById('generatedtext').className = "pmarker";
  }

  placement.innerHTML = str;

} //END OF CLICKED FUNCTION

//check local storage for form content and repopulate dropdown menue of authors
var authors = document.getElementById('authorname');

function fillAuthor() {
  if (localStorage.getItem("select")) {
    var getForm = JSON.parse(localStorage.getItem("select"));
    if (getForm[0]) {
      for (var i in authors) {
        if (authors[i].value === getForm[0]) {
          authors[i].selected = true;
          return;
        }
      }
    }
  }
}
fillAuthor();

//check local storage for form content and repopulate par or word quantity
var formQuant = document.getElementById('quantity');

function keepQuantity() {
  if (localStorage.getItem("select")) {
    var getForm = JSON.parse(localStorage.getItem("select"));
    if (getForm[1]) {
      formQuant.value = getForm[1]
    }
  }
};
keepQuantity();

//check local storage for form content and repopulate word or paragraph radio button
var getPar = document.getElementById('para');
var getWord = document.getElementById('words');

function keepParWord() {
  if (localStorage.getItem("select")) {
    var getForm = localStorage.getItem("select");
    getForm = JSON.parse(getForm);
    if (getForm[2] === "Paragraphs") {
      getPar.checked = true;
    } else if (getForm[2] === "Words") {
      getWord.checked = true;
    }
  }
};
keepParWord();

//check local storage for form content and repopulate checkbox
var checkBox = document.getElementById('pTag');

function fillCheckbox() {
  if (localStorage.getItem("select")) {
    var getForm = localStorage.getItem("select");
    getForm = JSON.parse(getForm);
    if (getForm[3]) {
      checkBox.checked = true;
    }
  }
};
fillCheckbox();

//check local storage for form content and repopulate dropdown menue for fonts
var fonts = document.getElementById('fontname');

function keepFont() {
  if (localStorage.getItem("select")) {
    var getForm = JSON.parse(localStorage.getItem("select"));
    if (getForm[4]) {
      for (var i in fonts) {
        if (fonts[i].value === getForm[4]) {
          fonts[i].selected = true;
          return;
        }
      }
    }
  }
}
keepFont();

//Event Listener for 'Generate Ipsum' Button
var generate = document.getElementById('generate');
generate.addEventListener('click', clicked, false);
