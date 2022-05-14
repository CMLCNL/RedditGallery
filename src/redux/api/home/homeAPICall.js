import {createUrl} from '@redux/api/home/homeAPI';
import {connectApi, GET} from '@utils/Requests';

export const getHomeDataCall = async data => {
  try {
    const URL = createUrl(data?.keyword);
    const responseData = await connectApi(GET, URL);
    return responseData?.data;
  } catch (error) {
    console.log('error', error);
    throw error.response.data;
  }
};
