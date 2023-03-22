function Convert(){
    let pace = parseInt(speed.value);
    if(pace < 0){
        speed= "The car is in reverse"
    }else if(pace <= 0){
      speed = "Car is not moving"
    }else if(pace <= 70){
      speed = "OK"
    }else if(pace <= 75){
        speed = "-1 merit point";
    }else if(pace <= 80){
      speed = "-2 merit points";
    }else if(pace <= 85){
      speed = "-3 merit points";
    }else if(pace <= 90){
      speed = "-4 merit points";
    }else if(pace <= 95){
      speed = "-5 merit points";
    }else if(pace <= 100){
      speed = "-6 merit points";
    }else if(pace <= 105){
      speed = "-7 merit points";
    }else if(pace <= 110){
      speed = "-8 merit points";
    }else if(pace <= 115){
      speed = "-9 merit points";
    }else if(pace <= 120){
      speed = "-10 merit points";
    }else if(pace <= 125){
      speed = "-11 merit points";
    }else if(pace > 125){
      speed = "License Suspended";
    }else{
      speed = "Please fill out correctly";
    }
    
    console.log(speed)
    resultSpeed.innerText = `${speed}`;
  }
  