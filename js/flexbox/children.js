var ulNav = document.getElementsByClassName('row0');
var liNav = ulNav[0].getElementsByTagName('li');

var flexGrow = document.getElementById('flexGrow');
var posFlexGrow = flexGrow.offsetTop;

var flexShrink = document.getElementById('flexShrink');
var posFlexShrink = flexShrink.offsetTop;

var flexBasis = document.getElementById('flexBasis');
var posFlexBasis = flexBasis.offsetTop;

var order = document.getElementById('order');
var posOrder = order.offsetTop;

var alignSelf = document.getElementById('alignSelf');
var posAlignSelf = alignSelf.offsetTop;

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
  } else if (scroll > posAlignSelf) {
    liNav[4].setAttribute('class', 'activ');
    liNav[3].removeAttribute('class', 'activ');
  }
};
