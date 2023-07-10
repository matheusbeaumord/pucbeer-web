import {useEffect, useState} from 'react';
import HeaderAdmin from '../../components/Header/HeaderAdmin';
import ProductsList from '../../components/Order_List/ProductsList';
import ProductForm from '../../components/Admin/AdminProductForm';
import { getAllProducts} from '../../services/Api/products';

const AdminProducts = () => {
  const [fetchProducs, setFetchProducts] = useState('idle');
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (fetchProducs === 'idle') {
      setFetchProducts('pending')
      setProducts([])
      getAllProducts().then((r) => {
        setFetchProducts('done')
        setProducts(r)
      });
    }
  }, [fetchProducs]);

  const handleEdit = (stats, product) => {
    setIsEditing(stats)
    setProduct(product)
  };

  return (
    <div>
      <HeaderAdmin />
      <div className="products">
        <ProductForm 
          isEditing={isEditing} 
          handleEdit={handleEdit} 
          editingProduct={product} 
          setFetchProducts={setFetchProducts}/>
        {products && 
          <div className="admin-products-list">
            <ProductsList handleEdit={handleEdit} setFetchProducts={setFetchProducts} />
          </div>
        }
      </div>
    </div>
  )
};

export default AdminProducts;
