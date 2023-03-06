import Controls from "./controls.js"
import Timer from "./timer.js"
import controleAudio from "./Audio.js"


const displayMinutos = document.querySelector('.minutos')
const displaySegundos = document.querySelector('.segundos')
const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnAddTimer = document.querySelector('.addTimer')
const btnSubTimer = document.querySelector('.subTimer')
const btnAudioFloresta = document.querySelector('#audioFloresta')
const btnAudioChuva = document.querySelector('#audioChuva')
const btnAudioCafeteria = document.querySelector('#audioCafeteria')
const btnAudioLareira = document.querySelector('#audioLareira')
const btnsomChuva = document.querySelector('.somChuva')
const btnsomFloresta = document.querySelector('.somFloresta')
const btnsomCafeteria = document.querySelector('.somCafeteria')
const btnsomLareira = document.querySelector('.somLareira')
const audioInicio = document.querySelector('#audioInicial')
const deixarDark = document.querySelector('.Dark')
const deixarClean = document.querySelector('.Clean')
const boxTimer = document.querySelector('.timer')
let setTimerout 
let SomAtual = audioInicio
const bodyHtml = document.querySelector('body')


const SliderFloresta = document.querySelector('#sliderFloresta')
const SliderChuva = document.querySelector('#sliderChuva')
const SliderCafeteria = document.querySelector('#sliderCafeteria')
const SliderLareira = document.querySelector('#sliderLareira')




const Controles = Controls(
  {
    btnPlay,
    btnPause,
    displayMinutos,
    displaySegundos,
  }
)

const controlTimer = Timer(
  {
    displayMinutos,
    displaySegundos,
    updateTimer: Controles.updateTimer,
    setTimerout,
  }
)

const ativarAudio = controleAudio()

btnPlay.addEventListener('click',()=>{

  Controles.Play()
  controlTimer.countDown()
  

})


btnPause.addEventListener('click',()=>{

  Controles.Pause()
  controlTimer.pauseTimer()

})

btnStop.addEventListener('click',()=>{

  Controles.Stop()
  controlTimer.pauseTimer()

})

btnAddTimer.addEventListener('click',()=>{

  controlTimer.addTime()



}
)


btnSubTimer.addEventListener('click',()=>{

controlTimer.subTime()




})





btnsomChuva.addEventListener('click',()=>{
  SliderCafeteria.value = 0
  SliderFloresta.value = 0
  SliderLareira.value = 0

  if(document.querySelector('.cleanSoundSelected')!=null){
    document.querySelector('.cleanSoundSelected').classList.remove('cleanSoundSelected')
  }

  if(document.querySelector('.cleanSlider')!=null){
    document.querySelector('.cleanSlider').classList.remove('cleanSlider')
  }

  
  let somTocar = btnAudioChuva
  ativarAudio.mudarMusica(SomAtual,somTocar,btnsomChuva,SliderChuva)

  if(SomAtual==somTocar) {
    SomAtual = audioInicio
  }else {
    SomAtual = somTocar
  }

   
})





btnsomFloresta.addEventListener('click',()=>{
  SliderChuva.value = 0
  SliderCafeteria.value = 0
  SliderLareira.value=0

  if(document.querySelector('.cleanSoundSelected')!=null){
    document.querySelector('.cleanSoundSelected').classList.remove('cleanSoundSelected')
  }

  if(document.querySelector('.cleanSlider')!=null){
    document.querySelector('.cleanSlider').classList.remove('cleanSlider')
  }
  
  let somTocar = btnAudioFloresta
  ativarAudio.mudarMusica(SomAtual,somTocar,btnsomFloresta,SliderFloresta)
  if(SomAtual==somTocar) {
    SomAtual = audioInicio
  }else {
    SomAtual = somTocar
  }
  
})





btnsomCafeteria.addEventListener('click',()=>{
  SliderFloresta.value=0
  SliderChuva.value=0
  SliderLareira.value=0



  if(document.querySelector('.cleanSoundSelected')!=null){
    document.querySelector('.cleanSoundSelected').classList.remove('cleanSoundSelected')
  }
  if(document.querySelector('.cleanSlider')!=null){
    document.querySelector('.cleanSlider').classList.remove('cleanSlider')
  }
  
  let somTocar = btnAudioCafeteria
  ativarAudio.mudarMusica(SomAtual,somTocar,btnsomCafeteria,SliderCafeteria)
  if(SomAtual==somTocar) {
    SomAtual = audioInicio
  }else {
    SomAtual = somTocar
  }
  
})





btnsomLareira.addEventListener('click',()=>{
  SliderCafeteria.value=0
  SliderChuva.value=0
  SliderFloresta.value=0


  if(document.querySelector('.cleanSoundSelected')!=null){
    document.querySelector('.cleanSoundSelected').classList.remove('cleanSoundSelected')
  }
  if(document.querySelector('.cleanSlider')!=null){
    document.querySelector('.cleanSlider').classList.remove('cleanSlider')
  }
  
  let somTocar = btnAudioLareira
  ativarAudio.mudarMusica(SomAtual,somTocar,btnsomLareira,SliderLareira)
  if(SomAtual==somTocar) {
    SomAtual = audioInicio
  }else {
    SomAtual = somTocar
  }
  
})




deixarDark.addEventListener('click',()=>{
  deixarDark.classList.add('hideColor')
  deixarClean.classList.remove('hideColor')

  bodyHtml.classList.add('darkbody')
  btnPlay.classList.add('darkbody')
  btnPause.classList.add('darkbody')
  btnStop.classList.add('darkbody')
  btnAddTimer.classList.add('darkbody')
  btnSubTimer.classList.add('darkbody')
  boxTimer.classList.add('darkbody')


  btnsomFloresta.classList.add('audioDark')
  btnsomChuva.classList.add('audioDark')
  btnsomCafeteria.classList.add('audioDark')
  btnsomLareira.classList.add('audioDark')

  SliderCafeteria.classList.add('sliderdark')
  SliderChuva.classList.add('sliderdark')
  SliderFloresta.classList.add('sliderdark')
  SliderLareira.classList.add('sliderdark')
}
)

deixarClean.addEventListener('click',()=>{
  deixarDark.classList.remove('hideColor')
  deixarClean.classList.add('hideColor')

  bodyHtml.classList.remove('darkbody')
  btnPlay.classList.remove('darkbody')
  btnPause.classList.remove('darkbody')
  btnStop.classList.remove('darkbody')
  btnAddTimer.classList.remove('darkbody')
  btnSubTimer.classList.remove('darkbody')
  boxTimer.classList.remove('darkbody')


  btnsomFloresta.classList.remove('audioDark')
  btnsomChuva.classList.remove('audioDark')
  btnsomCafeteria.classList.remove('audioDark')
  btnsomLareira.classList.remove('audioDark')

  SliderCafeteria.classList.remove('sliderdark')
  SliderChuva.classList.remove('sliderdark')
  SliderFloresta.classList.remove('sliderdark')
  SliderLareira.classList.remove('sliderdark')

}
)


SliderFloresta.addEventListener('change', ()=>{
  let value = SliderFloresta.value
  SomAtual.volume = value/100

})

SliderChuva.addEventListener('change', ()=>{
  let value = SliderChuva.value
  SomAtual.volume = value/100

})

SliderLareira.addEventListener('change', ()=>{
  let value = SliderLareira.value
  SomAtual.volume = value/100

})

SliderCafeteria.addEventListener('change', ()=>{
  let value = SliderCafeteria.value
  SomAtual.volume = value/100

})






