let tambur1 = document.querySelector(".w");
let tambur2 = document.querySelector(".a");
let tambur3 = document.querySelector(".s");
let tambur4 = document.querySelector(".d");
let tambur5 = document.querySelector(".j");
let tambur6 = document.querySelector(".k");
let tambur7 = document.querySelector(".l");

let allTambur = document.querySelectorAll(".drum")

for (let i = 0; i < allTambur.length; i++) {
    allTambur[i].onclick = (e) => {
        let audio = new Audio(`./sounds/tom-${e.target.innerText}.mp3`);
        audio.play();
    }
}

document.addEventListener("keypress", (event) => {
    let audio = new Audio(`./sounds/tom-${event.key}.mp3`);
    audio.play();
    document.querySelector(`.${event.key}`).classList.add("pressed")
    setTimeout(()=>{
        document.querySelector(`.${event.key}`).classList.remove("pressed")
    },200)

})