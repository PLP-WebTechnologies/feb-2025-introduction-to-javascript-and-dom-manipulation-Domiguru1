// Example JavaScript to show it's linked correctly
// console.log("The script is linked and running!");

// Function to change the text content dynamically
function changeText() {
    const textElement = document.getElementById("dynamic-text");
    textElement.textContent = "The text has been updated dynamically!";
}

// Function to modify CSS styles via JavaScript
function changeStyle() {
    const textElement = document.getElementById("dynamic-text");
    textElement.style.color = "red"; // Change text color
    textElement.style.fontSize = "30px"; // Change text size
    textElement.style.fontWeight = "bold"; // Make text bold
}

// Function to add a new element
function addElement() {
    const box = document.getElementById("dynamic-box");
    const newElement = document.createElement("p");
    newElement.textContent = "This is a dynamically added element.";
    box.appendChild(newElement);
}

// Function to remove the last added element
function removeElement() {
    const box = document.getElementById("dynamic-box");
    // Remove the last child element if it exists
    if (box.lastElementChild && box.lastElementChild.tagName === "P") {
        box.removeChild(box.lastElementChild);
    }
}