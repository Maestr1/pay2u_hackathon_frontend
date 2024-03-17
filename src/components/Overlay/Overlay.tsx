import './Overlay.scss'

interface OverlayProps {
  isMenuOpen: boolean;
}

function Overlay(props: OverlayProps): JSX.Element {
  return (
    <div className={`overlay ${props.isMenuOpen ? 'overlay_active' : ''}`}/>
  );
}

export default Overlay;
