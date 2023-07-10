/* eslint-disable react/prop-types */
import { useState, } from 'react';
import { addProduct, editProduct } from '../../services/Api/products'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './admin.css';

const AdminProductForm = ({
  isEditing,
  handleEdit,
  editingProduct,
  setFetchProducts,
}) => {
  const handleAddProduct = async (product) => {
    await addProduct(product).then(() => setFetchProducts('idle'));
  };

  const handleEditProduct = async (product) => {
    await editProduct(editingProduct.id, product).then(() =>
      setFetchProducts('idle')
    );
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
      <h2>Adicionar Novo Produto</h2>

      <div style={{ display: 'flex', flexDirection: 'row', gap: '5%'}} >
        <TextField
          id="name"
          label="Nome"
          placeholder={isEditing && editingProduct.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
          size='small'
        />

        <TextField
          id="price"
          label="Preço"
          placeholder={isEditing && editingProduct.price}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
          size='small'

        />
      </div>

      <TextField
        id="image"
        label="Imagem"
        placeholder={isEditing && editingProduct.urlImage}
        value={urlImage}
        onChange={(e) => setUrlImage(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
        size='small'

      />

      <Button type="submit" variant="contained" fullWidth color='inherit'>
        {isEditing ? 'Editar Produto' : 'Adicionar Produto'}
      </Button>

      {isEditing && (
        <Button 
          type="button"
          variant="contained"
          color='inherit'
          onClick={() => handleEdit(false, '')} 
          fullWidth
          style={{marginTop: '2%'}}
        >
          Cancelar
        </Button>
      )}
    </form>
  );
};

export default AdminProductForm;
