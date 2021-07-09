showMessage("Solution 1");

function showMessage(msg) {
  setTimeout(() => showAlertBox(msg), 1000);
}

function showAlertBox(msg) {
  alert(msg);
}
