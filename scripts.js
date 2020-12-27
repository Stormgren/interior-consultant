let menu = document.getElementById('menu');
let container = document.getElementById('container');
let btn = document.getElementById('hamburger');
let btnb = document.getElementById('burger');
let foota = document.getElementById('foota');
let toggle = false;

let toggable = () => {

    toggle = !toggle;

    if (toggle) {
        menu.style.display = 'flex';
        btn.innerHTML = '<img class="burger" src="images/close.svg" alt="Menu" />'

    } else {
        menu.style.display = 'none';
        btn.innerHTML = '<img class="burger" src="images/menu.svg" alt="Menu" />'
    }

    toggle ? container.style.display = 'none' : container.style.display = 'block';
    toggle ? foota.style.display = 'none' : foota.style.display = 'block';
    console.log(toggle)

}