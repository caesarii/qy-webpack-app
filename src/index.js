import _ from 'lodash'
import img from './images/img.jpg'

function component() {
    let element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack 2'], ' ');
    
    var myIcon = new Image();
    myIcon.src = img;
    element.appendChild(myIcon);
  
    return element;
  }
  
  document.body.appendChild(component());
  