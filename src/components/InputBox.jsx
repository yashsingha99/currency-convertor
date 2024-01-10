import React, { useId } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./input.css";
function InputBox({
  label,   // for swapping, to show on screen..........
  amount, // to take value from input box also for show in input box and for swapping from "from" into "to" and vice and versa.........
  onAmountChange, // for change amount in  "from" hook only.....
  onCurrencyChange, // for change currency in "to" or "from" hook....
  currencyOptions = [], // for use store all options.....
  selectCurrency = "usd", // to show currency in currency type.....
  amountDisable = false, // only disable
  currencyDisable = false, // only disable
}) {
  const useCurrencyId = useId(); // to use for unique id for each currency
  return (
    <>
      <div className="container ">
        <form>
          <div className="input">
            <label htmlFor={useCurrencyId}>{label}</label>
            <input
              type="number"
              className="inp"
              id={useCurrencyId}
              placeholder="Enter number"
              disabled={amountDisable}
              value={amount}
              onChange={(e) =>  // it is for change amount when inputbox is changed..
                onAmountChange && onAmountChange(Number(e.target.value))
              }
            />
          </div>
          <div className="dropBox">
            <p>Currency Type</p>
            <select
              className="opt"
              onChange={(e) => {  //it is for change currency when selectbox is changed..
                onCurrencyChange && onCurrencyChange(e.target.value);
              }}
              disabled={currencyDisable}
              value={selectCurrency}
            >
              {currencyOptions.map((currency) => ( // for show all optons (all currency type ) in drop down.......
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    </>
  );
}
export default InputBox;
