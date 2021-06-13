function time(){
    var d = new Date()

    if (d.getDay() == 1){
        var day = "MN"
    }
    else if (d.getDay() == 2){
        var day = "TS"
    }
    else if (d.getDay() == 3){
        var day = "WD"
    }
    else if (d.getDay() == 4){
        var day = "TH"
    }
    else if (d.getDay() == 5){
        var day = "FR"
    }
    else if (d.getDay() == 6){
        var day = "ST"
    }
    else{
        var day = "SN"
    }
    console.log(d.getDay())

    var hr = d.getHours()
    var mn = d.getMinutes()
    var sec = d.getSeconds()

    document.querySelector("#days").innerHTML = day
    document.querySelector("#hrs").innerHTML = hr
    document.querySelector("#mns").innerHTML = mn
    document.querySelector("#scs").innerHTML = sec
}

setInterval(time, 1000);
