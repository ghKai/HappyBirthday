var bar = document.getElementById('progress');

function addProgress() {
    bar.value = bar.value + 10;
    if(bar.value == bar.max) unpack();
}

function decreaseProgress() { 
    if(bar.value > 0) bar.value = bar.value - 1;
}

var loop = setInterval(decreaseProgress, 50);

function stopProgressDecrease() { 
    clearTimeout(loop);
}

function unpack() {
    var gift = document.getElementById('gift');
    gift.style.display = "none";

    var text = document.getElementById('pop-up-text');
    text.style.display = "block";
    text.classList.add("animated");
    text.classList.add("fadeIn");
    setTimeout(() => {
        text.style.pointerEvents = "auto";
    }, 1250);

    var confetti = document.getElementById('confetti');
    confetti.style.display = "block";
    confetti.classList.add("animated");
    confetti.classList.add("fadeIn");
    
    bar.style.display = "none";

    var sound = document.getElementById("myAudio"); 
    sound.play(); 
}