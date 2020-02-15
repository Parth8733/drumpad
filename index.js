function playSound(e) {
    const keyValue = e.keyCode;

    const audio = document.querySelector(`audio[data-key = "${keyValue}"]`);
    console.log(audio);
    audio.currentTime = 0;
    const div = document.querySelector(`div[data-keycode = "${keyValue}"]`);
    div.classList.add('press');
    audio.play();

}
function removeTransition(e) {
    e.target.classList.remove('press');
}
const keys = [...document.querySelectorAll('.sound')]
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound);

