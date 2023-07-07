import instance from './apiInstance';

export const getOrdersFromId = async (token) => {
  try {
    const result = await instance.get('orders', {
      headers: {
        authorization: token,
      },
    });
    return result.data;
  } catch (error) {
    console.log(error);
    return { error: 'Erro' };
  }
};

export const getAllOrders = async (token) => {
  try {
    const result = await instance.get('sale', {
      headers: {
        authorization: token,
      },
    });
    return result.data;
  } catch (error) {
    console.log(error);
    return { error: 'Erro' };
  }
};

export const updateOrderStatus = async (id) => {
  try {
    await instance.put(`admin/orders/${id}`);
  } catch (error) {
    console.log(error);
    return { error: 'Erro' };
  }
};
