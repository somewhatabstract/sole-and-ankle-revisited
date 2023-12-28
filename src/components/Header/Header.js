import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

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
        </Nav>
        <Side>
          <MobileHeader>
            <UnstyledButton>
              <Icon id="shopping-bag" strokeWidth={2} />
              <VisuallyHidden>Open cart</VisuallyHidden>
            </UnstyledButton>
            <UnstyledButton>
              <Icon id="search" strokeWidth={2} />
              <VisuallyHidden>Search</VisuallyHidden>
            </UnstyledButton>
            <UnstyledButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <Icon id="menu" strokeWidth={2} />
              <VisuallyHidden>Open menu</VisuallyHidden>
            </UnstyledButton>
          </MobileHeader>
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
  border-bottom: 1px solid var(--color-gray-300);
  overflow-x: auto;

  @media ${QUERIES.tabletAndDown} {
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndDown} {
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    9.5vw - 4rem,
    3.5rem
  );
  margin: 0px 48px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const MobileHeader = styled.div`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    display: flex;
    margin-left: 16px;
    gap: 32px;
    flex: 1;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
  }

  @media ${QUERIES.phoneAndDown} {
    gap: 16px;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-primary);
  }
`;

export default Header;
