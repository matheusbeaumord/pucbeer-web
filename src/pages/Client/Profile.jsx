import ClientProfileForm from '../../components/Client/ClientProfileForm';
import Header from '../../components/Header/Header';

function ClientProfile() {
  return (
    <div>
      <Header />
      <div className="profile">
        <ClientProfileForm />
      </div>
    </div>
  );
}

export default ClientProfile;
