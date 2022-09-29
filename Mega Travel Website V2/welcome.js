let sunOrMoonIcon = document.createElement("img");
let style = document.createElement("style");

sunOrMoonIcon.id = "sun-moon-icon-id";

getTimeAndDisplayGreeting();

function getTimeAndDisplayGreeting(){

    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    let currentTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    let welcomeText = "";

    // set the greeting message
    if(currentHour < 12){
        welcomeText = "Good Morning!";
    }
    else if(currentHour >= 12 && currentHour <= 17){
        welcomeText = "Good Afternoon!";
    }
    else if(currentHour > 17){
        welcomeText = "Good Evening!";
    }
    
    // set the image to either a sun or moon
    if(currentHour >= 6 && currentHour <= 18){
        sunOrMoonIcon.src = "site files/sun.png";
    }
    else {
        sunOrMoonIcon.src = "site files/moon.png";
    }

    document.getElementById("sun-moon-span").appendChild(sunOrMoonIcon);
    document.getElementById("welcome-text-bold").innerHTML = welcomeText;
    document.getElementById("time-text-span").innerHTML = currentTime;
    // repeat this function every second
    setInterval(getTimeAndDisplayGreeting, 1000);
}
