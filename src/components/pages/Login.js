import React from 'react';
import { useLocation } from 'react-router-dom';

const Login = () => {
  let receivedData = useLocation();
  console.log(receivedData);
  // console.log(receivedData.state.st);
  return (
    <>
      <h1>Login Page</h1> 
      <h2>Received Data :{receivedData.state.st}</h2>
    </>
  );
};

export default Login;
