export const GET_HOME_DATA_REQUEST = 'GET_HOME_DATA_REQUEST';
export const GET_HOME_DATA_SUCCESS = 'GET_HOME_DATA_SUCCESS';

export const getHomeData = data => {
  return {
    type: GET_HOME_DATA_REQUEST,
    data,
  };
};
