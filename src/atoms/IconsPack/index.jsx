import React from 'react';
import { useFluentTheme } from '@/theme';
import {
  RestaurantMenuOutlined,
  AttachMoneyOutlined,
  AccountCircle,
  Home,
  FlightTakeoff,
  DirectionsBusFilled,
  PowerOutlined,
  MiscellaneousServicesOutlined,
  SportsEsports,
  ShoppingCartOutlined,
  Add,
} from '@mui/icons-material';
import { Box } from '@mui/material';

const GetIcon = ({ name, color, boxStyles }) => {
  const theme = useFluentTheme();
  const commonIconStyle = {
    fontSize: 32,
  };
  let icon = null;
  switch (name) {
    case 'Add':
      icon = <Add style={commonIconStyle} />;
      break;
    case 'Food':
      icon = <RestaurantMenuOutlined style={commonIconStyle} />;
      break;
    case 'Clothes':
      icon = <ShoppingCartOutlined style={commonIconStyle} />;
      break;
    case 'Vacation':
      icon = <FlightTakeoff style={commonIconStyle} />;
      break;
    case 'Transportation':
      icon = <DirectionsBusFilled style={commonIconStyle} />;
      break;
    case 'Electricity':
      icon = <PowerOutlined style={commonIconStyle} />;
      break;
    case 'Transaction':
      icon = <AttachMoneyOutlined style={commonIconStyle} />;
      break;
    case 'Account':
      icon = <AccountCircle style={commonIconStyle} />;
      break;
    case 'Home':
      icon = <Home style={commonIconStyle} />;
      break;
    case 'Entertainment':
      icon = <SportsEsports style={commonIconStyle} />;
      break;
    case 'Miscellaneous':
    default:
      icon = <MiscellaneousServicesOutlined style={commonIconStyle} />;
      break;
  }
  return (
    <Box
      sx={{
        color: color || theme.palette.cherryRed,
        textAlign: 'center',
        background: theme.palette.black,
        height: '100%',
        maxWidth: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...boxStyles,
      }}
    >
      {icon}
    </Box>
  );
};

export default GetIcon;
