var ulNav = document.getElementsByClassName('row0');
var liNav = ulNav[0].getElementsByTagName('li');

var flexGrow = document.querySelector('#flexGrow');
var posFlexGrow = flexGrow.offsetTop;

var flexShrink = document.querySelector('#flexShrink');
var posFlexShrink = flexShrink.offsetTop;

var flexBasis = document.querySelector('#flexBasis');
var posFlexBasis = flexBasis.offsetTop;

var order = document.querySelector('#order');
var posOrder = order.offsetTop;

var alignSelf = document.querySelector('#alignSelf');
var posAlignSelf = alignSelf.offsetTop;

var chapter = document.querySelector('#chapter');
var posChapter = chapter.offsetTop;

window.onscroll = function () {
  var scroll = window.scrollY;
  scroll = scroll+300;
  if ( scroll >= 300 && scroll < posFlexGrow) {
    liNav[0].removeAttribute('class', 'activ');
  } else if (scroll > posFlexGrow && scroll < posFlexShrink) {
    liNav[0].setAttribute('class', 'activ');
    liNav[1].removeAttribute('class', 'activ');
  } else if (scroll > posFlexShrink && scroll < posFlexBasis) {
    liNav[0].removeAttribute('class', 'activ');
    liNav[1].setAttribute('class', 'activ');
    liNav[2].removeAttribute('class', 'activ');
  } else if (scroll > posFlexBasis && scroll < posOrder) {
    liNav[1].removeAttribute('class', 'activ');
    liNav[2].setAttribute('class', 'activ');
    liNav[3].removeAttribute('class', 'activ');
  } else if (scroll > posOrder && scroll < posAlignSelf) {
    liNav[2].removeAttribute('class', 'activ');
    liNav[3].setAttribute('class', 'activ');
    liNav[4].removeAttribute('class', 'activ');
  } else if (scroll > posAlignSelf  && scroll < (posChapter - 300)) {
    liNav[3].removeAttribute('class', 'activ');
    liNav[4].setAttribute('class', 'activ');
    liNav[5].removeAttribute('class', 'activ');
  } else {
    liNav[4].removeAttribute('class', 'active');
    liNav[5].setAttribute('class', 'activ');
  }
};
