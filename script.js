// saare desh
let countryList = {
  AED: "AE",
  CNY: "CN",
  EUR: "FR",
  INR: "IN",
  JPY: "JP",
  RUB: "RU",
  USD: "US",
};

let from = document.querySelector("#from");
let to = document.querySelector("#to");
let convert = document.querySelector("#convert");
let reset = document.querySelector("#reset");

// first dropdown
let currency_selector1 = document.querySelector("#currency-selector1");
let flagImage1 = document.querySelector("#flagImage1");
// Second Dropdown
let currency_selector2 = document.querySelector("#currency-selector2");
let flagImage2 = document.querySelector("#flagImage2");

// DOM Styling
let fromName = document.querySelector("#fromName");
let fromValue = document.querySelectorAll("#currency-selector1 option");

let toName = document.querySelector("#toName");
let toValue = document.querySelectorAll("#currency-selector2 option");

// Show Flags
function showFlag() {
  for (let i in countryList) {
    currency_selector1.addEventListener("change", (element) => {
      let countryCode = element.target.value;
      console.log(countryCode); // countryCode is the key for countryList array
      let newSrc = `https://flagsapi.com/${countryList[countryCode]}/flat/64.png`;

      flagImage1.setAttribute("src", `${newSrc}`);
    });

    currency_selector2.addEventListener("change", (element) => {
      let countryCode = element.target.value;
      console.log(countryCode); // countryCode is the key for countryList array
      let newSrc = `https://flagsapi.com/${countryList[countryCode]}/flat/64.png`;

      flagImage2.setAttribute("src", `${newSrc}`);
    });

    currency_selector1.addEventListener("change", (element) => {
      let countryCode = element.target.value;
      if (countryCode == "USD") {
        fromName.innerHTML = "United States Dollar";
        fromName.style.backgroundColor = "rgba(80, 86, 255)";
      } else if (countryCode == "AED") {
        fromName.innerHTML = "United Arab Emirates dirham";
        fromName.style.backgroundColor = "#00a100";
      } else if (countryCode == "CNY") {
        fromName.innerHTML = "Chinese yuan renminbi";
        fromName.style.backgroundColor = "rgb(222 41 16)";
      } else if (countryCode == "EUR") {
        fromName.innerHTML = "The euro";
        fromName.style.backgroundColor = "rgb(239 65 53)";
      } else if (countryCode == "INR") {
        fromName.innerHTML = "Indian Rupee";
        fromName.style.backgroundColor = "rgb(255 153 51)";
      } else if (countryCode == "JPY") {
        fromName.innerHTML = "Japanese yen";
        fromName.style.backgroundColor = "rgb(188 0 45)";
      } else if (countryCode == "RUB") {
        fromName.innerHTML = "Russian Ruble";
        fromName.style.backgroundColor = "rgb(0 0 255)";
      }
    });

    currency_selector2.addEventListener("change", (element) => {
      let countryCode = element.target.value;
      if (countryCode == "USD") {
        toName.innerHTML = "United States Dollar";
        toName.style.backgroundColor = "rgba(80, 86, 255)";
      } else if (countryCode == "AED") {
        toName.innerHTML = "United Arab Emirates dirham";
        toName.style.backgroundColor = "#00a100";
      } else if (countryCode == "CNY") {
        toName.innerHTML = "Chinese yuan renminbi";
        toName.style.backgroundColor = "rgb(222 41 16)";
      } else if (countryCode == "EUR") {
        toName.innerHTML = "The euro";
        toName.style.backgroundColor = "rgb(239 65 53)";
      } else if (countryCode == "INR") {
        toName.innerHTML = "Indian Rupee";
        toName.style.backgroundColor = "rgb(255 153 51)";
      } else if (countryCode == "JPY") {
        toName.innerHTML = "Japanese yen";
        toName.style.backgroundColor = "rgb(188 0 45)";
      } else if (countryCode == "RUB") {
        toName.innerHTML = "Russian Ruble";
        toName.style.backgroundColor = "rgb(0 0 255)";
      }
    });
  }
}
showFlag();
