function addCurrentTime(){
    let currentDate = new Date();
    let currentTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

    console.log("CUrrent Time is: " + currentTime);

    document.getElementById("header-separator").innerHTML = currentTime;
    //repeat this function every second
    setInterval(addCurrentTime, 1000);
}