// Convert Button
let first = document.querySelector("#currency-selector1");
let second = document.querySelector("#currency-selector2");

let btn = document.querySelector("#convert");

let entry = document.querySelector("#from");
let result = document.querySelector("#to");

btn.addEventListener("click", () => {
  let fromCurrency = first.value;
  let toCurrency = second.value;
  if (entry.value <= 0) {
    entry.value = 1
  } else if (fromCurrency == toCurrency) {
    result.value = 1 * entry.value
  } else if(fromCurrency == "AED" && toCurrency == "CNY"){
    result.value = 1.959427  * entry.value
  } else if(fromCurrency == "AED" && toCurrency == "EUR"){
    result.value = 0.25003038  * entry.value
  } else if(fromCurrency == "AED" && toCurrency == "INR"){
    result.value = 22.560243  * entry.value
  } else if(fromCurrency == "AED" && toCurrency == "JPY"){
    result.value = 40.477507  * entry.value
  } else if(fromCurrency == "AED" && toCurrency == "RUB"){
    result.value = 25.025949  * entry.value
  } else if(fromCurrency == "AED" && toCurrency == "USD"){
    result.value = 0.27229408  * entry.value
  }

  if(fromCurrency == "CNY" && toCurrency == "AED"){
    result.value = 0.51034984 * entry.value
  } else if(fromCurrency == "CNY" && toCurrency == "EUR"){
    result.value = 0.12758607 * entry.value
  } else if(fromCurrency == "CNY" && toCurrency == "INR"){
    result.value = 11.513015 * entry.value
  } else if(fromCurrency == "CNY" && toCurrency == "JPY"){
    result.value = 20.659273 * entry.value
  } else if(fromCurrency == "CNY" && toCurrency == "RUB"){
    result.value = 12.804463 * entry.value
  } else if(fromCurrency == "CNY" && toCurrency == "USD"){
    result.value = 0.13896524 * entry.value
  }

  if(fromCurrency == "EUR" && toCurrency == "AED"){
    result.value = 4.0001961 * entry.value 
  } else if(fromCurrency == "EUR" && toCurrency == "CNY"){
    result.value = 7.8380686 * entry.value 
  } else if(fromCurrency == "EUR" && toCurrency == "INR"){
    result.value = 90.246655 * entry.value 
  } else if(fromCurrency == "EUR" && toCurrency == "JPY"){
    result.value = 161.96612 * entry.value 
  } else if(fromCurrency == "EUR" && toCurrency == "RUB"){
    result.value = 100.36668 * entry.value 
  } else if(fromCurrency == "EUR" && toCurrency == "USD"){
    result.value = 1.0892297 * entry.value 
  }

  if(fromCurrency == "INR" && toCurrency == "AED"){
    result.value = 0.044323571  * entry.value
  } else if(fromCurrency == "INR" && toCurrency == "CNY"){
    result.value = 0.08684841  * entry.value
  } else if(fromCurrency == "INR" && toCurrency == "EUR"){
    result.value = 0.011079651  * entry.value
  } else if(fromCurrency == "INR" && toCurrency == "JPY"){
    result.value = 1.7946068  * entry.value
  } else if(fromCurrency == "INR" && toCurrency == "RUB"){
    result.value = 1.1125247  * entry.value
  } else if(fromCurrency == "INR" && toCurrency == "USD"){
    result.value = 0.012069046  * entry.value
  }

  if(fromCurrency == "JPY" && toCurrency == "AED"){
    result.value = 0.024698207 * entry.value
  } else if(fromCurrency == "JPY" && toCurrency == "CNY"){
    result.value = 0.048996188 * entry.value
  } else if(fromCurrency == "JPY" && toCurrency == "EUR"){
    result.value = 0.0061738 * entry.value
  } else if(fromCurrency == "JPY" && toCurrency == "INR"){
    result.value = 0.55722511 * entry.value
  } else if(fromCurrency == "JPY" && toCurrency == "RUB"){
    result.value = 0.61992673 * entry.value
  } else if(fromCurrency == "JPY" && toCurrency == "USD"){
    result.value = 0.0067251755 * entry.value
  }

  if(fromCurrency == "RUB" && toCurrency == "AED"){
    result.value = 0.039840526 * entry.value
  } else if(fromCurrency == "RUB" && toCurrency == "CNY"){
    result.value = 0.078064368 * entry.value
  } else if(fromCurrency == "RUB" && toCurrency == "EUR"){
    result.value = 0.0099590151 * entry.value
  } else if(fromCurrency == "RUB" && toCurrency == "INR"){
    result.value = 0.89885641 * entry.value
  } else if(fromCurrency == "RUB" && toCurrency == "JPY"){
    result.value = 0.6130939 * entry.value
  } else if(fromCurrency == "RUB" && toCurrency == "USD"){
    result.value = 0.010848339 * entry.value
  }

  if(fromCurrency == "USD" && toCurrency == "AED"){
    result.value = 3.6725001 * entry.value
  } else if(fromCurrency == "USD" && toCurrency == "CNY"){
    result.value = 7.195974 * entry.value
  } else if(fromCurrency == "USD" && toCurrency == "EUR"){
    result.value = 0.91802208 * entry.value
  } else if(fromCurrency == "USD" && toCurrency == "INR"){
    result.value = 82.85659 * entry.value
  } else if(fromCurrency == "USD" && toCurrency == "JPY"){
    result.value = 148.6950097 * entry.value
  } else if(fromCurrency == "USD" && toCurrency == "RUB"){
    result.value = 92.180007 * entry.value
  }

});

// Resert Button JavaScript
reset.addEventListener("click", () => {
  from.value = "1";
  to.value = "";
});
