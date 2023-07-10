import { loginUser } from '../Api/user';

const LoginAuth = async (e, email, password, push) => {
  e.preventDefault();
  try {
    await loginUser(email, password).then((result) => {
      const { token, name, role, email: emailResponse, message } = result;
      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('name', JSON.stringify(name));
      localStorage.setItem('role', JSON.stringify(role));
      localStorage.setItem('email', JSON.stringify(emailResponse));
      if (message) {
        console.log(message);
      }
      if (role === 'administrator') {
        push('/admin/orders');
      } else {
        push('/products');
      }
    });
  } catch (error) {
    throw new Error(error);
  }
};

export default LoginAuth;
