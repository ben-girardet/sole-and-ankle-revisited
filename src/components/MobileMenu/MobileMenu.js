/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {

  return (
    <Overlay isOpen={isOpen}
      onDismiss={onDismiss}>
      <Content>
        <Side>
          <ClosingButton onClick={onDismiss}>
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
            <Icon id="close"></Icon>
          </ClosingButton>
        </Side>
        <Nav>
          <NavItem href="/sale">Sale</NavItem>
          <NavItem href="/new">New&nbsp;Releases</NavItem>
          <NavItem href="/men">Men</NavItem>
          <NavItem href="/women">Women</NavItem>
          <NavItem href="/kids">Kids</NavItem>
          <NavItem href="/collections">Collections</NavItem>
        </Nav>
        <Side>
          <Footer>
            <FooterItem href="/terms">Terms and Conditions</FooterItem>
            <FooterItem href="/privacy">Privacy Policy</FooterItem>
            <FooterItem href="/contact">Contact Us</FooterItem>
          </Footer>
        </Side>
      </Content>
    </Overlay>
  );
};

export default MobileMenu;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: hsl(0 0% 0% / 0.5);
`;

const Content = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 26px 16px 32px 32px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const Side = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;

  &:first-of-type {
    justify-content: flex-end;
  }

  &:last-of-type {
    align-items: flex-end;
  }
`;

const ClosingButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${COLORS.gray[900]};
  cursor: pointer;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[900]};
  text-transform: uppercase;
  font-size: calc(18 / 16 * 1rem);
  font-weight: ${WEIGHTS.medium};
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterItem = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[700]};
  font-size: calc(14 / 16 * 1rem);
  font-weight: ${WEIGHTS.normal};
`;