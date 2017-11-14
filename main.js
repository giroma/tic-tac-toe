document.addEventListener('DOMContentLoaded', function() {

  var div1 = document.querySelector('.div1')

  for (var i = 1; i < 10; i++) {
    var divs = ['div' + 'i']
    div1.addEventListener('click', function () {
      if ((i % 2) === 1) {
        div1.innerHTML = 'X'
        console.log('x');
      }
      else {
        div1.innerHTML = 'O'
        console.log('o');
      }
    })
  }
})
