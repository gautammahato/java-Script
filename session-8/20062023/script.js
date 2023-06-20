/*
premetive method to insert elements to use of java script.

*/

let a = document.getElementsByTagName('div')[0];
a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>'; 

let a = document.getElementsByTagName('div')[0];
let div = document.createElement('div');
div.innerHTML = '<h1><i>Hello World!</i></h1>';
a.append(div);
a.prepend(div);
a.before(div);
a.after(div);
a.replaceWith(div);


//  How to work Insert AdjacentHTML, Insert AdjacentElement and Insert AdjacentText


first.insertAdjacentHTML('beforebegin', '<div class="test"> BeforerEnd</div>');
first.insertAdjacentHTML('afterbegin', '<div class="test"> BeforerEnd</div>');
first.insertAdjacentHTML('aftereend', '<div class="test"> BeforerEnd</div>');
first.insertAdjacentHTML('beforeend', '<div class="test"> BeforerEnd</div>');

div.insertAdjacentHTML('beforebegin', '<h1>Hello World</h1>');
div.insertAdjacentHTML('afterend', '<h1>Bye</h1>');


div.remove();