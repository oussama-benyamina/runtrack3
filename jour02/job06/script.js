const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateKonami();
        }
    } else {
        konamiIndex = 0;
    }
});

function activateKonami() {
    const style = document.getElementById('konami-style');
    style.textContent = `
        body {
            background-color: #0065FC;
            color: white;
            font-family: Arial, sans-serif;
        }
        h1 {
            color: #FFCC00;
        }
    `;
    
    const h1 = document.createElement('h1');
    h1.textContent = 'La Plateforme_';
    document.body.appendChild(h1);
}