import instance from './apiInstance';

export const getAllProducts = async () => {
  try {
    const result = await instance.get('products');
    return result.data;
  } catch (error) {
    return { error: 'algo deu errado' };
  }
};

export const sendProducts = async (body, token) => {
  try {
    const result = await instance.post('sale', body, {
      headers: {
        Authorization: token,
      },
    });
    return result;
  } catch (error) {
    return { error: 'não há produtos' };
  }
};

export const addProduct = async (productData) => {
  try {
    const response = await instance.post('/products', productData);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao adicionar produto');
  }
};

export const editProduct = async (productId, productData) => {
  try {
    const response = await instance.put(`/products/${productId}`, productData);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao editar produto');
  }
};

export const deleteProduct = async (productId) => {
  try {
    const response = await instance.delete(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.log('🚀 ~ file: products.js:48 ~ deleteProduct ~ error:', error);
    throw new Error('Erro ao excluir produto');
  }
};
