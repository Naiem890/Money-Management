function isInputValid() {
  let valid = true;
  for (const arg of arguments) {
    if (isNaN(arg.value)) {
      valid = false;
      const message = "Invalid input for " + arg.id;
      showError(message);
    } else if (Number(arg.value) < 0) {
      valid = false;
      const message = "Enter positive number for " + arg.id;
      showError(message);
    }
  }
  return valid;
}
function reset() {
  const notification = document.querySelector(".notify-section");
  notification.innerHTML = "";
  notification.style.display = "none";
}
function getValue(id) {
  const idObj = document.getElementById(id);
  return Number(idObj.value);
}
function putValue(id, value) {
  const idObj = document.getElementById(id);
  idObj.innerText = value;
}
function calcExpenses() {
  const income = getValue("income");
  const food = getValue("food");
  const rent = getValue("rent");
  const cloth = getValue("cloth");
  const totalExp = food + rent + cloth;
  const totalBal = income - totalExp;
  return [income, totalExp, totalBal];
}
document.getElementById("calcBtn").addEventListener("click", function () {
  reset();
  if (isInputValid(income, food, rent, cloth)) {
    const [, totalExp, totalBal] = calcExpenses();
    putValue("totalExp", totalExp);
    putValue("totalBal", totalBal);
  }
});
document.getElementById("saveBtn").addEventListener("click", function () {
  reset();
  if (isInputValid(save)) {
    const save = getValue("save");
    const [income, totalExp] = calcExpenses();
    const totalSave = income * save * 0.01;
    const totalRem = income - totalExp - totalSave;
    putValue("totalSave", totalSave);
    putValue("totalRem", totalRem);
  }
});

function showError(message) {
  putValue("totalExp", 0);
  putValue("totalBal", 0);
  putValue("totalSave", 0);
  putValue("totalRem", 0);
  const notification = document.querySelector(".notify-section");
  notification.style.display = "block";
  errorText = document.createElement("p");
  errorText.innerText = "ERROR: " + message;
  notification.appendChild(errorText);
}
