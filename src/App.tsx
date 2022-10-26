import { useState } from "react";
import "./App.scss";
import bgCardFront from "./assets/images/bg-card-front.png";
import bgCardBack from "./assets/images/bg-card-back.png";

type cardType = {
  number: number;
  name: string;
  yy: number;
  mm: number;
  cvc: number;
};

function App() {
  const [card, setCard] = useState<cardType>({
    number: 0,
    name: "",
    yy: 0,
    mm: 0,
    cvc: 0,
  });

  const [numberCard, setNumberCard] = useState<number>(0)
  const [nameCard, setNameCard] = useState<String>('')
  const [yyCard, setYyCard] = useState<number>(0)
  const [mmCard, setMmCard] = useState<number>(0)
  const [cvcCard, setCvcCard] = useState<number>(0)


  const handleChange = (event:any,name:string)=>{
    event.preventDefault();
    console.log(event.target.name.value);
  }




  return (
    <div className="main">
      <header className="main__header">
        <div className="main__header__cardfront">
          <img src={bgCardFront} alt="Card Front" />
          <p className="main__header__cardfront__number">
            {numberCard === 0 ? "0000 0000 0000 0000" : numberCard}
          </p>
          <p className="main__header__cardfront__name">
            {nameCard === "" ? "Jane Appleseed" : nameCard}
          </p>
          <p className="main__header__cardfront__yy-mm">
            {yyCard === 0 ? "00" : yyCard}/{mmCard === 0 ? "00" : mmCard}
          </p>
        </div>
        <div className="main__header__cardback">
          <img src={bgCardBack} alt="Card back" />
          <p className="main__header__cardback__cvc">
            {cvcCard === 0 ? "000" : cvcCard}
          </p>
        </div>
      </header>
      <form className="main__form">
        <label htmlFor="card-name">
          {" "}
          Cardholder name
          <input
            type="text"
            id="card-name"
            name="card-name"
            placeholder="e.g. Jane Applessed"
            onChange={e=>setNameCard(e.target.value)}
          />
        </label>
        <label htmlFor="card-number">
          Card Number
          <input
            type="text"
            id="card-number"
            name="card-number"
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={e=>setNumberCard(Number(e.target.value))}
          />
        </label>
        <div className="main__form__group">
          <div className="main__form__group">
            <label htmlFor="card-number">
              Exp. Date (mm/yy)
              <input type="text" id="card-mm" name="mm" placeholder="MM"  onChange={(e)=>setMmCard(Number(e.target.value))}/>
              <input type="text" id="card-yy" name="yy" placeholder="YY" onChange={(e)=>setYyCard(Number(e.target.value))}/>
            </label>
          </div>
          <label htmlFor="card-cvc">
            cvc
            <input
              type="text"
              id="card-cvc"
              name="card-cvc"
              placeholder="e.g. 1234 5678 9123 0000"
              onChange={e=>setCvcCard(Number(e.target.value))}
            />
          </label>
        </div>
        <button>Confirm</button>
      </form>
    </div>
  );
}

export default App;
