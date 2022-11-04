setInterval(function(){                                //creat a function to perform a clock events
    const clock = document.querySelector(".display");
    let time = new Date();
    let sec = time.getSeconds();//to put sec
    let min = time.getMinutes();//to put min
    let hr = time.getHours();//to put hour
    let day = 'AM';//to find time is am or pm
    if(hr > 12){
      day = 'PM';
      hr = hr - 12;
    }
    if(hr == 0){    
      hr = 12;
    }
    if(sec < 10){     
      sec = '0' + sec;
    }
    if(min < 10){
      min = '0' + min;
    }
    if(hr < 10){
      hr = '0' + hr;
    }
    clock.textContent = hr + ':' + min + ':' + sec + " " + day;//print (hr:min:sec:am/pm) 
  });