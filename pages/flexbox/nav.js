var ulNav = document.getElementsByClassName('row0');
var liNav = ulNav[0].getElementsByTagName('li');

var introduction = document.getElementById('introduction');
var posIntro = introduction.offsetTop;

var program = document.getElementById('program');
var posProgram = program.offsetTop;

var ressources = document.getElementById('ressources');
var posRessources = ressources.offsetTop;

window.onscroll = function () {
  var scroll = window.scrollY;
  scroll = scroll+300;
  if ( scroll >= 300 && scroll < posIntro) {
    liNav[0].removeAttribute('class', 'activ');
  } else if (scroll > posIntro && scroll < posProgram) {
    liNav[0].setAttribute('class', 'activ');
    liNav[1].removeAttribute('class', 'active');
  } else if (scroll > posProgram && scroll < posRessources) {
    liNav[1].setAttribute('class', 'activ');
    liNav[0].removeAttribute('class', 'active');
    liNav[2].removeAttribute('class', 'active');
  } else if (scroll > posRessources){
    liNav[1].removeAttribute('class', 'active');
    liNav[2].setAttribute('class', 'activ');
  }
};
