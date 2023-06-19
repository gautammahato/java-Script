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



