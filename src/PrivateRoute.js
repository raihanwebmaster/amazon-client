import React,{ useContext }  from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';


const PrivateRoute = ({children,...rest}) => {
    const [{ basket, user }, dispatch] = useStateValue();;
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;