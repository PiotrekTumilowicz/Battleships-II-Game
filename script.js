const rotateBtn = document.querySelector('#rotate-button');
const optionCont = document.querySelector('.option-container');
let angle = 0;

function rotateShip() {
	const optionShips = Array.from(optionCont.children);
    angle = (angle === 0) ? 90 : 0;
	optionShips.forEach(element => {
        element.style.transform = `rotate(${angle}deg)`;
    });
}

rotateBtn.addEventListener('click', rotateShip);
