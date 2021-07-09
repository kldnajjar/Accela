const msg = "Solution 2";

(function (msg) {
  setTimeout(() => {
    showAlertBox(msg);
  }, 1000);

  function showAlertBox(msg) {
    alert(msg);
  }
})(msg);
