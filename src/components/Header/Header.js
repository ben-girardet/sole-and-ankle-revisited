import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/sale">Mega Sale</NavLink>
          <NavLink href="/new">Old&nbsp;Releases</NavLink>
        </Nav>
        <Side>
          <MobileIconButton>
            <Icon id="shopping-bag"></Icon>
          </MobileIconButton>
          <MobileIconButton>
            <Icon id="search"></Icon>
          </MobileIconButton>
          <MobileIconButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu"></Icon>
          </MobileIconButton>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--gray-300);

  @media ${QUERIES.laptopAndDown} {
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  gap: clamp(
    1rem,
    6.7vw - 4.25rem,
    2.7rem
  );
  margin: 0px 48px;
  overflow-x: auto;
  padding-bottom: 6px;

  @media ${QUERIES.laptopAndDown} {
    display: none;
  }
`;

const MobileIconButton = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media ${QUERIES.laptopAndDown} {
    display: revert;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.laptopAndDown} {
    &:last-of-type {
      flex: 0;
      display: flex;
      gap: 8px;
    }
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--secondary);
  }
`;

export default Header;
