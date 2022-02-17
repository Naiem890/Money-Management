function isInputValid() {
  return true;
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
  putValue("totalExp", totalExp);
  putValue("totalBal", totalBal);
  return [income, totalExp, totalBal];
}
document.getElementById("calcBtn").addEventListener("click", function () {
  if (isInputValid(income, food, rent, cloth)) {
    calcExpenses();
  }
});
document.getElementById("saveBtn").addEventListener("click", function () {
  if (isInputValid(save)) {
    const save = getValue("save");
    const [income, totalExp, totalBal] = calcExpenses();
    const totalSave = income * (save / 100);
    const totalRem = income - totalExp - totalSave;
    putValue("totalSave", totalSave);
    putValue("totalRem", totalRem);
  }
});
