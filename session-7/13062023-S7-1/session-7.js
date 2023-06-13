// Walking the DOM 

/* Dom tree refer the html page where all the nodes are object there can be 
   3 main type of nodes in the Dom tree

1. Text Node
2. Elements Node
3. Comment Nodes


In an HTML page  <html> is at the root and <head> and <body> are its children etc
a next node is always  a leaf of the tree.


AUTO CORRECTON -  If an errorneous HTML is encountered by the browser, it tend to correct it  
                 For example - if we put something after body it is automatically moved inside 
                 the body  another 
                 example - is <title> tag which must contain <t body>.


WALKING THE DOM - 

<html>
<head>                   document.head------> (page head tag)
<title> Hello <title>    document.title-----> (page title tag) -string type
<head>                   document.documentElement-----> (page html tag)
<body>                   document.body -----> (page body tag)



CHILDREN --> Direct as well as deeply nested element of an element are called its CHILDREN.

CHILD NODE --> Elements that are direct children for example head are children of <htnl>.

DESCENDANT NODE --> All nested elements, children their children and so on

FIRST CHILD , LAST CHILD, CHILD NODE
Element.firstchild --> first child element
- console.log(document.body.firstchild)

element.lastchild  --> last child elelemnt
- console.log(document.body.lastchild)

element.childnode  --> all child nodes 
- console.log(document.body.childnode)

elem.childNodes[0] === elem.fisrtChild
elem.childNodes[elem.childNodes.length -1] === elem.lastChild

There is also a method elem.hasChildNodes cs to check  whether there are any child nodes


Note - childNodes look like an array but it not actually an array but a collection 
       we can use Array from (collection) to convert it into an |Array --->Array method won't work


>>>>DOM COLLECTION<<<<<<
- Theay are read-only.
- They are live elem.ChildNodes vartically (references) will automatically update if childNdes of elem is changed.
- They are iteratle using for of loop



>>>>SIBLING<<<<<<<<<
- Sibling are nodes that are children of the same parents.
for example- <head> and <body> are sibling.


*/