import React, {useState} from 'react';
import { database } from '../../config';
// import './index.css';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';
import {Container} from './LoginStyles'

export default function Login() {

  // Functions to store the user's data
  const [user, setUser] = useState({username: ""});
  const [error, setError] = useState("");

  // Function to handle form submissions with validations 
  const login = details => {
    if (details.username === database.username && details.password === database.password) {
      setUser({
        username: details.username
      });
    } else if (details.username !== database.username || details.password !== database.password) {
      setError("Usuário ou senha inválida. Tente novamente.");
    }
  }

  // Function to redirect to the HOME page once the login is right
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/home`; 
    navigate(path);
  }

  return (
    <Container>
            {(user.username !== "") ? (
                <div>
                  {alert("Welcome, " + user.username + "!")}
                  {routeChange()}
                </div>
              ) : (
                <LoginForm login={login} error={error}/>
              )
              }
    </Container>
  )
}