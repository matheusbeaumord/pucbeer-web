import { useState } from 'react';
import Validator from 'email-validator';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { registerUser } from '../../services/Api/user';
import LoginAuth from '../../services/Auth/Login';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../Login/RegisterForm.css'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [seller, setSeller] = useState(false);
  const [showError, setShowError] = useState(false);

  const navigateTo = useNavigate();


  const cadastrar = async (e) => {
    e.preventDefault();
    const role = seller ? 'administrator' : 'client';
    const user = await registerUser(name, email, role, password);
    if (user.error) {
      setShowError(true);
    } else {
      LoginAuth(e, email, password, navigateTo);
    }

    return user;
  };

  const validateLogin = () => {
    const passwordLength = 6;
    const nameLength = 3;
    const regexNameValidation = /^[a-z ,.'-]+$/i;

    return (
      Validator.validate(email)
      && password.length >= passwordLength
      && name.length >= nameLength
      && regexNameValidation.test(name)
    );
  };

  return (
<div className="container">
  <div className="screen">
    <div className="screen__content">
      <form className='login'>
      <i className="login__icon">CADASTRO</i>
        <div className='login__field'>
          <input
          placeholder='Nome'
          className="login__input"
          id="name"
          data-testid="signup-name"
          type="text"
          value={ name }
          onChange={ ({ target: { value } }) => setName(value) }
          />
        </div>
        <div className='login__field'>
          <input
          placeholder='E-mail'
          className="login__input"
          id="email"
          data-testid="signup-email"
          type="email"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
          />
        </div>
        <div className='login__field'>
          <input
          placeholder='Senha'
          className="login__input"
          id="password"
          data-testid="signup-password"
          type="password"
          value={ password }
          onChange={ ({ target: { value } }) => setPassword(value) }
          />
        </div>
        <div className='login__fieldVend'>
          Quer vender ?
          <input
          className="login__radio"
          id="checkbox"
          name="querVender"
          data-testid="signup-seller"
          type="checkbox"
          checked={ seller }
          onClick={ () => setSeller(!seller) }
          />
        </div>
        <button
          className='button login__submit'
          data-testid="signup-btn"
          type="submit"
          disabled={ !validateLogin() }
          onClick={ (e) => cadastrar(e) }
        >
        <span className="button__text">Cadastrar</span>
        </button>
        {showError && <p>Já existe um usuário com esse e-mail.</p>}
      <Link className='icon__back' to="/login" data-testid="no-account-btn">
        <ArrowBackIcon/>
      </Link>
      </form>
    </div>
    <div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>
  </div>
</div>);
};
export default LoginForm;
