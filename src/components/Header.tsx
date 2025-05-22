import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHome, FaCode, FaTools, FaEnvelope } from 'react-icons/fa';

const StyledAppBar = styled(AppBar)`
  background: rgba(26, 26, 26, 0.8) !important;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const DesktopMenu = styled.div`
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = [
    { text: 'Início', icon: <FaHome />, href: '#inicio' },
    { text: 'Projetos', icon: <FaCode />, href: '#projetos' },
    { text: 'Habilidades', icon: <FaTools />, href: '#habilidades' },
    { text: 'Contato', icon: <FaEnvelope />, href: '#contato' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          button
          key={item.text}
          component="a"
          href={item.href}
          onClick={handleDrawerToggle}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Matheus
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <DesktopMenu>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                href={item.href}
                startIcon={item.icon}
                sx={{ color: '#7289da' }}
              >
                {item.text}
              </Button>
            ))}
          </DesktopMenu>
        )}
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;