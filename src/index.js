import './sass/style.sass';
import imgBTC from './assets/btc_coin.jpg';

const h1Component = (value) => {
   let h1 = document.createElement('h1')
   h1.innerHTML = value
   h1.classList.add('title');
   return h1
 }

 const imgComponent = ( valueImg, width = 300, height = 250) => {
    let elImg = new Image(width,height);
    elImg.src = valueImg;
    return elImg;
 }

document.body.appendChild( h1Component('Olá Webpack!') )
document.body.appendChild( imgComponent(imgBTC) )
 