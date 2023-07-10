import instance from './apiInstance';
export const registerUser = async (name, email, role, password) => {
  try {
    const result = await instance.post('user', { name, email, role, password });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const loginUser = async (email, password) => {
  try {
    const result = await instance.post('login', { email, password });
    return result.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateUserName = async ({ newName, newEmail }, token) => {
  try {
    const result = await instance.post(
      'updateUserName',
      {
        name: newName,
        email: newEmail,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const getDetailOrders = async (orderId) => {
  try {
    const result = await instance.get(`orders/${orderId}`);
    // {
    //   headers: {
    //     Authorization: token,
    //   },
    // });
    return result;
  } catch (error) {
    return { error: 'pedido não encontrado' };
  }
};
