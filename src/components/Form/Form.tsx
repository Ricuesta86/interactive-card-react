import { ReactEventHandler, useState } from 'react';
import './Form.scss'
import type { errorType } from '../../type';
type Props = {
    handleChange: (field: string, value: string | number) => void;
    handleShow: () => void;
}
const normalizeCardNumber = (value: string) => {
    return value
        .replace(/\s/g, "")
        .match(/.{1,4}/g)
        ?.join(" ")
        .substring(0, 19);
};
const normalizeNumber = (value: string) => {
    return value
        .replace(/\s/g, "")
        .replace(/([^0-9])/g, "")
        .trim();
}
// const validateNumber = (value:string):boolean=>{
//     if(value.)
//     return true;
// }

const Form = ({ handleChange, handleShow }: Props) => {
    const [error, setError] = useState<errorType>({
        name:'',
        number:'',
        mm:'',
        yy:'',
        cvc:'',
    })
    const validateEmptyField = (field: string, value: string): boolean => {
        if (value === '') {        
            setError(error=>({
                ...error,
                [field]:'Can\'t be Blank'
            }))
            return false;
        }
        setError(error=>({
            ...error,
            [field]:''
        }))
        return true;
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        let name = validateEmptyField('name', event.target['card-name'].value);
        let number = validateEmptyField('number', event.target['card-number'].value);
        let mm = validateEmptyField('mm', event.target['card-mm'].value);
        let yy = validateEmptyField('yy', event.target['card-yy'].value);
        let cvc = validateEmptyField('cvc', event.target['card-cvc'].value);
        console.log(event.target['card-name'].value);
        console.log(event.target['card-number'].value);
        console.log(event.target['card-mm'].value);
        console.log(event.target['card-yy'].value);
        console.log(event.target['card-cvc'].value);
            if(name){
                // handleShow()
            }
    }
    return (
        <div><form className="form" onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="card-name">
                {" "}
                Cardholder name
                <input
                    type="text"
                    id="card-name"
                    name="card-name"
                    placeholder="e.g. Jane Applessed"
                    onChange={(e) => handleChange('name', e.target.value)}
                />
                <p className='form__error'>{error.name}</p>
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
                        handleChange('number', value)
                        if (value !== '') {
                            e.target.value = normalizeCardNumber(value) as string
                        }
                    }}
                    maxLength={19}
                />
                <p className='form__error'>{error.number}</p>
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
                            maxLength={2}
                            onChange={(e) => {
                                e.target.value = normalizeNumber(e.target.value) as string
                                handleChange('mm', Number(e.target.value))
                            }}
                        />
                        <p className='form__error'>{error.mm}</p>
                        <input
                            type="text"
                            id="card-yy"
                            name="yy"
                            placeholder="YY"
                            maxLength={2}
                            onChange={(e) => {
                                e.target.value = normalizeNumber(e.target.value) as string
                                handleChange('yy', Number(e.target.value))
                            }}
                        />
                        <p className='form__error'>{error.yy}</p>
                    </label>
                </div>
                <label htmlFor="card-cvc">
                    cvc
                    <input
                        type="text"
                        id="card-cvc"
                        name="card-cvc"
                        placeholder="e.g. 123"
                        maxLength={3}
                        onChange={(e) => {
                            e.target.value = normalizeNumber(e.target.value) as string
                            handleChange('cvc', Number(e.target.value))
                        }}
                    />
                    <p className='form__error'>{error.cvc}</p>
                </label>
            </div>
            <button>Confirm</button>
        </form></div>
    )
}

export default Form