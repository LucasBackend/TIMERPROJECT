export default function Controls({
  btnPlay,
  btnPause,
  displayMinutos,
  displaySegundos
}
  
  
  ){

function Play() {

btnPause.classList.remove('hide')
btnPlay.classList.add('hide')


}

function Pause() {

btnPause.classList.add('hide')
btnPlay.classList.remove('hide')


}


function updateTimer(minutes,seconds) {
  displayMinutos.textContent = String(minutes).padStart(2,0)
  displaySegundos.textContent = String(seconds).padStart(2,0)


}

function Stop() {
  btnPause.classList.add('hide')
  btnPlay.classList.remove('hide')
  updateTimer(25,0)

}








return {
  Play,
  Pause,
  updateTimer,
  Stop

}


}