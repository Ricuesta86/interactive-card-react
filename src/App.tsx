import { useState } from "react";
import { NumericFormat } from "react-number-format";
import { PatternFormat } from "react-number-format";
import "./App.scss";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import type { cardType } from "./type";

function App() {
  const [card, setCard] = useState<cardType>({
    number:'',
    name: '',
    yy: 0,
    mm: 0,
    cvc: 0,
  });


  const handleChange =(name:string, value:string | number )=>{
    setCard({
      ...card,
      [name]: value
    })
  }

  return (
    <div className="main">
      <Header card={card}/>
      <Form handleChange={handleChange}/>
    </div>
  );
}

export default App;
