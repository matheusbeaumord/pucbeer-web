import React, { useState, useEffect } from 'react';
import { addProduct, editProduct } from '../../services/Api/products'
import './admin.css'



const AdminProductForm = ({ isEditing,  handleEdit, editingProduct, setFetchProducts}) => {
  const handleAddProduct = async (product) => {
    // Aqui você pode fazer a chamada para adicionar o produto no backend
    await addProduct(product).then(() => setFetchProducts('idle'))
  };

  const handleEditProduct = async (product) => {
    await editProduct(editingProduct.id, product).then(() => setFetchProducts('idle'));
  };

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [urlImage, setUrlImage] = useState(null);

   const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar se os campos estão preenchidos
    if ((!name || !price || !urlImage) && !isEditing) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    if (isEditing) {
      // Chamar a função de edição passando o ID do produto e os dados atualizados
      handleEditProduct({ name, price, urlImage });
    } else {
      // Chamar a função de adição passando os dados do novo produto
      handleAddProduct({ name, price, urlImage });
    }

    // Limpar os campos do formulário
    setName('');
    setPrice('');
    setUrlImage('');
    handleEdit(false);
  };
  
  return (
    <form onSubmit={handleSubmit}>

    <label htmlFor="name">Nome:</label>
    <input
      type="text"
      id="name"
      placeholder={isEditing && editingProduct.name}
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    <label htmlFor="price">Preço:</label>
    <input
      type="price"
      id="price"
      placeholder={isEditing && editingProduct.price}
      value={price}
      onChange={(e) => setPrice(e.target.value)}
    />

    <label htmlFor="image">Imagem:</label>
    <input
      type="text"
      id="image"
      placeholder={isEditing && editingProduct.urlImage}
      value={urlImage}
      onChange={(e) => setUrlImage(e.target.value)}
    />
    <button type="submit">
      {isEditing ? 'Editar Produto' : 'Adicionar Produto'}
    </button>
    {
      isEditing && (
        <button type="button" onClick={() => handleEdit(false, '')}>
            Cancelar
        </button>)
    }
  </form>
  );
};

export default AdminProductForm;
