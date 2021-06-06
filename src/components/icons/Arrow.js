import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArrow(props) {
  return (
    <Svg
      width={12}
      height={20}
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
      {...props}>
      <Path
        d="M1.057 17.498a1.48 1.48 0 000 2.004c.52.553 1.365.553 1.886 0l8-8.5c.505-.537.522-1.4.04-1.96L3.649.543A1.279 1.279 0 001.766.457a1.48 1.48 0 00-.082 2.001l6.47 7.5-7.097 7.541z"
        fill="currentColor"
      />
    </Svg>
  );
}

export default SvgArrow;
