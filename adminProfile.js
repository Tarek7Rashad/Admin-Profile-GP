// const openNotificationPage = document.querySelector(".open");
// openNotificationPage.addEventListener("click", function () {
//   window.location.href =
//     "file:///E:/4th%20year%20lecture%20semester%20two/admin/admin.html#";
// });
// let user_name = document.getElementById("username");
// let first_name = document.querySelector(".first_name");
// let last_name = document.querySelector(".last_name");
// let email = document.querySelector(".email");
// let phone_number = document.querySelector(".phone_number");
// let date_of_birth = document.querySelector(".date_of_birth");
// let photo = document.querySelector(".photo");
// user_name.innerHTML = "tarek";
/****************************************-********************************** */

fetch(
  "http://127.0.0.1:5555/e:/4th%20year%20lecture%20semester%20two/WebApplication20/WebApplication20/WebApplication20/Controllers/UpdateProfileController.cs"
).then((result) => {
  console.log(result);
});

// const url =
//   "http://127.0.0.1:5555/e:/4th%20year%20lecture%20semester%20two/WebApplication20/WebApplication20/WebApplication20/Controllers/UpdateProfileController.cs";
// fetch(url).then((res) => {
//   console.log(res);
// });
// let todos = [];

// function getItems() {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => _displayItems(data))
//     .catch((error) => console.error("Unable to get items.", error));
//   console.log(data);
//   console.log(getItems());
// }

// function addItem() {
//   const addNameTextbox = document.getElementById("username");

//   const item = {
//     isComplete: false,
//     name: addNameTextbox.value.trim(),
//   };

//   fetch(uri, {
//     method: "POST",
//     headers: {
//       Accept: "api/[controller",
//       "Content-Type": "api/[controller",
//     },
//     body: JSON.stringify(item),
//   })
//     .then((response) => response.json())
//     .then(() => {
//       getItems();
//       addNameTextbox.value = "";
//     })
//     .catch((error) => console.error("Unable to add item.", error));
// }

// function deleteItem(id) {
//   fetch(`${uri}/${id}`, {
//     method: "DELETE",
//   })
//     .then(() => getItems())
//     .catch((error) => console.error("Unable to delete item.", error));
// }

// function displayEditForm(id) {
//   const item = todos.find((item) => item.id === id);

//   document.getElementById("username").value = item.name;
// document.getElementById("edit-id").value = item.id;
// document.getElementById("edit-isComplete").checked = item.isComplete;
// document.getElementById("editForm").style.display = "block";
// }

// function updateItem() {
//   const itemId = document.getElementById("edit-id").value;
//   const item = {
//     id: parseInt(itemId, 10),
//     isComplete: document.getElementById("edit-isComplete").checked,
//     name: document.getElementById("edit-name").value.trim(),
//   };

// fetch(`${uri}/${itemId}`, {
//   method: "PUT",
//   headers: {
//     Accept: "api/[controller",
//     "Content-Type": "api/[controller",
//   },
//   body: JSON.stringify(item),
// })
//   .then(() => getItems())
//   .catch((error) => console.error("Unable to update item.", error));

// closeInput();

// return false;
// }

// function closeInput() {
//   document.getElementById("editForm").style.display = "none";
// }

// function _displayCount(itemCount) {
//   const name = itemCount === 1 ? "to-do" : "to-dos";

//   document.getElementById("counter").innerText = `${itemCount} ${name}`;
// }

// function _displayItems(data) {
//   const tBody = document.getElementById("todos");
//   tBody.innerHTML = "";

//   _displayCount(data.length);

//   const button = document.createElement("button");

//   data.forEach((item) => {
//     let isCompleteCheckbox = document.createElement("input");
//     isCompleteCheckbox.type = "checkbox";
//     isCompleteCheckbox.disabled = true;
//     isCompleteCheckbox.checked = item.isComplete;

//     let editButton = button.cloneNode(false);
//     editButton.innerText = "Edit";
//     editButton.setAttribute("onclick", `displayEditForm(${item.id})`);

//     let deleteButton = button.cloneNode(false);
//     deleteButton.innerText = "Delete";
//     deleteButton.setAttribute("onclick", `deleteItem(${item.id})`);

//     let tr = tBody.insertRow();

//     let td1 = tr.insertCell(0);
//     td1.appendChild(isCompleteCheckbox);

//     let td2 = tr.insertCell(1);
//     let textNode = document.createTextNode(item.name);
//     td2.appendChild(textNode);

//     let td3 = tr.insertCell(2);
//     td3.appendChild(editButton);

//     let td4 = tr.insertCell(3);
//     td4.appendChild(deleteButton);
//   });

//   todos = data;
// }
