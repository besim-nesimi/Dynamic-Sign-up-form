// Elements

const nameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const epostInput = document.querySelector("#eMail");
const addBtn = document.querySelector("#add-btn");
const list = document.querySelector("#userList");

// Event listeners

addBtn.addEventListener("click", add);

// Functions

function add(e) {
    // Skapar behållare för inputs
    const firstName = nameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = epostInput.value.trim();

    // Check if any of the input values are empty or contain whitespace
    if (firstName === "" || lastName === "" || email === "" ||
        firstName.includes(" ") || lastName.includes(" ") || email.includes(" ")) {
        alert("Please enter valid input values without any whitespace or empty fields.");
        return;
    }

        // Check if the email contains the @ symbol
    if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

    // Skapa en sträng som innehåller ovan information för att lägga in i listan.
    const allInputs = `User firstname: ${firstName} - User lastname: ${lastName} - User e-mail: ${email} - `;

    // Lägg nu allInputs in i en lista / listViewItem
    const listItem = document.createElement("li");
    listItem.innerHTML = `<span>${allInputs}</span><button class="delete-btn">X</button>`;
    list.appendChild(listItem);

    // Add CSS class to set background color to green
    listItem.classList.add("green-bg");

    // Remove CSS class after a delay using setTimeout
    setTimeout(function() {
        listItem.classList.remove("green-bg");
    }, 500);

    // Add event listener to the delete button
    const deleteButton = listItem.querySelector(".delete-btn");
    deleteButton.addEventListener("click", remove);
}

function remove(e) {
if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
}
}