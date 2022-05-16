import {GET_HOME_DATA_SUCCESS} from '@redux/actions/home/homeAction';
import {isEmpty, replaceAmpersand} from '@src/utils/Helpers';

const initialState = {
  homeData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_DATA_SUCCESS:
      const _data = [];
      if (!isEmpty(action?.data)) {
        //MERGE DATA FROM API (PREVIEW AND MEDIA META DATA)

        action?.data.forEach(item => {
          if (!isEmpty(item?.data?.media_metadata)) {
            if (
              !isEmpty(
                item?.data?.media_metadata[
                  Object.keys(item?.data?.media_metadata)[0]
                ].p[2]?.u,
              )
            )
              _data.push({
                imageUrl: replaceAmpersand(
                  item?.data?.media_metadata[
                    Object.keys(item?.data?.media_metadata)[0]
                  ].p[2]?.u,
                ),
                data: item?.data,
                gallery: item?.data?.media_metadata,
              });
          }
          if (!isEmpty(item?.data?.preview)) {
            if (!isEmpty(item?.data?.preview?.images[0]?.resolutions)) {
              const imageUrl =
                item?.data?.preview?.images[0]?.resolutions[2]?.url;
              _data.push({
                imageUrl: replaceAmpersand(
                  !isEmpty(imageUrl)
                    ? imageUrl
                    : item?.data?.preview?.images[0]?.resolutions[0]?.url,
                ),
                data: item?.data,
              });
            }
          }
        });
      }

      return {
        ...state,
        homeData: _data,
      };
    default:
      return state;
  }
};
