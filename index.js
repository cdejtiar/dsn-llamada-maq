function vibrar(){
    window.navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100])
}

const targetPickup = document.getElementById("pickup")

const targetArrows = document.getElementById("arrows")

const targetHangup = document.getElementById("end")

const message = document.getElementById("message")

const pickupMenu = document.getElementById("pickupScreen")
const mainScreen = document.getElementById("mainScreen")

function mainScreenOpacity () {
    mainScreen.style.display = "none"
}
function pickupScreendisplay (){
    pickupMenu.style.display = "inline-block"
}

function atender(){
targetPickup.style.top = "550px"
targetPickup.style.transition = "1s ease-in-out"
targetPickup.style.opacity = "0"
targetArrows.style.transition = "opacity 1.5s ease-in-out"
targetArrows.style.opacity = "0"
setTimeout(mainScreenOpacity, 1000)
targetHangup.style.opacity = "0"
targetHangup.style.transition = "opacity 1.5s ease-in-out"
message.style.transition = "opacity 1.5s ease-in-out"
message.style.opacity = "0"
setTimeout(pickupScreendisplay, 1000)
targetPickup.classList.add("slide-up")
}

function colgar(){
    targetHangup.style.top = "750px"
    targetHangup.style.transition = "1s ease-in-out"
    targetHangup.style.opacity = "0"
}


function callTime(){
    setTimeout(timeCount, 1000)
}


function clase(){
    setInterval(shake, 3000)

        setInterval(cronometro, 1000)
    
    
}

function shake(){
    if(target.className === "vibrate-1"){
        target.classList.remove("vibrate-1")
    } else{
        target.classList.add("vibrate-1")
    }
}

var segundos = 0;
var minutos = 0;

let secs = document.getElementById("seconds")
let mins = document.getElementById("minutes")


function cronometro(){
    
    if(segundos < 9){
        segundos++;
        seconds.innerHTML = "0" + segundos;
    } else{
       segundos++;
        seconds.innerHTML = segundos; 
    }
    
    if (segundos == 59) {
		segundos = -1;
        minutos++;
        mins.innerHTML = mins
	}
    
}
