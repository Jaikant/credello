import * as React from 'react';
import styled from 'styled-components';
import { slide as BurgerMenu } from 'react-burger-menu';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useMediaQuery } from 'react-responsive';

const MenuOpenIcon = styled(MenuIcon)`
  color: ${({ theme }) => theme.colors.grey};
`;

const MenuCloseIcon = styled(CloseIcon)`
  color: ${({ theme }) => theme.colors.grey};
`;

const menuStyles = {
  bmBurgerButton: {
    position: 'relative',
    width: '36px',
    height: '30px',
    left: '16px',
    top: '10px',
  },
};

const StyledBurger = styled(BurgerMenu)`
  width: 50%;
  .bm-item {
    text-align: center;
    display: inline-block;
    text-decoration: none;
    margin-bottom: 5vh;
    color: #d1d1d1;
    transition: color 0.2s;
  }
  .bm-item:hover {
    color: white;
  }
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    width: 50%;
  }
  ,
  .bm-burger-bars {
    background: #373a47;
  }
  .bm-burger-bars-hover: {
    background: #a90000;
  }
  ,
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  .bm-cross {
    background: #fff;
  }
  .bm-menu {
    background: #fff;
    padding: 3em 1em;
    font-size: 1.2em;
  }
  .bm-morph-shape {
  }
  .bm-item-list {
  }
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;

export default () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [width, setWidth] = React.useState('80%');

  React.useEffect(() => {
    if (isDesktopOrLaptop) {
      setWidth('25%');
    }
  }, []);

  const showSettings = (event) => {
    event.preventDefault();
  };

  const isMenuOpen = (state) => {
    if (state.isOpen != menuOpen) {
      setMenuOpen(state.isOpen);
    }
  };

  return (
    <StyledBurger
      customBurgerIcon={<MenuOpenIcon />}
      customCrossIcon={<MenuCloseIcon />}
      width={width}
      isOpen={menuOpen}
      onStateChange={isMenuOpen}
      pageWrapId={'page-wrap'}
      outerContainerId={'outer-container'}
      styles={menuStyles}
    >
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      <a onClick={showSettings} className="menu-item--small" href="">
        Settings
      </a>
    </StyledBurger>
  );
};
