import { useState } from 'react';
import './Form.scss'
import type { errorType } from '../../type';
import { cardType } from '../../type';


type Props = {
    handleChange: (field: string, value: string | number) => void;
    handleShow: () => void;
    card: cardType;
    handleInicial: () => void;
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
class Validator {

    value: any;
    result: string[];

    constructor(value: any) {
        this.value = value
        this.result = []
    }

    isNotEmpty(msg: string) {
        if (!this.value) {
            this.result.push(msg)
        }

        return this
    }

    isLength(minLength: number, maxLength: number, msg: string) {
        if (this.value.length < minLength || this.value.length > maxLength) {
            this.result.push(msg)
        }

        return this
    }
    isLengthEqual(length: number, msg: string) {
        if (this.value.length !== length) {
            this.result.push(msg)
        }

        return this
    }

    isLetter(msg: string) {
        let regExp = /[A-z]/g;
        if (regExp.test(this.value)) {
            this.result.push(msg);
        }
        return this
    }

    isMonth(msg: string) {
        if (!(this.value >= 1 && this.value <= 12)) {
            this.result.push(msg)
        }
        return this
    }

    isYear(msg: string) {
        if (!(this.value >= 22 && this.value <= 27)) {
            this.result.push(msg)
        }
        return this
    }
    // isEmail(msg:string) {
    //   if (!/\S+@\S+\.\S+/.test(this.email)) {
    //     this.result.push(msg)
    //   }

    //   return this
    // }
}



const Form = ({ handleChange, handleShow, card, handleInicial }: Props) => {
    const [error, setError] = useState({
        name: [''],
        number: [''],
        mm: [''],
        yy: [''],
        cvc: [''],
    })

    const validateAll = () => {
        const { name, number, mm, yy, cvc } = card;
        const errorV = { name: [''], number: [''], mm: [''], yy: [''], cvc: [''] }

        errorV.name = validateName(name);
        errorV.number = validateNumber(number);
        errorV.mm = validateMM(mm);
        errorV.yy = validateYY(yy);
        errorV.cvc = validateCVC(cvc);

        console.log(errorV);
        const validationMesages = Object.values(errorV).filter(
            (validationMessage) => validationMessage.length > 0
        )
        console.log(validationMesages.length)
        const isValid = !validationMesages.length

        if (!isValid) {
            setError({
                ...errorV
            })
        }

        return isValid
    }

    const validateName = (name: string) => {
        const validatorName = new Validator(name)
        return validatorName
            .isNotEmpty('Can\'t be black').result
    }

    const validateNumber = (number: string) => {
        const validatorNumber = new Validator(number)
        return validatorNumber
            .isNotEmpty('Can\'t be black')
            .isLengthEqual(19, 'Card Number incorrect')
            .isLetter('Wrong format, numbers only.').result
    }

    const validateMM = (mm: number) => {
        const validatorMM = new Validator(mm)
        return validatorMM
            .isNotEmpty('Can\'t be black')
            .isMonth('Month incorrect').result
    }

    const validateYY = (yy: number) => {
        const validatorYY = new Validator(yy)
        return validatorYY
            .isNotEmpty('Can\'t be black')
            .isYear('Year incorrect').result
    }

    const validateCVC = (cvc: number) => {
        const validatorCVC = new Validator(cvc)
        return validatorCVC
            .isNotEmpty('Can\'t be black')
            .isLetter('Wrong format, numbers only.').result
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const isValid = validateAll()

        if (!isValid) {
            return false
        } else {
            setTimeout(() => {
                handleInicial()
                handleShow()
            }, 1000);

        }

    }
    return (
        <div><form className="form" onSubmit={(event) => handleSubmit(event)}>
            <label className='form__label' htmlFor="card-name">
                {" "}
                Cardholder name
            </label>
            <input className='form__input'
                type="text"
                id="card-name"
                name="card-name"
                placeholder="e.g. Jane Applessed"
                onChange={(e) => handleChange('name', e.target.value)}
            />
            <div className='form__error'>{error.name}</div>
            <label className='form__label' htmlFor="card-number">
                Card Number
            </label>
            <input className='form__input'
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
            <div className='form__error'>{error.number[0]}</div>
            <div className="form__grid">
                <label className='form__label' htmlFor="card-number">
                    Exp. Date (mm/yy)
                </label>
                <label className='form__label' htmlFor="card-cvc">
                    cvc
                </label>
                <div className="form__group">
                    <input className='form__input'
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
                    <input className='form__input'
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
                </div>


                <input className='form__input'
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
                <div className='form__error'>{error.mm[0]?error.mm[0]:error.yy[0]?error.yy[0]:''}</div>
                <div className='form__error'>{error.cvc}</div>

            </div>
            <button className='form__submit'>Confirm</button>
        </form></div>
    )
}

export default Form