import React from 'react';
import app from '../../firebase.init';
import {getAuth} from 'firebase/auth' ;
import {useAuthState} from 'react-firebase-hooks/auth' ;

const auth = getAuth(app)
const Home = () => {
      const [user] = useAuthState(auth)
      return (
            <div>
                  <h2>This is home</h2>
                  <p>Current user is: {user ? user.displayName : 'No body'}</p>
            </div>
      );
};

export default Home;