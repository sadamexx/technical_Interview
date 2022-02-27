import React, {useState} from 'react';
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
    DropdownItem
  } from 'reactstrap';



  const NavBar = (props) => {
      const [isOpen, setIsOpen] = useState(false);

      const toggle = () => setIsOpen(!isOpen);
      return(
          <div style ={{backgroundColor: '#BAABDA'}}>
              <Navbar  expand="md" >
                  <NavbarBrand className='me-2' href="/">Wethos</NavbarBrand>
                  <NavbarToggler className="me-2" onClick = {toggle} />
                  <Collapse isOpen={isOpen} navbar>
                  <Nav  navbar>
                      <NavItem>
                          <NavLink href='/dashboard'>Dashboard</NavLink>
                          <NavLink href='/Profile'>Profile</NavLink>                         
                          <NavLink href='/Projects'>Projects</NavLink>
                          <NavLink href='/ProjectShow'>ProjectShow</NavLink>
                      </NavItem>
                  </Nav>
                  </Collapse>
              </Navbar>
          </div>
      )
  }

export default NavBar;