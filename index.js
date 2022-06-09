// Meters to feet
let mtf = document.getElementById("mtf");
// Feet to meters
let ftm = document.getElementById("ftm");
// Liters to gallons
let ltg = document.getElementById("ltg");
// Gallons to liters
let gtl = document.getElementById("gtl");
// Kilos to pounds
let ktp = document.getElementById("ktp");
// Pounds to kilos
let ptk = document.getElementById("ptk");
// Input
let inputValue = document.getElementById("unit");
// Input number
let inputNumber = document.getElementsByClassName("entered-value");

inputValue.addEventListener("change", (e) => {
  let enteredNubmer = e.target.value;
  // Condition for empty Input
  Array.from(inputNumber).forEach((item) => {
    item.textContent = enteredNubmer;
    if (enteredNubmer == 0 || null) {
      item.textContent = 0;
    }
  });
  // Calculations
  // Meters to feet
  mtf.textContent = (enteredNubmer * 3.28).toFixed(3);
  // Feet to meters
  ftm.textContent = (enteredNubmer * 3.28).toFixed(3);
  // Liters to gallons
  ltg.textContent = (enteredNubmer * 0.264).toFixed(3);
  // Gallons to liters
  gtl.textContent = (enteredNubmer * 3.785).toFixed(3);
  // Kilos to pounds
  ktp.textContent = (enteredNubmer * 2.204).toFixed(3);
  // Pounds to kilos
  ptk.textContent = (enteredNubmer * 0.453).toFixed(3);
});
