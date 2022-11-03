
import logo from '../../assets/images/card-logo.svg'
import bgCardBack from "../../assets/images/bg-card-back.png";
import type { cardType } from '../../type';

import './Header.scss'

type Props = {
  card: cardType
}

const Header = ({ card }: Props) => {
  return (
    <header className="header">
      <div className="header__cardfront">
        <img className='header__cardfront__logo' src={logo} alt="Card Logo" />
        <p className="header__cardfront__number">
          {card.number === '' ? "0000 0000 0000 0000" : card.number}
        </p>
        <div className='header__cardfront__details'>
          <p className="header__cardfront__details-name">
            {card.name === "" ? "Jane Appleseed" : card.name}
          </p>
          <p className="header__cardfront__details-date">
            <span className="header__cardfront__details-date-mm">{card.yy === 0 ? "00" : card.yy}/</span><span className="header__cardfront__details-date-yy">{card.mm === 0 ? "00" : card.mm}</span>
          </p>
        </div>
      </div>
      <div className="header__cardback">
        <p className="header__cardback__cvc">
          {card.cvc === 0 ? "000" : card.cvc}
        </p>
      </div>
    </header>
  )
}

export default Header