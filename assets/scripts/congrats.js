let frame = 1
function congrats () {
  let danceMan = ''
  if (frame % 2 === 0) {
    danceMan = '┏(^o^)┛'
  } else {
    danceMan = '┗(^o^)┓'
  }
  document.getElementById('congrats').innerHTML = danceMan + 'Congratulations! You have successfully set up your own public server through AWS!' + danceMan
  frame += 1
}
function write () {
  setInterval(function () { congrats() }, 300)
}
