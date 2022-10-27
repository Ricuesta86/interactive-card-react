import { ReactEventHandler } from 'react';
import './Form.scss'
type Props ={
    handleChange:(name:string,value:string|number)=>void;
    handleShow:()=>void;
}
const normalizeCardNumber = (value: string) => {
    return value
      .replace(/\s/g, "")
      .match(/.{1,4}/g)
      ?.join(" ")
      .substring(0, 19);
  };
  
const Form = ({handleChange,handleShow}:Props) => {
    const handleSubmit = (event:any)=>{
        handleShow()
    }
  return (
    <div><form className="form" onSubmit={(event)=>handleSubmit(event)}>
    <label htmlFor="card-name">
      {" "}
      Cardholder name
      <input
        type="text"
        id="card-name"
        name="card-name"
        placeholder="e.g. Jane Applessed"
        onChange={(e) => handleChange('name',e.target.value)}
      />
    </label>
    <label htmlFor="card-number">
      Card Number
      <input
        type="text"
        id="card-number"
        name="card-number"
        placeholder="e.g. 1234 5678 9123 0000"
        // value={card.number}
        onChange={(e) => {
          const { value } = e.target;
          handleChange('number',value)          
          if(value !==''){
            e.target.value=normalizeCardNumber(value) as string                
          }
        }}
        maxLength={19}
      />
    </label>
    <div className="form__group">
      <div className="form__group">
        <label htmlFor="card-number">
          Exp. Date (mm/yy)
          <input
            type="text"
            id="card-mm"
            name="mm"
            placeholder="MM"
            onChange={(e) => handleChange('mm',Number(e.target.value))}
          />
          <input
            type="text"
            id="card-yy"
            name="yy"
            placeholder="YY"
            onChange={(e) => handleChange('yy',Number(e.target.value))}
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
          onChange={(e) => handleChange('cvc',Number(e.target.value))}
        />
      </label>
    </div>
    <button>Confirm</button>
  </form></div>
  )
}

export default Form