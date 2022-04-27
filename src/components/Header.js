import React, { useRef, useState } from 'react';
import SliderMenu from './SliderMenu';

const Header = () => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: 'menu',
  });
  const [disabled, setDisabled] = useState(false);
  const menuButton = useRef(null);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: 'close',
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: 'menu',
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: 'close',
      });
    }
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header className="header" data-scroll-section>
      <nav>
        <h1 className="logo-menu">bogdan.marica</h1>
        <button
          className="menu-button"
          disabled={disabled}
          onClick={handleMenu}
          ref={menuButton}
        >
          {state.menuName}
        </button>
      </nav>
      <SliderMenu state={state} />
    </header>
  );
};

export default Header;
