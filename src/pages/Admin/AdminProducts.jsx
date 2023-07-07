import {useEffect, useState} from 'react';
import HeaderAdmin from '../../components/Header/HeaderAdmin';
import ProductsList from '../../components/Admin/ProductsList';
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

      // try {
      //   const data = 
      // } catch (error) {
        
      // }
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
      <h1>Admin - Produtos</h1>
      <h1>Adicionar Novo Produto</h1>
      <ProductForm 
        isEditing={isEditing} 
        handleEdit={handleEdit} 
        editingProduct={product} 
        setFetchProducts={setFetchProducts}/>
      {products && 
        <ProductsList products={products} handleEdit={handleEdit} setFetchProducts={setFetchProducts} />
      }
    </div>
  )
};

export default AdminProducts;
