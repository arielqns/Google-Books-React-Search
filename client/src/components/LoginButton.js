import React from 'react';
import { Button } from 'react-bootstrap';
import '../assets/css/style.css';

let loginPath = (process.env.NODE_ENV === "production" ? "https://accounts.google.com/signin/oauth/oauthchooseaccount?client_id=682761534707-ktssra1maun94hmavlct3rumlf5b1esh.apps.googleusercontent.com&as=diJdPOXpqpevucf10g1KEQ&destination=https%3A%2F%2Fdaily-inventory.herokuapp.com&approval_state=!ChRrOWgtZ2ZyWHV6eDRDT2VVbklvcxIfUTA4UjY0Xy1DTmtid0ktM2lWMU9TaWRIY0p3Wjd4WQ%E2%88%99AJDr988AAAAAXfFYGS-PqOZWEqrYlpOrAGRUBlsERw3n&oauthgdpr=1&xsrfsig=ChkAeAh8T_NrchyGACdKBj78_yI8LHy9jYucEg5hcHByb3ZhbF9zdGF0ZRILZGVzdGluYXRpb24SBXNvYWN1Eg9vYXV0aHJpc2t5c2NvcGU&flowName=GeneralOAuthFlow" : "http://localhost:3000/auth/google");

function LoginButton() {
  return (
    <Button
      className='login-button'
      as="a"
      href={loginPath}
      eventKey={1}
    >
      Login with <i className="fab fa-google-plus-g"></i>
    </Button>    
  )
}

export default LoginButton;
