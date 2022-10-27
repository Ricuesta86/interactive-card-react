
import bgCardFront from '../../assets/images/bg-card-front.png'
import bgCardBack from "../../assets/images/bg-card-back.png";
import type { cardType } from '../../type';

import './Header.scss'

type Props = {
    card:cardType
}

const Header = ({card}:Props) => {
  return (
    <header className="header">
    <div className="header__cardfront">
      <img src={bgCardFront} alt="Card Front" />
      <p className="header__cardfront__number">
        {card.number === '' ? "0000 0000 0000 0000" : card.number}
      </p>
      <p className="header__cardfront__name">
        {card.name === "" ? "Jane Appleseed" : card.name}
      </p>
      <p className="header__cardfront__yy-mm">
        {card.yy === 0 ? "00" : card.yy}/{card.mm === 0 ? "00" : card.mm}
      </p>
    </div>
    <div className="header__cardback">
      <img src={bgCardBack} alt="Card back" />
      <p className="header__cardback__cvc">
        {card.cvc === 0 ? "000" : card.cvc}
      </p>
    </div>
  </header>
  )
}

export default Header