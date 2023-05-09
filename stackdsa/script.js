var stack = document.querySelector(".stack");
var push = document.getElementById("push");
var cubes = document.querySelectorAll(".cube");
var reset = document.getElementById("reset");
var pop = document.getElementById("pop");
var topElement = document.getElementById("top");
let stacksize=12;

// resets the stack
reset.onclick = () => {
  stack.innerHTML = "";
};

function changesize(){
  stacksize=document.getElementById("stack_size").value;
  reset.click();
}

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
}

// adding Element to the stack
push.addEventListener("click", () => {
  if (stack.children.length < stacksize) {
    htmlData = stack.innerHTML;
    let cube = `<div class="cube" style="background-color: #FF4444;">${Math.floor(
      Math.random() * 101
    )}</div>`;
    cube += htmlData;
    stack.innerHTML = cube;
  } else {
    alert("Stack Overflow");
  }
});

// deleting Element from the stack
pop.onclick = () => {
  if (stack.children.length > 0) {
    let nodesCollection = [];
    let nodes = stack.children;
    for (let i = 0; i < nodes.length; i++) {
      nodesCollection.push(nodes[i].outerHTML);
    }
    nodesCollection.splice(0, 1);
    let html = "";
    for (let k = 0; k < nodesCollection.length; k++) {
      if (nodesCollection[k]) {
        html += nodesCollection[k];
      }
    }
    stack.innerHTML = html;
  } else {
    alert("Stack Underflow");
  }
};

// returns the top element of the stack
topElement.onclick = () => {
  if (stack.children.length <= 0) {
    alert("Stack is empty.");
  } else {
    let nodesCollection = [];
    let nodes = stack.children;
    for (let i = 0; i < nodes.length; i++) {
      nodesCollection.push(nodes[i].innerHTML);
    }
    let tempString = "Top element of the stack is "+nodesCollection[0]+", "+ stack.children.length+"th element from the bottom.";
    alert(tempString);
  }
};