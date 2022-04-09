import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase';
const auth = getAuth(app)
const Products = () => {
      const [user] = useAuthState(auth)
      return (
            <div>
                  <h2>This is products </h2>
                  <h4>{user ? user.displayName : 'user nai'}</h4>
            </div>
      );
};

export default Products;