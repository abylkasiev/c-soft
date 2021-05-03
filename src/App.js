import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import Header from "./components/Main/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; 
import Footer from "./components/Main/Footer/Footer";
import Events from "./components/Events/Events";
import Users from "./components/Users/Users";
import Createevents from "./components/Events/Createevents/Createevents";
import fire from "./config/fire";
import Login from "./components/Main/Header/Login/Login";

const App = () => {
  const [userIsLoading, setUserIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            console.log(err.code)
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleCheckPassword = () => {
    
  }



  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUserIsLoading(true);
      } else {
        setUserIsLoading("");
      }
    });
  }, []);

  return (
    <div className="App">
      <Switch>
        {userIsLoading ? (
          <>
            <Header />
            <Route path="/Events" component={Events} />
            <Route path="/Createevents" component={Createevents} />
            <Route path="/Users" component={Users} />
            <Footer />
          </>
        ) : (
          <>
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
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
            />
          </>
        )}
      </Switch>
    </div>
  );
};

export default App;
