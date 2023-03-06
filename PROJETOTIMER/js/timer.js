export default function Timer(
  {
    displayMinutos,
    displaySegundos,
    updateTimer,
    setTimerout
  }
  
  ){

  function countDown(){
setTimerout=setTimeout(()=>{
            let minutes = Number(displayMinutos.textContent)
            let seconds = Number(displaySegundos.textContent)
            
            if(seconds<=0){
              if(minutes<=0){
                return
              }

              seconds = 59
              --minutes
              updateTimer(minutes,seconds)

              

            }else{
              updateTimer(minutes,--seconds)

            }
            
            
            countDown()
          
          


        },1000)


}

function pauseTimer() {

  clearTimeout(setTimerout)




}

function addTime(){
  let minutes = Number(displayMinutos.textContent)
  let seconds = Number(displaySegundos.textContent)

  updateTimer(minutes+5,seconds)

}

function subTime() {
  let minutes = Number(displayMinutos.textContent)
  let seconds = Number(displaySegundos.textContent)

  if(minutes<=0){
    alert('Não há mais tempo para ser reduzido!')
    return
  }

  if(minutes<=5){
    updateTimer(minutes-1,seconds)

  } else {
    updateTimer(minutes-5,seconds)

  }


}


  return {
    countDown,
    pauseTimer,
    addTime,
    subTime


  }






}