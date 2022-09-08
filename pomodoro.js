window.onload = () => {
    //pomodoro
    let workTime;
    let breakTime;
    let restTime;
    let timesCompleted;
    let cyclesGoal;
    let cyclesCompleted;

    function populateVariables (){
        console.log("popularidad variables");
        workTime = workTimeInput.value; //minutes
        breakTime = breakTimeInput.value; // minutes;
        restTime = restTimeInput.value; // minutes;
        cyclesGoal = cyclesInput.value;
        timesCompleted = 0;
    }


    function goalReached(){
        return cyclesGoal == cyclesCompleted
    }

    function pomodoroControler(){
        if (isRestTime()){
            cyclesCompleted++;
            if (!goalReached()){
                currentTime = restTime;
                timer();
                timesCompleted = 0;
            }else{
                console.log(" pomodoro finished");
            }
            return;
        }
    }
    

    function pomodoroControler(){
        if(timesCompleted % 2 == 0){
            currentTime = workTime;
            timesCompleted++;
            timer();
            console.log("time to work 🧑‍⚕️" + " " + timesCompleted);
        }else{
            currentTime = breakTime;
            timesCompleted++;
            timer();
            console.log("time to break 🚻" + " " + timesCompleted)
        }
    }

    function isRestTime(){
        return timesCompleted == 7;
    }

    //conexion con html
    let clock = document.getElementById('clock');
    let cyclesInput = document.getElementById('circles__input');
    let startButton = document.getElementById('startButton');
    let workTimeInput = document.getElementById('work__time');
    let breakTimeInput = document.getElementById('break__time');
    let restTimeInput = document.getElementById('rest__time');

    //function startPomodoro
    function startPomodoro () {
        console.log("started pomodor");
        pomodoroControler();
    }

    //startButton
    startButton.onclick = () => {
        populateVariables();
        startPomodoro();
    }

    //clock
    let clockMinutes;
    let clockSeconds;

    function formatNumbers(time){
        let formattedDigits;

        if(time < 10){
            formattedDigits = "0" + time;
        }else{
            formattedDigits = time;
        }
        return formattedDigits;
    }

    function updateClock(){
        clockMinutes = formatNumbers(currentTime);
        clockSeconds = formatNumbers(seconds);
        clock.innerHTML = clockMinutes + ":" + clockSeconds;
    }

    //timer
    let currentTime = 1;
    let seconds = 0;

    function timer(){
        if (currentTime > 0 || seconds > 0){
            if (seconds == 0) {
                seconds = 59;
                currentTime--;
            }else{
                seconds--;
            }
            updateClock();
            console.log(currentTime,seconds);
            setTimeout(timer, 1000);
        }else{
            pomodoroControler();
            // console.log("el temporizador termino")
        }
    }

    timer();
}