import React, {useState} from 'react'
// import './index.css';
import Logo from './shopping-cart.svg';
import {Container, LoginPage, Button} from './LoginStyles'

export default function LoginForm({login, error}) {

    const [details, setDetails] = useState({username: "", password: ""});

    const handleSubmit = (e) => {
        e.preventDefault();
        login(details);
    }

  return (
      <Container>
        <LoginPage>
            <img src={Logo} alt='shopping cart'/>
            <div className='loginBox'>
                <h1>Login</h1>

                {(error !== "") ? (<div className='error'>{error}</div>) : ""}
                <div className="form">
                    <form className='formContent' onSubmit={handleSubmit}>
                        <input type="text" name="username" value={details.username} onChange={(e) => setDetails({...details, username: e.target.value})}  placeholder='Login' required></input>

                        <input type="password" name="password" value={details.password} onChange={(e) => setDetails({...details, password: e.target.value})}  placeholder='Senha' required></input>
                        <br /> 

                        <Button type='submit'>CLICA AQUI</Button> 
                    </form>
                </div>
            </div>
        </LoginPage>
          
      </Container>
    
  )
}
