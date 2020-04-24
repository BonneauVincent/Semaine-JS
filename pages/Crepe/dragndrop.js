const fills = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');
let current;

const products = ['tomate', 'oeuf'] 
const initContainer = document.querySelector('.empty')  
products.forEach((item, index)=>{    
    const newDiv = document.createElement('div')   
    newDiv.classList.add('fill')   
    newDiv.classList.add(item)
    newDiv.setAttribute('draggable' , "true")   
    newDiv.setAttribute('data-id', index)   
    initContainer.appendChild(newDiv) 
    newDiv.addEventListener('dragstart', dragStart);
    newDiv.addEventListener('dragend', dragEnd);
})  
// Fill listeners
// fills.forEach((item,index)=>{
//     item.addEventListener('dragstart', dragStart);
//     item.addEventListener('dragend', dragEnd);
// }) 

// fill.addEventListener('dragstart', dragStart);
// fill.addEventListener('dragend', dragEnd);

// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag Functions

function dragStart() {
  current = this;
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill egg';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(current);
}
