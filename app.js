function genRandColor(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})` ;
}
const button = document.querySelector('#button');
const body = document.querySelector('body')
const text1 = document.querySelector('h1')
const poke = document.querySelector('#pokemon')
const newImg = document.createElement('img')
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
button.addEventListener('click',function colorize(){
    const colorForBody = genRandColor()
    body.style.backgroundColor = colorForBody;
    button.style.backgroundColor = genRandColor();
    text1.innerText = colorForBody
    const randNum = Math.ceil(Math.random() * 500);
    newImg.src = `${baseURL}${randNum}.png`
    poke.appendChild(newImg)
})
