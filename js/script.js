// Function for checking valid input
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
// Function for clear and hide notify section
function clearError() {
  const notification = document.querySelector(".notify-section");
  notification.innerHTML = "";
  notification.style.display = "none";
}
// Get input value based on Id
function getValue(id) {
  const idObj = document.getElementById(id);
  return Number(idObj.value);
}
// Print output value based on Id
function putValue(id, value) {
  const idObj = document.getElementById(id);
  idObj.innerText = value;
}
// Calculating Total Expense
function calcExpenses() {
  const income = getValue("income");
  const food = getValue("food");
  const rent = getValue("rent");
  const cloth = getValue("cloth");
  const totalExp = food + rent + cloth;
  const totalBal = income - totalExp;
  return [income, totalExp, totalBal];
}
// Event listener for calculate button
document.getElementById("calcBtn").addEventListener("click", function () {
  clearError();
  if (isInputValid(income, food, rent, cloth)) {
    const [income, totalExp, totalBal] = calcExpenses();
    if (totalBal >= 0) {
      putValue("totalExp", totalExp);
      putValue("totalBal", totalBal);
    } else {
      showError("Your expense is greater than your income.");
    }
  }
});
// Event listener for savings button
document.getElementById("saveBtn").addEventListener("click", function () {
  clearError();
  document.getElementById("calcBtn").click();
  if (isInputValid(save)) {
    const save = getValue("save");
    const [income, totalExp, totalBal] = calcExpenses();
    const totalSave = income * save * 0.01;
    const totalRem = income - totalExp - totalSave;
    if (totalRem >= 0) {
      putValue("totalSave", totalSave);
      putValue("totalRem", totalRem);
    } else {
      showError("Your savings is greater than your balance.");
    }
  }
});
// Showing error message
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
