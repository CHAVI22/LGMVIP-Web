var selectedRow = null;

function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["studentName"] = document.getElementById("studentName").value;
  formData["collegeName"] = document.getElementById("collegeName").value;
  formData["Email"] = document.getElementById("Email").value;
  formData["Gender"] = document.getElementById("Gender").value;
  formData["Contact"] = document.getElementById("Contact").value;
  formData["Address"] = document.getElementById("Address").value;
  formData["Skills"] = document.getElementById("Skills").value;

  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.studentName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.collegeName;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.Email;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.Gender;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.Contact;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.Address;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.Skills;
  cell7 = newRow.insertCell(7);
  cell7.innerHTML = `<button onClick="onEdit(this)">Edit</button> 
                    <button onClick="onDelete(this)">Delete</button>`
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("studentName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("collegeName").value = selectedRow.cells[1].innerHTML;
  document.getElementById("Email").value = selectedRow.cells[2].innerHTML;
  document.getElementById("Gender").value = selectedRow.cells[3].innerHTML;
  document.getElementById("Contact").value = selectedRow.cells[4].innerHTML;
  document.getElementById("Address").value = selectedRow.cells[5].innerHTML;
  document.getElementById("Skills").value = selectedRow.cells[6].innerHTML;

}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.studentName;
  selectedRow.cells[1].innerHTML = formData.collegeName;
  selectedRow.cells[2].innerHTML = formData.Email;
  selectedRow.cells[3].innerHTML = formData.Gender;
  selectedRow.cells[4].innerHTML = formData.Contact;
  selectedRow.cells[5].innerHTML = formData.Address;
  selectedRow.cells[6].innerHTML = formData.Skills;

}

function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
    resetForm();
  }
}

function resetForm() {
  document.getElementById("studentName").value = "";
  document.getElementById("collegeName").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Gender").value = "";
  document.getElementById("Contact").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Skills").value = "";

  selectedRow = null;
}
