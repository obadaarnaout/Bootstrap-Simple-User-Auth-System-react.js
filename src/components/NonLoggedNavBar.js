import { Navbar,Col,Nav } from 'react-bootstrap';
const NonLoggedNavBar = (props) => {
  const goToPage = (event) => {
    let page = event.target.getAttribute("data-page");
    if (page == 'login' || page == 'register') {
      props.onChange(page);
    }
  }
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Col md="1"></Col>
      <Col md="10">
        <Nav className="justify-content-end">
          <Nav.Link onClick={goToPage} data-page="login">Login</Nav.Link>
          <Nav.Link onClick={goToPage}  data-page="register">Register</Nav.Link>
        </Nav>
      </Col>
      <Col md="1"></Col>
    </Navbar>
  );
}
export default NonLoggedNavBar;
