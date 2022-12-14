import { useState } from "react";
import "./App.scss";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Thanks from "./components/Thanks/Thanks";
import type { cardType } from "./type";

function App() {
  const [card, setCard] = useState<cardType>({
    number: '',
    name: '',
    yy: 0,
    mm: 0,
    cvc: 0,
  });
  const [show, setShow] = useState<boolean>(true)

  const handleInicial = () => {
    setCard({
      number: '',
      name: '',
      yy: 0,
      mm: 0,
      cvc: 0,
    })
  }

  const handleChange = (name: string, value: string | number) => {
    setCard({
      ...card,
      [name]: value
    })
  }

  const handleShow = () => {
    setShow(!show);
  }

  return (
    <div className="main">
      <div className="main__header">
        <Header card={card} />
      </div>
      <div className="main__form">
        {show ? <Form handleChange={handleChange} handleShow={handleShow} handleInicial={handleInicial} card={card} /> : <Thanks handleShow={handleShow} />}
      </div>
    </div>
  );
}

export default App;
