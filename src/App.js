
import { Col,Row,Container } from 'react-bootstrap';
import NonLoggedNavBar from './components/NonLoggedNavBar';
import LoggedIn from './components/LoggedIn';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import {useState,useEffect} from 'react';

function App() {
  const [users,setUsers]= useState([]);
  const [page,setPage] = useState('login');
  const [isLoggedin,setIsLoggedin] = useState(false);
  const localUsers = JSON.parse(localStorage.getItem("users"));
  useEffect(() => {
    let localLogin = localStorage.getItem("isLoggedin");
    if (typeof localLogin !== 'undefined' && localLogin !== null && localLogin === "1") {
      setIsLoggedin(true);
      setPage('home');
    }
    console.log(localUsers);
    if (typeof localUsers !== 'undefined' && localUsers !== null && localUsers.length > 0) {
      setUsers(localUsers);
    }
  },[]);
  useEffect(() => {
    if (isLoggedin === true) {
      localStorage.setItem("isLoggedin", "1");
    }
    else{
      localStorage.setItem("isLoggedin", "0");
    }
  },[isLoggedin]);
  const changePage = (page) => {
    if (isLoggedin === true && page == 'logout') {
      setPage('login');
      setIsLoggedin(false);
    }
    else{
      setPage(page);
    }
  }
  const registerUser = (data) => {
    let found = false;
    if (users.length > 0) {
      found = users.find(element => element.email == data.email);
    }
    if (found === false || typeof found === 'undefined') {
      setUsers((users) => {return [data,...users];});
      localStorage.setItem("users", JSON.stringify([data,...users]));
      setPage('home');
      setIsLoggedin(true);
      return true;
    }
    else{
      return false;
    }
  }
  const loginUser = (data) => {
    let found = false;
    if (users.length > 0) {
      let emailFound = users.find(element => element.email == data.email);
      if (typeof emailFound !== 'undefined' && emailFound !== false) {
        if (emailFound.password != data.password) {
          return false;
        }
        found = true;
      }
    }
    if (found === false || typeof found === 'undefined') {
      return false;
    }
    setPage('home');
    setIsLoggedin(true);
    return true;
  }
  return (
    <>
      <Row>
        {!isLoggedin && <NonLoggedNavBar onChange={changePage}></NonLoggedNavBar>}
        {isLoggedin && <LoggedIn onChange={changePage}></LoggedIn>}
      </Row>
      <Container>

            <Row className="mt-5">
              <Col md="3"></Col>
              <Col md="6">
                {page == 'login' && <Login onSubmit={loginUser} />}
                {page == 'register' && <Register onSubmit={registerUser} />}
                {page == 'home' && <Home />}
              </Col>
              <Col md="3"></Col>
            </Row>
          </Container>
        </>);
}

export default App;
