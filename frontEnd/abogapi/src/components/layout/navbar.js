import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <div>
          <img src ="./favicon.ico"></img>
        </div>
        <NavbarBrand>
         <Link to="/somos"> Nosotros</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Servicios</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Abogados</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Clientes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Contacto</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Areas
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Derecho Fiscal
                </DropdownItem>
                <DropdownItem>
                  Derecho Civil
                </DropdownItem>

                <DropdownItem>
                  Derecho Laboral
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
