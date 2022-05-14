import {wp, hp} from '@constants/Dimensions';
import {isAndroid} from '@src/utils/Helpers';

export function FontSize(size) {
  return !isAndroid() ? wp(size) : hp(size);
}
