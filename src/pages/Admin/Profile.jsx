import HeaderAdmin from '../../components/Header/HeaderAdmin';
import AdminProfileForm from '../../components/Admin/AdminProfileForm';

const AdminProfile = () => (
  <div>
    <HeaderAdmin />
    <div className="profile">
      <AdminProfileForm />
    </div>
  </div>
);
export default AdminProfile;
