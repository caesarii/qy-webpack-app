import './assets/index.css'
console.log('hello header')

function component() {
    var element = document.createElement('div');
    element.innerHTML = 'hello webpack'
    element.classList.add('hello');

    return element;
  }

document.body.appendChild(component());