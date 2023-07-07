import React from 'react';
import { deleteProduct } from '../../services/Api/products';


const ProductsList = ({ products, handleEdit, setFetchProducts }) => {

  const handleDelete = async (id) => {
    await deleteProduct(id).then(() => setFetchProducts('idle'));
  };

  return (
    <div className="products-list">
      {products.map((product) => (
        <div className="product-item">
          <img src={product.urlImage} alt={product.name} width="100"/>
          <h3>{product.name}</h3>
          <p>Preço: R${product.price}</p>
          <button onClick={() => handleEdit(true, product)} className="edit-button">Editar</button>
          <button onClick={() => handleDelete(product.id)} className="delete-button">Excluir</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
