let tambur1 = document.querySelector(".w").style.backgroundImage = 'url("images/tom-w.png")';
let tambur2 = document.querySelector(".a").style.backgroundImage = 'url("images/tom-a.png")';
let tambur3 = document.querySelector(".s").style.backgroundImage = 'url("images/tom-s.png")';
let tambur4 = document.querySelector(".d").style.backgroundImage = 'url("images/tom-d.png")';
let tambur5 = document.querySelector(".j").style.backgroundImage = 'url("images/tom-j.png")';
let tambur6 = document.querySelector(".k").style.backgroundImage = 'url("images/tom-k.png")';
let tambur7 = document.querySelector(".l").style.backgroundImage = 'url("images/tom-l.png")';

let allTambur = document.querySelectorAll(".drum")

for (let i = 0; i < allTambur.length; i++) {
    allTambur[i].onclick = (e) => {
        let audio = new Audio(`./sounds/tom-${e.target.innerText}.mp3`);
        allTambur[i].classList.add("pressed")
        setTimeout(() => {
            allTambur[i].classList.remove("pressed")
        }, 200)
        audio.play();
    }
}

document.addEventListener("keypress", (event) => {
    let audio = new Audio(`./sounds/tom-${event.key}.mp3`);
    audio.play();
    document.querySelector(`.${event.key}`).classList.add("pressed")
    setTimeout(() => {
        document.querySelector(`.${event.key}`).classList.remove("pressed")
    }, 200)

})