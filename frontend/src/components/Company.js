import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

export default function Company() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ marginLeft: "30px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
      <MenuIcon style={{ marginTop: "10px", marginLeft: "3px" }} />
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{ marginBottom: "10px" }}
      >
        Company Info
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <span style={{ fontWeight: 'bold' }}>Company :</span> Geeksynergy Technologies Pvt Ltd
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span style={{ fontWeight: 'bold' }}>Address :</span> Sanjayanagar, Bengaluru-56
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span style={{ fontWeight: 'bold' }}>Phone :</span> XXXXXXXXX09
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span style={{ fontWeight: 'bold' }}>Email :</span> XXXXXX@gmail.com
        </MenuItem>
      </Menu>
    </div>
  );
}
