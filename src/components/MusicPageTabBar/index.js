import React from 'react';

//components - styled-system
import Box from '../StyledSystem/box';
import Button from '../StyledSystem/button';

//components - icons
import HomeIcon from '../Icons/Home';

//theme
import theme from '../../utils/theme';

const MusicPageTabBar = ({navigation}) => {
  return (
    <Box mb={30} alignItems="center" justifyContent="flex-start">
      <Button onPress={() => navigation.navigate('HomePage')}>
        <HomeIcon color={theme.colors.text} />
      </Button>
    </Box>
  );
};

export default MusicPageTabBar;
