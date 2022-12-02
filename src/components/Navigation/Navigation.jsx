import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  width: 235px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  background-color: #eee;
  position: absolute;
  right: 0;
  top: 50px;
  transform: translateX(${({isOpen}) => isOpen ? '0' : '100%'});
  transition: transform 0.5s ease-in-out;
  z-index: 9999;
`;

const NavList = styled.ul`
  padding: 0;
  list-style: none;
`;

const NavListItem = styled.li`
  margin: 10px 0;
`;

const activeClassName = 'selected';
const StyledNavLink = styled(NavLink).attrs( props => ({
    tabIndex: props.isOpen ? null : '-1',
    activeClassName,
}))`
  font-family: 'IBM Plex Mono', monospace;
  text-decoration: none;
  color: black;
  font-size: 14px;
  &.${activeClassName} {
    font-weight: bold;
  }
`;

const NavButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #eee;
  border: none;
  position: absolute;
  left: -40px;
  cursor: pointer;
`;

const Navigation = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Nav isOpen={isOpen}>
            <NavButton onClick={() => setIsOpen(!isOpen)}>🍔</NavButton>
            <NavList>
                <NavListItem>
                    <StyledNavLink isOpen={isOpen} exact to="/">Home</StyledNavLink>
                </NavListItem>
                <NavListItem>
                    <StyledNavLink isOpen={isOpen} to="/infinite-scroll">Infinite Scroll</StyledNavLink>
                </NavListItem>
                <NavListItem>
                    <StyledNavLink isOpen={isOpen} to="/accordion-faq">Accordion FAQ</StyledNavLink>
                </NavListItem>
                <NavListItem>
                    <StyledNavLink isOpen={isOpen} to="/sidebar">Sidebar</StyledNavLink>
                </NavListItem>
                <NavListItem>
                    <StyledNavLink isOpen={isOpen} to="/animated-buttons">Animated Buttons</StyledNavLink>
                </NavListItem>
                <NavListItem>
                    <StyledNavLink isOpen={isOpen} to="/cool-transitions">Transitions</StyledNavLink>
                </NavListItem>
                <NavListItem>
                    <StyledNavLink isOpen={isOpen} to="/animated-svg">Animated SVG</StyledNavLink>
                </NavListItem>
                <NavListItem>
                    <StyledNavLink isOpen={isOpen} to="/scroll-animations">Scroll Animations</StyledNavLink>
                </NavListItem>
            </NavList>
        </Nav>
    )
};

export default Navigation;