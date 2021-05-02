import React, {useState, useEffect} from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Header from './components/Main/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Main/Footer/Footer';
import Events from './components/Events/Events'
import Users from './components/Users/Users'
import Createevents from './components/Events/Createevents/Createevents'
import Login from './components/Main/Header/Auth/Login/Login';
import fire from './config/fire'
import Auth from './components/Main/Header/Auth/Auth';

const App = () => {

  // const [user, setUser] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [emailError, setEmailError] = useState('');
  // const [passwordError, setPasswordError] = useState('');
  // const [hasAccount, setHasAccount] = useState(false);

  // const clearInputs = () =>{
  //   setEmail('');
  //   setPassword('');
  // }

  // const clearErrors = () => {
  //     setEmailError('');
  //     setPasswordError('');
  // }


  // const handleLogin = () => {
  //     clearErrors()
  //     fire
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .catch((err) => {
  //         switch(err.code) {
  //             case "auth/invalid-email":
  //             case "auth/user-disabled":
  //             case "auth/user-not-found":
  //                 setEmailError(err.massage);
  //                 break;
  //             case "auth/wrong-password":
  //                 setPasswordError(err.massage);
  //                 break;
  //         }
  //     });
  // };

  // const handleSignup = () => {
  //     clearErrors()
  //     fire
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .catch((err) => {
  //         switch(err.code){
  //             case "auth/email-already-in-use":
  //             case "auth/invalid-email":
  //                 setEmailError(err.massage);
  //                 break;
  //             case "auth/weak-password":
  //                 setPasswordError(err.massage);
  //                 break;
  //         }
  //     });
  // };

  // const handleLogout = () => {
  //     fire.auth().signOut();
  // };

  // const authListener = () => {
  //     fire.auth().onAuthStateChanged((user) => {
  //         if(user) {
  //             clearInputs();
  //             setUser(user);
  //         }else {
  //             setUser('');
  //         }
  //     });
  // };

  // useEffect(() => {
  //     authListener();
  // }, [])
  
  return (
      <div className="App">
        <Auth/>
            {/* {user ? (
                handleLogout(handleLogout)
            ) : (
                <Login 
                    email={email} 
                    setEmail={setEmail} 
                    password={password} 
                    setPassword={setPassword} 
                    handleLogin={handleLogin}
                    handleSignup={handleSignup}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}
                />
            )} */}
          <Header/>
            <Switch>
              <Route  path="/Events" component={Events} />
              <Route  path="/Createevents" component={Createevents} />
              <Route  path="/Users" component={Users} />
            </Switch>
          <Footer/>
      </div>
  );
};

export default App;