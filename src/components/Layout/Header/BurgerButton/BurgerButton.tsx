import './BurgerButton.scss';

interface BurgerButtonProps {
  onClick: object;
  isMenuOpen: boolean;
}

function BurgerButton({ onClick, isMenuOpen }: BurgerButtonProps) {

  return (
    <>
      <button onClick={onClick} className={`burger-btn ${isMenuOpen ? 'burger-btn_active' : ''}`}>
        <span className="burger-btn__bar-top"></span>
        <span className="burger-btn__bar-mid"></span>
        <span className="burger-btn__bar-bot"></span>
      </button>
    </>
  );
}

export default BurgerButton;
