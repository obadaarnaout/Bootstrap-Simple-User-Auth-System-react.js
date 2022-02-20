import { Navbar,Col,Nav } from 'react-bootstrap';
const LoggedIn = (props) => {
  const goToPage = (event) => {
    props.onChange('logout');
  }
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Col md="1"></Col>
      <Col md="10">
        <Nav className="justify-content-end">
          <Nav.Link onClick={goToPage} data-page="logout">Log Out</Nav.Link>
        </Nav>
      </Col>
      <Col md="1"></Col>
    </Navbar>
  );
}
export default LoggedIn;
