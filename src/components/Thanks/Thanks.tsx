import './Thanks.scss'
import complete from '../../assets/images/icon-complete.svg'
type Props={
    handleShow:()=>void;
}
const Thanks = ({handleShow}:Props) => {
  return (
    <div className='thanks'>
        <img  className='thanks__img'src={complete} alt="Icon" />
        <h1 className='thanks__h1'>Thank You!</h1>
        <p className='thanks__p'>We'ne added your card details</p>
        <button className='thanks__btn' onClick={handleShow}>Continue</button>
    </div>
  )
}

export default Thanks