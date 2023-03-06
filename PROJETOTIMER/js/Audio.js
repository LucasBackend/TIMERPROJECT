export default function controleAudio(){

function mudarMusica(Somparar,SomTocar,btncor,slider){

  if(Somparar==SomTocar){
    btncor.classList.remove('cleanSoundSelected')
    Somparar.pause()
    slider.classList.remove('cleanSlider')
    slider.value = 0
   
  } else{

  btncor.classList.add('cleanSoundSelected')
  Somparar.pause()
  SomTocar.play()
  SomTocar.volume = 0.5
  SomTocar.loop = true
  slider.classList.add('cleanSlider')
  slider.value = 50
  
  
  }

 
}

return {
  mudarMusica,

}


}