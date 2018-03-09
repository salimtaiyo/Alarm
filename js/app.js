
//setting the interval of the clock to 1sec
setInterval(timer, 1000);

// timer gets the date and time
function timer(){

    const fullDate = new Date();
    let hours = fullDate.getHours();
    let mins = fullDate.getMinutes();
    let seconds = fullDate.getSeconds();

    if(hours < 10){
        hours = '0' + hours;
    }
    if (mins < 10) {
        mins = '0' + mins;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

//displaying to to the DOM
document.getElementById('hour').innerHTML = `${hours} :`;
document.getElementById('min').innerHTML = `${mins} :`;
document.getElementById('sec').innerHTML = seconds;

}

//setting variables for alarm 

function alarm(){
    alert('Alarm set');
    
        let h = document.getElementById('h').value;
        let m = document.getElementById('m').value;
        console.log(h);
        console.log(m);
      
        function under(){
        let full = new Date();
        let hoursOne = full.getHours();
        let minsOne = full.getMinutes();
        if( h == hoursOne && m == minsOne ){
            alert('wow');
        }
        }
        setInterval(under,10000); //intervals of 10secs 
        
        under();
}

//addEvent listener for the alarm button
document.getElementById('setAlarm').addEventListener('click', alarm);

