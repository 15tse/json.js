function countdownTimer(){
    let counter = 10;
    const interval = setInterval(()=>{
        console.log(counter);
        counter--;
        if(counter===0){
            clearInterval(interval);
            console.log("done");
        }
        },1000);

  }
  countdownTimer();