import { Alert } from 'react-bootstrap';
const SiteAlert = (props) => {
  return (
    <Alert variant={props.alertClass}>
      {props.text}
    </Alert>
  );
}
export default SiteAlert;
