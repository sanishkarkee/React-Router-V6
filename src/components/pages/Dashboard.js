import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  let navigate = useNavigate();
  let data = {
    name: 'sanish',
  };

  const LogoutHandler = () => {
    navigate('/logout', { state: data }); // video time: 53:45
  };
  return (
    <>
      <h1>Dashboard Page</h1>
      <button onClick={LogoutHandler}>Logout</button>
    </>
  );
};

export default Dashboard;
