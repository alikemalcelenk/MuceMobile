import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHome(props) {
  return (
    <Svg
      width={28}
      height={25}
      viewBox="0 0 28 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
      {...props}>
      <Path
        d="M4.75 13.043v-.75H2.09L14 .641l11.91 11.652h-2.66v12.229h-6V15.01h-6.5v9.51h-6V13.044z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default SvgHome;
