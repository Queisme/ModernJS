const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

//div.innerText = 'Hello World'; //not the best practice. This is ment to get and change the text of an already exsisting element. Its better to create a new textNode with the create textNode method and append to an already exsisting element.

const text = document.createTextNode('This is the better practice.');
div.appendChild(text);

//document.body.appendChild(div);

document.querySelector('ul').appendChild(div);
