// pegar todas teclas//

const keys = document.querySelectorAll('.key')

function playNote(event) {
  let audioKeyCode = getKeyCode(event)

  // tecla digitada ou pressionada
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
  //se tecla existe
  const cantFoundAnyKey = !key

  if (cantFoundAnyKey) {
    return
  }

  playAudio(audioKeyCode)
}

function addPlayingClass(key) {
  key.classList.add('playing')
}

function getKeyCode(event) {
  let keyCode

  const isKeyboard = event.type === 'keydown'
  if (isKeyboard) {
    keyCode = event.keyCode
  } else {
    keyCode = event.target.dataset.key
  }

  return keyCode
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
  audio.currentTime = 0
  audio.play()
}

function removePlayingClass(event) {
  event.target.classList.remove('playing')
}

function registerEvents() {
  //clicar com mouse//

  keys.forEach(function (key) {
    key.addEventListener('click', playNote)
    key.addEventListener('transitionend', removePlayingClass)
  })

  // digitar no teclado//

  window.addEventListener('keydown', playNote)
}

window.addEventListener('load', registerEvents)