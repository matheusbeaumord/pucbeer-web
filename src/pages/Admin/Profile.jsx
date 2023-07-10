import HeaderAdmin from '../../components/Header/HeaderAdmin';
import AdminProfileForm from '../../components/Admin/AdminProfileForm';

const AdminProfile = () => (
  <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <HeaderAdmin />
    <AdminProfileForm />
  </div>
);
export default AdminProfile;
