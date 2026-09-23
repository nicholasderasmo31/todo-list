// ADD YOUR CODE BELOW 

// 1. Start with an array of strings (ex: "grapes", "bread", "tea")
let todoItems = [
    "bread",
    "Soup",
    "Mutton"
];



// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById('add-item-button');
// add more variables below
const list = document.getElementById('list');
const itemInput = document.getElementById('text');
const sortBtn = document.getElementById('sort');
const clearBtn = document.getElementById('clear');

let popupIndex = 0;




// 3. Write a function to display all items in the #list element
function updateList() {
    // add your code here
    list.innerHTML = '';

for (let i = 0; i < todoItems.length; i++) {
    const li = document.createElement('li');
    li.textContent = todoItems[i];
    list.appendChild(li);
   }
}


updateList();



// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function () {
    // add your code here

const newItem = itemInput.value.trim();

if (newItem !=='') {
    todoItems.push(newItem);
    updateList();
    itemInput.value = '';

}
const imageId = 'img-' + newItem.toLowerCase();
const matchingImage = document.getElementById(imageId);

if (matchingImage) {
    matchingImage.style.display = 'block';
    setTimeout(function () {
        matchingImage.style.display = 'none';

    }, 1600);
}
});




// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    // add your code here
    todoItems.sort();
    updateList();
});




// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    // add your code here
    todoItems = [];
    updateList();
});







