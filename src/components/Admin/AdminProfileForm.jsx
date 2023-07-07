import { Link } from 'react-router-dom';


const AdminProfileForm = () => {
  const name = JSON.parse(localStorage.getItem('name'));
  const email = JSON.parse(localStorage.getItem('email'));

  if (!localStorage.getItem('token')) {
    return (<Link to="/login" />);
  }

  return (
    <div>
      <h1 data-testid="top-title">
        Perfil
      </h1>
      <h1 data-testid="profile-name">
        {`Nome: ${name}`}
      </h1>
      <h1 data-testid="profile-email">
        {`Email: ${email}`}
      </h1>
    </div>
  );
};

export default AdminProfileForm;
