//Accessing my input from my html file
let speedInput = document.getElementById("Speed")


// Speed detector function added an event
let calculate = document.querySelector("#Calculate")
calculate.addEventListener("click", () => {
  let speed = parseInt(speedInput.value)
  if(speed <= 70){
    alert("Ok")
  }else{
    //Calculation for my points
    const demeritPoints = Math.floor((speed - 70)/5)
    if(demeritPoints > 12){
      alert("license Suspended")
    }else{
      alert(`Your points: ${demeritPoints}`)
    }
  }
})
