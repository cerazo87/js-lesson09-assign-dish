// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// appears when guest list is full
const assignButton = document.querySelector(".assign");
// targets the list that will populate with the guest’s name and their assigned dish
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
    const guest = guestInput.value;
    if (guest !== "") {
      addToList(guest);
      updateGuestCount();
      clearInput();
    }
  });
  
  const addToList = function (guest) {
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
  };
  
  const clearInput = function () {
    guestInput.value = "";
  };
  
  const updateGuestCount = function () {
    const guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;
  
    if (guests.length === 8) {
      addGuestButton.classList.add("hide");
      guestInput.classList.add("hide");
      guestInputLabel.classList.add("hide");
      guestFull.classList.remove("hide");
    }
  };
// Below the updateGuestCount function, create a function expression called assignItems.
// Inside the function body, create a variable called potluckItems to hold an array.
const assignItems = function () {
    const potluckItems = ["potato-salad", "hummus", "salad", "pasta", "drinks", "rice", "cookies", 
"chips", "bean-dip", "fruit-salad", "pizza", "beer"];
// Create a variable called allGuests to select ALL the list elements inside the unordered list with a class of “guest-list”.
// Below the allGuests variable, write a for...of loop to loop over the allGuests array using guest as the variable: for (let guest of allGuests).
//Inside the for...of loop, create a variable called randomPotluckIndex
//In the value, you’ll generate a number between 0 and the length of potluckItems to select a random element from the array: 
//Math.floor(Math.random() * potluckItems.length);.
const allGuests = document.querySelectorAll(".guest-list li");
for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
//Below the randomPotluckIndex variable, declare a variable called randomPotluckItem
//In the value, add the item from the potluckItems array at the index position of randomPotluckIndex.
    let randomPotluckItem = potluckItems[randomPotluckIndex];
//In the for...of loop, create a variable called listItem. As the value, create a new "li" element.
    let listItem = document.createElement("li");
//Set the innerText of listItem to a string with the guest name and item the person is bringing:
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
//Write the assignedItems variable and append the listItem variable to it.
    assignedItems.append(listItem);
//Attach splice() to potluckItems
//Inside the method, remove the item at the randomPotluckIndex
    potluckItems.splice(randomPotluckIndex, 1);
    }
};
//Below the assignItems function, write an event listener for a click on the assignButton element. 
//Inside the function body, call the assignItems function.
assignButton.addEventListener("click", function () {
    assignItems();
//To fix the duplicate dish assignment, after the call to assignItems() in your assignButton event
//listener, add code to disable the button once the loop completes using the disabled property and the boolean 
//true: assignButton.disabled = true;.
    assignButton.disabled = true;
});