import { useState } from 'react';
import Validator from 'email-validator';
import { Link, useNavigate } from 'react-router-dom';
import LoginAuth from '../../services/Auth/Login';
import '../Login/LoginForm.css'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigateTo = useNavigate();

  const validateLogin = () => {
    const passwordLength = 6;
    return (Validator.validate(email) && password.length >= passwordLength);
  };

  // if (redirect !== '') {
  //   return <Redirect to={ redirect } />;
  // }

  return (
<div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login">
      <i className="login__icon">PUCBeer</i>
				<div className="login__field">
					<input
           type="email"
           value={ email }
           className="login__input" 
           placeholder="User name / Email"
           onChange={ ({ target: { value } }) => setEmail(value) }/>
				</div>
				<div className="login__field">
					<input 
           type="password"
           value={ password }
           data-testid="password-input"
           className="login__input" 
           placeholder="Password"
           onChange={ ({ target: { value } }) => setPassword(value) }/>
				</div>
				<button 
          className="button login__submit"
          data-testid="signin-btn"
          type="submit"
          disabled={ !validateLogin() }
          onClick={ (e) => LoginAuth(e, email, password, navigateTo) }>
					<span className="button__text">Login</span>
				</button>		
			</form>
      <Link className='lnkCad' to="/register" data-testid="no-account-btn">Ainda não tenho conta</Link>	
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
);
};

export default LoginForm;
