document.addEventListener('DOMContentLoaded', function() {

  var i = 1
  document.body.addEventListener('click', function (e) {
    if (e.target.innerText != "") return

      if ((i % 2) === 1) {
        e.target.innerHTML = 'X'
        i++
        divs.push(e.target.className)
      }
      else {
        e.target.innerHTML = 'O'
        i++
        divs.push(e.target.className)
      }
      console.log(e.target.className);

  })
})
