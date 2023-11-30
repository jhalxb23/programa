

let saludo;

while (true) {
    saludo = prompt("Hola, ¿Cómo te llamas?");
    
    

    if (saludo === null || saludo === "") {
        alert("Por favor, ingrese un nombre válido.");
    } else {
        alert("Bienvenido, " + saludo);
        break; // Salir del bucle si se ingresa un nombre válido
    }
}


/*const images = document.querySelectorAll('.image-container img');jjh
const melodiaMp3 = document.getElementById('melodiaMp3');

images.forEach((img) => {
    img.addEventListener('mouseenter', () => {
        const audioSrc = img.getAttribute('data-audio');
        console.log('Audio source:', audioSrc); // console.log para depurar
        if (audioSrc) {
            melodiaMp3.src = audioSrc;
            melodiaMp3.play();
        }
    });
});
*/  

//el codigo de arriba no hace nada

