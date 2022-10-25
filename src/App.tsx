import { useState } from "react";
import "./App.scss";
import bgCardFront from "./assets/images/bg-card-front.png";
import bgCardBack from "./assets/images/bg-card-back.png";

function App() {
  
  return (
    <div className="main">
      <header className="main__header">
        <div className="main__header__cardfront">
          <img src={bgCardFront} alt="Card Front" />
          <p className="main__header__cardfront__number">0000 0000 0000 0000</p>
          <p className="main__header__cardfront__name">Jane Appleseed</p>
          <p className="main__header__cardfront__yy-mm">00/00</p>
        </div>
        <div className="main__header__cardback">
          <img src={bgCardBack} alt="Card back" />
          <p className="main__header__cardback__cvc">000</p>
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
          />
        </label>
        <label htmlFor="card-number">
          Card Number
          <input
            type="text"
            id="card-number"
            name="card-number"
            placeholder="e.g. 1234 5678 9123 0000"
          />
        </label>
        <div className="main__form__group">
          <div className="main__form__group">
            <label htmlFor="card-number">
              Exp. Date (mm/yy)
              <input type="text" id="card-mm" name="card-mm" placeholder="MM" />
              <input type="text" id="card-yy" name="card-yy" placeholder="YY" />
            </label>
          </div>
          <label htmlFor="card-cvc">
            cvc
            <input
              type="text"
              id="card-cvc"
              name="card-cvc"
              placeholder="e.g. 1234 5678 9123 0000"
            />
          </label>
        </div>
        <button>Confirm</button>
      </form>
    </div>
  );
}

export default App;
