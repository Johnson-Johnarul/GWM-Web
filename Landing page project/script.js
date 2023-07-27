const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-icon','nav-list') 
 
// CAMBIO COLOR 

const sizes = document.querySelectorAll('.size__tallas');
const colors = document.querySelectorAll('.sneaker__color')
const sneaker = document.querySelectorAll('.sneaker__img')
const counterValue = document.getElementById('counter')

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'))
    this.classList.add('active')
}

function changeColor(){
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let sneakerColor = document.querySelector(`.sneaker__img[color="${color}"]`);

    colors.forEach(c => c.classList.remove('active'))
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary)  

    sneaker.forEach(s => s.classList.remove('shows'))
    sneakerColor.classList.add('shows')
}
sizes.forEach(size => size.addEventListener('click', changeSize))
colors.forEach(c => c.addEventListener('click', changeColor))

function increment(){
    let value = parseInt(counterValue.innerText);
    value = value + 1;
    counterValue.innerText = value
}

function decrement(){
    let value = parseInt(counterValue.innerText);
    value = value - 1;
    counterValue.innerText = value
}