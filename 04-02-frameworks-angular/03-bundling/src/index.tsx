import "./mystyles.scss";
import logoImg from './content/logo_1.png';

// Para añadir la imagen al html desde la carpeta content
const img = document.createElement('img');
img.src = logoImg;

document.getElementById('imgContainer')!.appendChild(img);

console.log(`Api base: ${process.env.API_BASE}`);