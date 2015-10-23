//array of objects
var authorsArray = [coates, douglas, dubois, garvey, hooks, kingjr, lincoln, malcolmx, obama, truth, washington, wells, west]

//this function will run onClick. Logs the form data for localstorage, gets text data, and manipulates text based on form submission.
var clicked = function(event) {
  event.preventDefault();
  //Following Lines assign variables to user inputs in the html form, Logs to console and places them in an array.
  var formAuthor = document.getElementById('authorname').value;
  //console.log(formAuthor);
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

  //console.log(formAuthor, formQuantity, formParaWords, formPTag, formFont);
  var userEntry = [formAuthor, formQuantity, formParaWords, formPTag, formFont]

  var generatorStorage = JSON.stringify(userEntry);
  localStorage.setItem("select", generatorStorage);

  //BEGIN IPSUM GENERATOR
  for (var i =0; i < authorsArray.length; i++) {
    if (formAuthor === authorsArray[i].shortname) {
      str = authorsArray[i].text;
      //console.log(str);
    };
  }

  //var counter = 0
  var num = formQuantity;
  var font = formFont;
  var parag;
  var placement = document.getElementById('generatedtext');
  var j = [];

  if (formParaWords === "Paragraphs" && formPTag) {
    //take str and split it into num parts and add ptags
    for (var i =0; i < authorsArray.length; i++) {
        if (formAuthor === authorsArray[i].shortname) {
          parag = authorsArray[i].para;
        };
      };
      for (var i = 0; i < formQuantity; i++) {
        j.push("<p>" + "&lt;p&gt" + parag[i] + "&lt/p&gt");
      };
      str = j;
      //console.log(str);

  } else if (formParaWords === "Words" && formPTag) {
    //take str and split it into a new string with only num words and wrap it in ptags
    var splitStr = str.split(" ").splice(0,num).join(" ");
    str = "&lt;p&gt" + splitStr + "&lt/p&gt";

  } else if (formParaWords === "Paragraphs") {
      for (var i =0; i < authorsArray.length; i++) {
        if (formAuthor === authorsArray[i].shortname) {
          parag = authorsArray[i].para;
        };
      };
      for (var i = 0; i < formQuantity; i++) {
        j.push("<p>" + parag[i]);
      };
        str = j;
        //console.log(str);

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
