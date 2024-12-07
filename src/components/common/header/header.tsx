import HeaderBasket from '../../eCommerce/HeaderBasket/HeaderBasket'
import style from './style.module.css'
import {Container, Badge, Navbar, Nav} from 'react-bootstrap'
const {headerContainer, headerLogo} = style;
const Header = () => {
  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
            <span>our </span>
            <Badge>E-commerce</Badge>
        </h1>
        <HeaderBasket/>
        </div>
        {/* Basket */}
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Categories</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#link">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
};

export default Header;
