//>>>>>>>>>>>>>>>>> Session -8 <<<<<<<<<<<<<<<<<<<<<<<<<

// Event & other DOM Properties

/*  console dir function
    -->   console.log shows the elements DOM tree console.dir shows the elemetns as an object with its properties.


    //console.dir 

console.dir(document.getElementsByTagName(`span`)[0])

// it show all the properties, function, attribute etc. to use console.dir 

/* Output
span - 
VM294:1 spanaccessKey: ""ariaAtomic: nullariaAutoComplete: nullariaBrailleLabel: nullariaBrailleRoleDescription: nullariaBusy: nullariaChecked: nullariaColCount: nullariaColIndex: nullariaColSpan: nullariaCurrent: nullariaDescription: nullariaDisabled: nullariaExpanded: nullariaHasPopup: nullariaHidden: nullariaInvalid: nullariaKeyShortcuts: nullariaLabel: nullariaLevel: nullariaLive: nullariaModal: nullariaMultiLine: nullariaMultiSelectable: nullariaOrientation: nullariaPlaceholder: nullariaPosInSet: nullariaPressed: nullariaReadOnly: nullariaRelevant: nullariaRequired: nullariaRoleDescription: nullariaRowCount: nullariaRowIndex: nullariaRowSpan: nullariaSelected: nullariaSetSize: nullariaSort: nullariaValueMax: nullariaValueMin: nullariaValueNow: nullariaValueText: nullassignedSlot: nullattributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {length: 0}autocapitalize: ""autofocus: falsebaseURI: "https://19062023--gautam-kumark18.repl.co/"childElementCount: 0childNodes: NodeList [text]children: HTMLCollection []classList: DOMTokenList [value: '']className: ""clientHeight: 0clientLeft: 0clientTop: 0clientWidth: 0contentEditable: "inherit"dataset: DOMStringMap {}dir: ""draggable: falseelementTiming: ""enterKeyHint: ""firstChild: textfirstElementChild: nullhidden: falseid: ""inert: falseinnerHTML: "Hey i am span"innerText: "Hey i am span"inputMode: ""isConnected: trueisContentEditable: falselang: ""lastChild: textlastElementChild: nulllocalName: "span"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: scriptnextSibling: textnodeName: "SPAN"nodeType: 1nodeValue: nullnonce: ""offsetHeight: 16offsetLeft: 89offsetParent: bodyoffsetTop: 9offsetWidth: 99onabort: nullonanimationend: nullonanimationiteration: nullonanimationstart: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforeinput: nullonbeforematch: nullonbeforepaste: nullonbeforetoggle: nullonbeforexrselect: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontentvisibilityautostatechange: nulloncontextlost: nulloncontextmenu: nulloncontextrestored: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonformdata: nullonfullscreenchange: nullonfullscreenerror: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerrawupdate: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonscrollend: nullonsearch: nullonsecuritypolicyviolation: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonslotchange: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullontransitioncancel: nullontransitionend: nullontransitionrun: nullontransitionstart: nullonvolumechange: nullonwaiting: nullonwebkitanimationend: nullonwebkitanimationiteration: nullonwebkitanimationstart: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwebkittransitionend: nullonwheel: nullouterHTML: "<span>Hey i am span</span>"outerText: "Hey i am span"ownerDocument: documentparentElement: bodyparentNode: bodypart: DOMTokenList [value: '']popover: nullprefix: nullpreviousElementSibling: nullpreviousSibling: textrole: nullscrollHeight: 0scrollLeft: 0scrollTop: 0scrollWidth: 0shadowRoot: nullslot: ""spellcheck: truestyle: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "SPAN"textContent: "Hey i am span"title: ""translate: truevirtualKeyboardPolicy: ""[[Prototype]]: HTMLSpanElement
undefined





Tag Name / node Name
    --> Used to read tag name of an elements 
    TagName - only exist for elements node.
    nodeName - defined for any node ( text, comment, etc)

    example -   
             1.         document.body.firstChild.nodeName
             output -  '#text'

             2.         document.body.firstElementChild.nodeName
             output -   'SPAN'
*/



/*

inner HTML and outer HTML

*Inner HTML
    --> The inner html properties allows to get html inside the elemetns as a string.
    (it is valid for elements node only)

index.html file
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
     <span id="first">Hey i am span</span>
</body>
</html>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

first.innerHTML

output -  'Hey i am span'



first.innerHTML
' <b> This is black </b> and Hey i am span'








*outer HTML
    -->  The outer HTML properties contains the full HTML inner HTML + the elements itself.
        inner HTML calid only for elemts nodes . for other node type we can use node value or data


first.outerHTML

*/


/* >>>>>>>>>>>>>>>> Insertion Method <<<<<<<<<<<<<<< 

append
prepend
before
after
replaceWith


How to work Insert AdjacentHTML, Insert AdjacentElement and Insert AdjacentText


1. beforebegin   -  Insert HTML immediatily before element.
2. afterbegin    -  Insert HTML into element at the begining 
3. beforeend     -  Insert HTML into element at the end
4. aftereend     -  Insert HTML immediatily after element.



* How to change HTML Classes using java script 

className & classList

//set the className text-black to red then use "className"
first.className = "yellow text-dark"


// classList
fisrt.classList // it show all the classes which are exist in HTML  file.

//if we have to remove specific class then use "classList"
first.classList.remove("red")

//if we want to add which removed class
first.classList.add("red")

//if class is there exist to use "toggle" we can add or remove
first.classList.toggle("red")






setTimeout & setInsterval


setTimeout:- it execute once after the set time.
setInsterval:- it execute again and again after the set interval time 

function -1 
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
document.write("Hello")

let a = setTimeout(function(){
  alert("hey I am inside the setTimeout")
},3000)
let b = prompt("Do you want to run this setTimeout?")
if("n" == b){
  clearTimeout(a)
}

console.log(a)
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


function-2
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
document.write("Hello")
const sum = (a, b, c) => {
  console.log("Yes i am Running" + (a + b + c))
  a + b
}
setTimeout(sum, 1000, 1, 2, 12)
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



setInsterval:- it execute again and again after the set interval time 

setInterval(function(){
  alert("This is setInterval")
},3000)








//alert can be run one by one like this  



btn.addEventListener('click', function(e) {
  alert("Hello World !")
})


btn.addEventListener('click', function(e) {
  alert("It is Friday today")
})





//remove one function and get alert 1 either alert 2 to choose number from promt

//Note:-  to use  handler (RmoveEventListener) must be same function object otherwise it not going to work.


let x = function(e) {
  alert("Hello World!")
}

let y = function(e) {
  alert("It is Friday today")
}


btn.addEventListener('click', x); 


btn.addEventListener('click', y);


let a = prompt("Enter the Number 1 or 2")
let b = alert("Click Me button which located on left side")

if (a == "2"){
  btn.removeEventListener('click', x)
}



//Event target handler
let x = function(e) {
  console.log(e.target)
  alert("Hello World!")
}

let y = function(e) {
  alert("It is Friday today")
}


btn.addEventListener('click', x); 


btn.addEventListener('click', y);



//console.log(e)   :-   PointerEvent 
let x = function(e) {
  console.log(e.target)
  alert("Hello World!")
  console.log(e)
}

let y = function(e) {
  alert("It is Friday today")
}


btn.addEventListener('click', x); 

*/


//Event type client
let x = function(e) {
  console.log(e.target)
   console.log(e.type, event.clientX, event.clientY)
  //alert("Hello World!")
 
}

  
  
let y = function(e) {
  console.log(e)
  alert("It is Friday today")
}

btn.addEventListener('click', x); 
  






*/
