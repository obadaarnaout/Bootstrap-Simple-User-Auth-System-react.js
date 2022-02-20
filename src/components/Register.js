import { Form,Button } from 'react-bootstrap';
import {useState} from 'react';
import SiteAlert from './SiteAlert';
const Register = (props) => {
  const [alert,setAlert] = useState(false);
  const [alertText,setAlertText] = useState('');
  const [alertClass,setAlertClass] = useState('danger');
  const showAlert = (className,text) => {
    setAlertText(text);
    setAlertClass(className);
    setAlert(true);
    setTimeout(function () {
      setAlertText('');
      setAlert(false);
    },2000);
  }
  const checkInfo = (event) => {
    event.preventDefault();
    if (event.target.elements.email.value.length > 0 && event.target.elements.password.value.length > 0) {
      let registered = props.onSubmit({email: event.target.elements.email.value,
                                       password: event.target.elements.password.value});
      if (registered === false) {
        showAlert('danger','This User Already Exist');
      }
    }
    else{
      showAlert('danger','Please Check Your Details');
    }
  }

  return (
    <Form onSubmit={checkInfo}>
      <div>
        {alert && <SiteAlert text={alertText} alertClass={alertClass}/>}
      </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
}
export default Register;
