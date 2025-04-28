
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>

        {
          isLoggedIn ? (
            <p>You are logged in!</p>
          ) : (
            <ChildComponent onLogin = {handleLogin}/>
          )
        }
    </div>
  );
}

function ChildComponent({onLogin})
{
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return(
    <div>
      
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text"></input>
        <br></br><br></br>
        <label>Password:</label>
        <input type="password"></input>
        <br></br><br></br>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App


