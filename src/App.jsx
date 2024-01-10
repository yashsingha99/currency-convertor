import { useState } from "react";
import "./App.css";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [amount, setAmount] = useState(0);
  const [ConvertAmount, setConvertAmount] = useState(0);
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  
  const CurrencyInfo = useCurrencyInfo(from);
  const options = Object.keys(CurrencyInfo);
  const onSwap = () =>{
    setFrom(to);
    setTo(from);
    setAmount(ConvertAmount)
    setConvertAmount(amount)
  }

const convert = () =>{
  setConvertAmount(amount * CurrencyInfo[to])
}
  return (
    <>
      <div
        className="container-fluid d-flex 
        justify-content-center align-items-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <div className="content">
          <InputBox 
            label={'From'}
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency)=>{setFrom(currency)}} // change when selectbox is changed in frombox
            onAmountChange={(amount)=>{setAmount(amount)}}
            selectCurrency={from}// for show "tobox currency"            
          />
          <button id="swap" className="swap"
          onClick={onSwap}
          >
            swap
          </button>
          <InputBox 
            label={'To'}
            amount={ConvertAmount}
            currencyOptions={options}
            onCurrencyChange={(currency)=>{setTo(currency)}}// change when selectbox is changed in tobox
            selectCurrency={to} // for show "tobox currency"
            amountDisable
          />
          <button id="convert" className="convert"
          onClick={convert}
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
