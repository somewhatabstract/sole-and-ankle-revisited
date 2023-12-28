/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = (props) => {
  return (
    <Overlay {...props}>
      <Content>
        <CloseButton onClick={props.onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" />
        </CloseButton>
        <MenuNav>
          <MenuLink href="/sale">Sale</MenuLink>
          <MenuLink href="/new">New&nbsp;Releases</MenuLink>
          <MenuLink href="/men">Men</MenuLink>
          <MenuLink href="/women">Women</MenuLink>
          <MenuLink href="/kids">Kids</MenuLink>
          <MenuLink href="/collections">Collections</MenuLink>
        </MenuNav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
  font-size: 18px;
  font-weight: var(--font-weight-medium);
  margin: auto 0;
`;

const MenuLink = styled.a`
  color: ${COLORS.gray[900]};
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: ${COLORS.gray[700]};

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: ${COLORS.secondary};
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 24px;
  right: 16px;
`;

const Overlay = styled(DialogOverlay)`
  background-color: white;
  height: 100%;
  width: 300px;
  position: fixed;
  top: 0;
  right: 0;
`;

const Content = styled(DialogContent)`
  padding: 32px;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export default MobileMenu;
