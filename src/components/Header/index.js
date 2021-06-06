import React from 'react';

//components - styled-system
import Box from '../StyledSystem/box';
import Text from '../StyledSystem/text';

const Header = ({subTitle, emotion, ...props}) => {
  return (
    <Box bg="background" alignItems="center" justifyContent="center" {...props}>
      <Text
        textAlign="center"
        fontFamily="SFProRounded-Semibold"
        fontSize={24}
        mt={27}
        color="text">
        Muce
      </Text>
      <Text
        textAlign="center"
        mt={12}
        fontFamily="SFProRounded-Semibold"
        fontSize={14}
        color="softText">
        {subTitle}
        {emotion && <Text color="text"> emotion</Text>}
      </Text>
    </Box>
  );
};

export default Header;
