import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get('/api/user')
      .then(response => {
        if (response.status === 200) {
            setisLoggedIn(response.data);
        }
      })
      .catch(error => {
        console.error(error);
        setisLoggedIn(null);
      });
  };

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
