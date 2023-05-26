import React from 'react';
import { useLocation } from 'react-router-dom';

const Logout = () => {
  let dataFromDashboard = useLocation();
  return (
    <>
      <h2>Logout Page</h2>
      <h2>{dataFromDashboard.state.name} Logged Out!!!</h2>
    </>
  );
};

export default Logout;
