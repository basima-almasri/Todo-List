// const container = document.querySelector(".todo-form");
// const input = document.querySelector(".todo-input");
// const list = document.querySelector(".todo-list");
// const todoObject = {
//   todoList: [],
// };
// console.log(todoObject);
// function renderItem(item) {
//   const index = todoObject["todoList"].length;

//   const markup = `

//     <li class="todo-item" data-type=${index}><span class="todo-span data-type=${index}">${item}</span>
//       <input type="text" class="input-edit" name="item[${index}]"  value="${item}" />
//       <div class="">
//         <img src="pen-to-square-regular.svg" class="img-edit" data-type=${index} alt="">
//         <i class=" btn-del fa-sharp fa-solid fa-trash" style="color: #cc1934;" data-type=${index}></i>
//       </div>
//     </li>
//   `;

//   list.insertAdjacentHTML("beforeend", markup);

//   input.value = "";
// }
// const delteBtns = document.querySelectorAll(".btn-del");
// const editBtns = document.querySelectorAll(".img-edit");
// const inputEdit = document.querySelectorAll(".input-edit");
// const dataStorage = localStorage.getItem("todoObject");

// document.addEventListener("keydown", function (event) {
//   if (event.keyCode === 13 || event.which === 13) {
//     const focusedElement = document.activeElement;

//     if (focusedElement === input) {
//       const value = input.value;
//       console.log({ value });
//       if (value) {
//         renderItem(value);

// const items = document.querySelectorAll(".todo-span");
//         console.log(items);

//         todoObject["todoList"] = [...items].map(
//           (item) => item.childNodes[0].nodeValue
//         );
//         console.log(todoObject);
//         localStorage.setItem("todoObject", JSON.stringify(todoObject));
//         delteBtns.forEach((btn) => {
//           console.log("del");
//           btn.addEventListener("click", function (e) {
//             const target = e.target.closest(".todo-item");
//             const itemDeleted =
//               target.querySelector(".todo-span").childNodes[0].nodeValue;

//             console.log({ target });
//             todoObject["todoList"] = todoObject["todoList"].filter((item) => {
//               console.log(item !== itemDeleted);
//               return item !== itemDeleted;
//             });
//             console.log(todoObject);
//             localStorage.setItem("todoObject", JSON.stringify(todoObject));
//             target.remove();
//           });
//         });
//       }
//     }
//   }
// });
// if (dataStorage) {
//   const dataStorageObject = JSON.parse(dataStorage);
//   console.log(dataStorageObject);
//   console.log(dataStorageObject["todoList"]);

//   todoObject["todoList"] = dataStorageObject["todoList"];

//   // );
//   console.log(todoObject);
//   todoObject["todoList"].forEach((item, index) => renderItem(item));
// }

// editBtns.forEach((btn) => {
//   btn.addEventListener("click", function (e) {
//     const target = e.target.closest(".todo-item");
//     index = btn.dataset.type;
//     console.log(items[index]);
//     items[index].style.display = "none";
//     inputEdit[index].style.display = "block";
//     editBtns[index].style.display = "none";
//     delteBtns[index].style.display = "none";

//     document.addEventListener("keydown", function (event) {
//       if (event.keyCode === 13 || event.which === 13) {
//         const focusedElement = document.activeElement;
//         if (focusedElement === inputEdit[index]) {
//           const value = inputEdit[index].value;
//           console.log({ value });
//           items[index].childNodes[0].nodeValue = value;
//           items[index].style.display = "block";
//           inputEdit[index].style.display = "none";
//           editBtns[index].style.display = "block";
//           delteBtns[index].style.display = "block";
//           todoOBject["todoList"][index] = value;
//         }
//         localStorage.setItem("TodoObject", JSON.stringify(todoOBject));
//       }
//     });
//   });
// });
const container = document.querySelector(".todo-form");
const input = document.querySelector(".todo-input");
const list = document.querySelectorAll(".list");
const todoList = document.querySelector(".todoList");
const CompleteMenu = document.querySelector(".todo-complete");
const CompleteList = document.querySelector(".CompleteList");
const clear = document.querySelector("#clear");
clear.addEventListener("click", () => localStorage.clear());
const todoObject = {
  todoList: [],
  CompleteList: [],
};

function renderItem(itemvalue, indexList) {
  const itemsInList = list[indexList].querySelectorAll(".todo-span");

  const markup = `
    <li class="todo-item" >
      <span class="todo-span">${itemvalue}</span>
      <input type="text" class="input-edit"  value="${itemvalue}" />
      <div class="">
        <img src="pen-to-square-regular.svg" class="btn-edit"  alt="">
        <i class="btn-del fa-sharp fa-solid fa-trash" style="color: #cc1934;" ></i>
      </div>
    </li>
  `;

  list[indexList].insertAdjacentHTML("beforeend", markup);

  input.value = "";
}
/////////////////////////////////////////////////////////////////

