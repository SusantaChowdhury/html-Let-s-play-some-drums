var n = document.querySelectorAll(".drum").length;
for(var i = 0; i < n ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    playAudio(this.innerHTML);
});
}

document.addEventListener("keydown", function(event){
    playAudio(event.key);

});

function playAudio(key){
    switch(key){
        case "w":
            var kick = new Audio("./sounds/kick.wav");
            kick.play();
            break;
        case "a":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("./sounds/cowbell.wav");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("./sounds/tom-1.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("./sounds/tom-2.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("./sounds/tom-3.mp3");
            tom4.play();
            break;
        default:
            alert("Wrong click!.")
            break;
    }
   

}
