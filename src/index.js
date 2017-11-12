// import _ from 'lodash';
// import './style.css';
// import Icon from './icon.png';
// import Data from './sample-csv.csv';
// import printMe from './print.js';

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}
function component() {
  var element = document.createElement("div");
  // var btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  // element.classList.add('hello');
  // Add the image to our existing div.
  // var myIcon = new Image();
  // myIcon.src = Icon;
  //
  // element.appendChild(myIcon);
  // console.log(Data);
  //  btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = printMe;

  // element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
