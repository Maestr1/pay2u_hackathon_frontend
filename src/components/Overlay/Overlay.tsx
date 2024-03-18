import './Overlay.scss'
import { ReactElement } from 'react';

interface OverlayProps {
  isMenuOpen: boolean;
}

function Overlay(props: OverlayProps): ReactElement {
  return (
    <div className={`overlay ${props.isMenuOpen ? 'overlay_active' : ''}`}/>
  );
}

export default Overlay;
