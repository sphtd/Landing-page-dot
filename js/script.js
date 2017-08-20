document.addEventListener('DOMContentLoaded', function(event) {
  initializeEvents();
});

function initializeEvents() {
  var inlines = document.getElementsByClassName('inline');
  for(var i = 0; i < inlines.length; i++) {
    inlines[i].addEventListener('mouseover', function() {
    var background = this.getElementsByClassName('background')[0];
    background.classList.add('backgroundTouched');
    });
    inlines[i].addEventListener('mouseout', function() {
    var background = this.getElementsByClassName('background')[0];
    background.classList.remove('backgroundTouched');
  });
  }
}
