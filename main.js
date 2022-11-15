

let h1 = document.createElement("h1");
document.body.appendChild(h1);
console.log("Hello, Wolrd!"); 

// create an HTML element - h1
let h1_arr = document.getElementsByTagName("h1")
console.log( h1_arr[0])
let h = h1_arr[0]
h.innerHTML = "Lab12 Assignment"
h.style.color = "blue"
console.log(h);



let myhr = document.createElement("hr")
console.log(myhr)
document.body.appendChild(myhr)


let h2 = document.createElement("h2")
h2.innerHTML = "Task"
h2.style.color = "red"
document.body.appendChild(h2)

let p1 = document.createElement("p1")
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <strong>only</strong> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
document.body.appendChild(p1);

let ul1 = document.createElement("ul")
let li1 = document.createElement("li")
li1.innerHTML = "find elements in the DOM (" +" <b> 5 points</b>" +");"
li1.style.color = "green"
li1.classList.add("even"); 
ul1.appendChild(li1);


document.body.appendChild(ul1)

let li2 = document.createElement("li")
li2.innerHTML = "create/add/remove elements ( 5 points);"
li2.style.color = "purple"
li2.classList.add("odd"); 
console.log(li2.classList);
ul1.appendChild(li2);


let li3 = document.createElement("li")
li3.innerHTML = "change content of the elements (" +" <b>5 points</b>" +");"
li3.style.color = "green"
li3.classList.add("even"); 
ul1.appendChild(li3);


let li4 = document.createElement("li")
li4.innerHTML = "change styles of the elements (" +" <b>5 points</b>" +");"
li4.style.color = "purple"
li4.classList.add("odd"); 
ul1.appendChild(li4);

let li5 = document.createElement("li")
li5.innerHTML = "change attributes of the elements  (" +" <b>5 points</b>" +");"
li5.style.color = "green"
li5.classList.add("even"); 
ul1.appendChild(li5);

let li6 = document.createElement("li")
li6.innerHTML = "change classes of the elements (" +" <b>5 points</b>" +");"
li6.style.color = "purple"
li6.classList.add("odd"); 
ul1.appendChild(li6);

console.log(ul1)
let p3 = document.createElement("p1")
p3.innerHTML = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this 

let a1 = document.createElement("a");
a1.setAttribute("href", "https://github.com/yessen/nu_web_programming/tree/main/week12");
a1.innerText = "link.";"
document.body.appendChild(p3);

let myhr1 = document.createElement("hr")
console.log(myhr1)
document.body.appendChild(myhr1)

let h3 = document.createElement("h2")
h3.innerHTML = "Submission"
h3.style.color = "red"
document.body.appendChild(h3)

let p2 = document.createElement("p1")
p2.innerHTML = "To submit your work, follow these instructions:"
document.body.appendChild(p2);

let ul2 = document.createElement("ul")
let li7 = document.createElement("li")
li7.innerHTML = "Create a new repository on Github, named lab12 (" +" <b> 1 point</b>" +");"
li7.style.color = "green"
li7.classList.add("even"); 
ul2.appendChild(li7);


document.body.appendChild(ul2)

let li8 = document.createElement("li")
li8.innerHTML = "Clone this repository to your local machine and work inside it.;"
li8.style.color = "purple"
li8.classList.add("odd"); 
console.log(li8.classList);
ul2.appendChild(li8);


let li9 = document.createElement("li")
li9.innerHTML = "Create a new HTML file, called index.html, which has only one tag with Hello, World! message (1 point).;"
li9.style.color = "green"
li9.classList.add("even"); 
ul2.appendChild(li9);


let li10 = document.createElement("li")
li10.innerHTML = "Create a new JavaScript file, called main.js, which must contain your program (assignment) described above (1 point).;"
li10.style.color = "purple"
li10.classList.add("odd"); 
ul2.appendChild(li10);

let li11 = document.createElement("li")
li11.innerHTML = "Link this main.js file to your index.html file (Note: place your script at the end of the body section).;"
li11.style.color = "green"
li11.classList.add("even"); 
ul2.appendChild(li11);

let li12 = document.createElement("li")
li12.innerHTML = "Write a JavaScript program in main.js to make your index.html look identical to this HTML file (5 points).;"
li12.style.color = "purple"
li12.classList.add("odd"); 
ul2.appendChild(li12);

let li13 = document.createElement("li")
li13.innerHTML = "After you finish your work, submit it to the Github (2 points).;"
li13.style.color = "green"
li13.classList.add("even"); 
ul2.appendChild(li13);


console.log(ul2)


let myhr2 = document.createElement("hr")
console.log(myhr2)
document.body.appendChild(myhr2)

