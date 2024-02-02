import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import Loading from './pages/Loading';

const AppWrapper = ({ router }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300); 
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <RouterProvider router={router} />;
};

export default AppWrapper;
