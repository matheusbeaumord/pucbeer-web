import { useState } from 'react';
import Validator from 'email-validator';
import { Link, useNavigate } from 'react-router-dom';
import LoginAuth from '../../services/Auth/Login';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import '../Login/LoginForm.css'
import LoginIcon from '@mui/icons-material/Login';

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
<body>    
<div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login">
      <SportsBarIcon className='login__icon'/>
      <i className="login__icon">TeleGoró</i>
				<div className="login__field">
        <AccountCircleIcon/>
					<input
           type="email"
           value={ email }
           className="login__input" 
           placeholder="User name / Email"
           onChange={ ({ target: { value } }) => setEmail(value) }/>
				</div>
				<div className="login__field">
        <KeyIcon/>
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
          <LoginIcon className='icon_enter'/>
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
</body>
);
};

export default LoginForm;