// const dataStorage = localStorage.getItem("todoObject");
///////////////////////////////////////////////////////
function deleteItem(e, listName) {
  const target = e.target.closest(".todo-item");
  const itemDeleted = target.querySelector(".todo-span").textContent;

  todoObject[listName] = todoObject[listName].filter(
    (item) => item !== itemDeleted
  );
  localStorage.setItem("TodoObject", JSON.stringify(todoObject));
  target.remove();
}
////////////////////////////////////////////////////////

////////////////////////////////

////////////////////////////////////////////////
list.forEach((listEl) => {
  listEl.addEventListener("click", function (event) {
    const listName = listEl.classList[0];
    const btDel = event.target.classList.contains("btn-del");
    const btnEdit = event.target.classList.contains("btn-edit");
    const item = event.target.closest(`.${listName} .todo-item`);
    const input = event.target.classList.contains("input-edit");
    console.log({ target: event.target });
    console.log({ listEnoyer: listName });
    if (btnEdit) {
      editItem(event.target, listName);
    }
    if (btDel) {
      deleteItem(event, listName);
    }
    if (item && !input && !btDel && !btnEdit) {
      listName === "todoList"
        ? handleItemClick(item, todoList, CompleteList)
        : handleItemClick(item, CompleteList, todoList);
    }
  });
});
////////////////////////////////////
// todoList.addEventListener("click", function (event) {
//   const btDel = event.target.classList.contains("btn-del");
//   const btnEdit = event.target.classList.contains("btn-edit");
//   const item = event.target.closest(".todo-item");
//   console.log({ btDel, btnEdit });
//   if (item && !btDel && !btnEdit) {
//     handleItemClick(item, todoList, CompleteList);
//   }
// }); ///////////////////

// CompleteList.addEventListener("click", function (event) {
//   const btDel = event.target.classList.contains("btn-del");
//   const btnEdit = event.target.classList.contains("btn-edit");
//   const item = event.target.closest(".todo-item");
//   if (item && !btDel && !btnEdit) {
//     handleItemClick(item, CompleteList, todoList);
//   }
// });
//////////////////////////////////
function handleItemClick(item, listOld, listNew) {
  const listOldName = listOld.classList[0];
  const listNewName = listNew.classList[0];
  // console.log({ listNewName, listOldName });
  listNew.appendChild(item.cloneNode(true));
  const items = listNew.querySelectorAll(".todo-span");
  const itemValue = item.querySelector(".todo-span");

  todoObject[listNewName] = [...items].map((item, index) => item.textContent);
  todoObject[listOldName] = todoObject[listOldName].filter(
    (el) => el !== itemValue.textContent
  );

  item.parentNode.removeChild(item);

  localStorage.setItem("TodoObject", JSON.stringify(todoObject));
}
////////////////////////////////////////////////////

//////////////////////////////////////////////////
document.addEventListener("keydown", function (event) {
  if (event.which === 13) {
    const focusedElement = document.activeElement;

    if (focusedElement === input) {
      const value = input.value;
      if (value) {
        renderItem(value, 0);

        const items = todoList.querySelectorAll(".todo-span");

        todoObject["todoList"] = [...items].map((item) => item.textContent);
        console.log(todoObject);
        localStorage.setItem("TodoObject", JSON.stringify(todoObject));
      }
    }
  }
});
////////////////////////////
function editItem(target, listName) {
  // const items = document.querySelectorAll(`.${listName} .todo-span`);
  // console.log({ items });

  console.log({ targetEl: target.closest("li") });
  const item = target.closest("li");
  const itemValue = item.querySelector(".todo-span");
  const inputEdit = item.querySelector(".input-edit");
  const delteBtn = item.querySelector(".btn-del");
  const editBtn = item.querySelector(".btn-edit");

  itemValue.style.display = "none";
  inputEdit.style.display = "block";
  editBtn.style.display = "none";
  delteBtn.style.display = "none";

  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      const focusedElement = document.activeElement;
      if (focusedElement === inputEdit) {
        const value = inputEdit.value;

        itemValue.style.display = "block";
        inputEdit.style.display = "none";
        editBtn.style.display = "block";
        delteBtn.style.display = "block";
        // todoObject[listName] = value;

        const index = todoObject[listName].findIndex((el) => {
          return el == itemValue.textContent;
        });
        console.log({
          indexfinded: index,
          todoObjectList: todoObject[listName],
          itemValue: itemValue.textContent,
        });
        itemValue.childNodes[0].nodeValue = value;
        todoObject[listName][index] = value;
        console.log({ listName: todoObject[listName] });
      }
      localStorage.setItem("TodoObject", JSON.stringify(todoObject));
    }
  });
}
const dataStorage = localStorage.getItem("TodoObject");
if (dataStorage) {
  const dataStorageObject = JSON.parse(dataStorage);
  console.log(dataStorageObject);
  Object.keys(dataStorageObject).forEach((key, index) => {
    if (dataStorageObject[key].length) {
      console.log((todoObject[key] = dataStorageObject[key]));
      console.log(todoObject);
      dataStorageObject[key].forEach((item) => {
        renderItem(item, index);
      });
    }
  });
}
