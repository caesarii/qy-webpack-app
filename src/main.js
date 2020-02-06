import './assets/index.less'
console.log('hello webpack')

function component() {
    var element = document.createElement('div');
    element.innerHTML = 'hello webpack'
    element.classList.add('hello');

    return element;
  }

  document.body.appendChild(component());