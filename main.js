document.addEventListener('DOMContentLoaded', function() {

  var div = document.querySelector('div')
  var body = document.querySelector('body')


    var i = 1
  body.addEventListener('click', function (e) {
    if ((i % 2) === 1) {
      e.target.innerHTML = 'X'
      i++
    }
    else {
      e.target.innerHTML = 'O'
      i++
    }
  })

})
