import { useState } from "react";
import "./App.scss";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Thanks from "./components/Thanks/Thanks";
import type { cardType } from "./type";

function App() {
  const [card, setCard] = useState<cardType>({
    number: {value:'',error:''},
    name: {value:'',error:''},
    yy: {value:0,error:''},
    mm:{value:0,error:''},
    cvc: {value:0,error:''},
  });
  const [show, setShow] = useState<boolean>(true)


  const handleChange = (name: string, value: string | number) => {
    setCard({
      ...card,
      [name]:{...[name],value}
    })
  }

  const handleShow = ()=>{
    setShow(!show);
  }

  return (
    <div className="main">
      <Header card={card} />
      {show ? <Form handleChange={handleChange} handleShow={handleShow}/> : <Thanks handleShow={handleShow}/>}
        
    </div>
  );
}

export default App;
