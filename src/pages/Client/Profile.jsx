import ClientProfileForm from '../../components/Client/ClientProfileForm';
import Header from '../../components/Header/Header';

function ClientProfile() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

      <Header />
      <ClientProfileForm />
    </div>
  );
}

export default ClientProfile;
