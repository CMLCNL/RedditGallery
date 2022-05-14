import axios from 'axios';
export const GET = 'GET';

export const connectApi = async (method, url) => {
  if (method.toUpperCase() !== GET && method.toUpperCase() !== POST) {
    alert('Request method can only be GET or POST');
    return;
  }
  let options = {
    method: method,
    url: url,
  };

  try {
    const response = await axios(options);
    return response;
  } catch (error) {
    throw error;
  }
};
