let homeScore=0
let guestScore=0
let homeid = document.getElementById("home")
let res = document.getElementById("result")
function home(e){
    if(homeScore <21){
        homeScore += e
        homeid.textContent = homeScore
    }
    if(homeScore >= 21){
        disableBtn()
        res.textContent = "Your team has won"
    }
    console.log(homeScore)
}

let guestid = document.getElementById("guest")

function guest(e){
    if(guestScore <21){
        guestScore += e
        guestid.textContent = guestScore
    }
    if(guestScore >=21){
        disableBtn()
        res.textContent = "Guest team has won"
    }
}

const buttons = document.querySelectorAll("button")

function disableBtn(){
    console.log("hit")
    for(const bt of buttons){
        bt.disabled = true
    }
}