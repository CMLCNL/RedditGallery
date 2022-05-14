import * as React from 'react';
import Svg, {Mask, Path, G, Rect} from 'react-native-svg';

const ArrowLeftIcon = props => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Mask
      id="mask0_371_1383"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={2}
      width={22}
      height={22}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.04208 10.0641L9.45492 3.95609C9.79992 3.61081 9.79992 3.03934 9.45492 2.69406C9.27642 2.51592 9.05042 2.43235 8.82442 2.43235C8.59842 2.43235 8.37242 2.51592 8.19392 2.69406L0.326355 10.2186C-0.0186443 10.5638 -0.0186443 11.1353 0.326355 11.4801L8.19392 19.1672C8.53892 19.5125 9.10992 19.5125 9.45492 19.1672C9.79992 18.822 9.79992 18.2505 9.45492 17.9057L3.24151 11.8481H21.0464C21.5277 11.8481 21.9261 11.4436 21.9261 10.9561C21.9261 10.4686 21.5277 10.0641 21.0464 10.0641L3.04208 10.0641Z"
        fill="white"
      />
    </Mask>
    <G mask="url(#mask0_371_1383)">
      <Rect
        width={22}
        height={22.5}
        transform="translate(-0.0275879 -0.392029)"
        fill="currentColor"
      />
    </G>
  </Svg>
);

export default ArrowLeftIcon;
