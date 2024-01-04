// function changeColor(newColor) {
//     const elem = document.getElementById("para");
//     elem.style.color = newColor;
//   }

// let para = document.getElementById('para')
// console.log(para);

// getElementsByClassName only selects elements that have both given classes
// const allOrangeJuiceByClass = document.getElementsByClassName("orange juice");
// let result = "document.getElementsByClassName('orange juice')";
// for (let i = 0; i < allOrangeJuiceByClass.length; i++) {
//   result += `\n  ${allOrangeJuiceByClass[i].textContent}`;
// }

// // querySelector only selects full complete matches
// const allOrangeJuiceQuery = document.querySelectorAll(".orange.juice");
// result += "\n\ndocument.querySelectorAll('.orange.juice')";
// for (let i = 0; i < allOrangeJuiceQuery.length; i++) {
//   result += `\n  ${allOrangeJuiceQuery[i].textContent}`;
// }

// document.getElementById("resultArea").value = result;
var ulElement = document.getElementById("myList");

// Select li elements by class name and change their color
var liElements = ulElement.getElementsByClassName("item");
console.log(liElements);
// console.log(liElements[6]);
// console.log(liElements[10]);

for (var i = 0; i < liElements.length; i++) {
    // Change the color based on index
    if (i % 2 === 0) {
        liElements[i].style.color = "blue"; // Change color for even-indexed items
    } else {
        liElements[i].style.color = "green"; // Change color for odd-indexed items
    }
}