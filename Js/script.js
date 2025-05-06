document.getElementById("celebrateButton").addEventListener("click", function() {
    alert("¡Feliz Cumpleaños! 🎂🎊🎁");

    let container = document.getElementById("balloons-container");
    for (let i = 0; i < 10; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");

        let colors = ["red", "blue", "yellow", "green", "pink", "purple", "orange"];
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        balloon.style.left = Math.random() * 90 + "vw"; 
        balloon.style.animationDuration = Math.random() * 2 + 2 + "s"; 

        container.appendChild(balloon);

        setTimeout(() => { balloon.remove(); }, 5000);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");

    function createConfetti() {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = `${Math.random() * window.innerWidth}px`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = confetti.style.width;
        confetti.style.background = `radial-gradient(circle, rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, 0.8), rgba(255, 255, 255, 0.5))`;

        container.appendChild(confetti);

        setTimeout(() => {
            confetti.remove(); // ✅ Elimina cada confeti para evitar expansión de pantalla
        }, 5000);
    }

    setInterval(createConfetti, 100);
});

