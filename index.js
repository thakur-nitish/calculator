function insertValue(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function backspace() {
  let result = document.getElementById("result").value;
  document.getElementById("result").value = result.slice(0, result.length - 1);
}

function calculate() {
  let result = document.getElementById("result").value;
  let finalResult = eval(result);
  document.getElementById("result").value = finalResult;
}
