import { useState } from "react";
import { NumericFormat } from "react-number-format";
import { PatternFormat } from "react-number-format";
import "./App.scss";
import Header from "./components/Header/Header";
import type { cardType } from "./type";



const normalizeCardNumber = (value: string) => {
  return value
    .replace(/\s/g, "")
    .match(/.{1,4}/g)
    ?.join(" ")
    .substring(0, 19);
};

function App() {
  const [card, setCard] = useState<cardType>({
    number:'',
    name: '',
    yy: 0,
    mm: 0,
    cvc: 0,
  });


  return (
    <div className="main">
      <Header card={card}/>
      <form className="main__form">
        <label htmlFor="card-name">
          {" "}
          Cardholder name
          <input
            type="text"
            id="card-name"
            name="card-name"
            placeholder="e.g. Jane Applessed"
            onChange={(e) => setCard({
              ...card,name:e.target.value})}
          />
        </label>
        <label htmlFor="card-number">
          Card Number
          <input
            type="text"
            id="card-number"
            name="card-number"
            inputMode="numeric"
            autoComplete="cc-number"
            placeholder="e.g. 1234 5678 9123 0000"
            // value={card.number}
            onChange={(e) => {
              const { value } = e.target;
              setCard({
                ...card,
                number:value
              });
              
              if(value !==''){
                e.target.value=normalizeCardNumber(value) as string                
              }
            }}
            maxLength={19}
          />
        </label>
        <div className="main__form__group">
          <div className="main__form__group">
            <label htmlFor="card-number">
              Exp. Date (mm/yy)
              <input
                type="text"
                id="card-mm"
                name="mm"
                placeholder="MM"
                onChange={(e) => setCard({...card,mm:Number(e.target.value)})}
              />
              <input
                type="text"
                id="card-yy"
                name="yy"
                placeholder="YY"
                onChange={(e) => setCard({...card,yy:Number(e.target.value)})}
              />
            </label>
          </div>
          <label htmlFor="card-cvc">
            cvc
            <input
              type="text"
              id="card-cvc"
              name="card-cvc"
              placeholder="e.g. 123"
              onChange={(e) => setCard({...card, cvc:Number(e.target.value)})}
            />
          </label>
        </div>
        <button>Confirm</button>
      </form>
    </div>
  );
}

export default App;
