const todoInput = document.querySelector("#todo");
const dateInput = document.querySelector("#date");
const btnAction = document.querySelector("#submit");
const tableItems = document.querySelector("#table-items");

btnAction.addEventListener("click", function () {
  if (checkInputLength()) {
    createTableRow();
  }
});

function createTableRow() {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");

  td1.appendChild(document.createTextNode(dateInput.value));
  td2.appendChild(document.createTextNode(todoInput.value));
  td3.innerHTML = `<button class="btn"><i class="bi bi-x-octagon" title="Remove activity"></i></button> <button class="btn"><i class="bi bi-check2-circle" title="Mark as completed"></i></button>`;

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  todoInput.value = "";
  dateInput.value = "";
  return tableItems.appendChild(tr);
}

function checkInputLength() {
  if (todoInput.value.length > 10) {
    return true;
  }
}
