
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
        {card.number.value === '' ? "0000 0000 0000 0000" : card.number.value}
      </p>
      <p className="header__cardfront__name">
        {card.name.value === "" ? "Jane Appleseed" : card.name.value}
      </p>
      <p className="header__cardfront__yy-mm">
        {card.yy.value === 0 ? "00" : card.yy.value}/{card.mm.value === 0 ? "00" : card.mm.value}
      </p>
    </div>
    <div className="header__cardback">
      <img src={bgCardBack} alt="Card back" />
      <p className="header__cardback__cvc">
        {card.cvc.value === 0 ? "000" : card.cvc.value}
      </p>
    </div>
  </header>
  )
}

export default Header