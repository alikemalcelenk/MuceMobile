import React from 'react';
import {MaterialIndicator} from 'react-native-indicators';

//components - styled-system
import Box from '../StyledSystem/box';

const Spinner = ({navigation, ...props}) => {
  return (
    <Box alignItems="center" justifyContent="center" flex={1}>
      <MaterialIndicator {...props} />
    </Box>
  );
};

export default Spinner;
