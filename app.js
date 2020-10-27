var mh = document.getElementById("min")
var sh = document.getElementById("sec")
var msh = document.getElementById("msec")
var count = 0
var pause = document.getElementById('pause')
var interval
var strt = document.getElementById("start")
function timer(){

    pause.className += "innitial"
    msh.innerHTML++
    if(msh.innerHTML == 100){
        sh.innerHTML++
        msh.innerHTML = 0
    }
    else if(sh.innerHTML == 60){
        mh.innerHTML++
        sh.innerHTML = 0
    }

}
function start( ){
    interval = setInterval(timer)
//  _this.className = "btn-custom"
}
var c = 0
function stop(){
    if(c == 0){
    clearInterval(interval)
    pause.value = "resume"
    c = 1
    }
    else{
        
        start()
        pause.value = "pause"
        c = 0
    }
 }
 
 function reset(_this){
     mh.innerHTML = 0
     sh.innerHTML = 0
     msh.innerHTML = 0
     clearInterval(interval)
     strt.disabled = false
    pause.className += " d-none"
 }