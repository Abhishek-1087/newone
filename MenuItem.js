// MenuItem.js
import React from 'react';
import './MenuItem.css'; // Import the CSS file

const MenuItem = ({ icon, onClick, children, collapsed }) => {
  const menuItemStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '10px',
    transition: 'background-color 0.3s ease, color 0.3s ease', // Added color transition
    color: 'white', // Set text color to white
  };

  return (
    <div className="menuItem" style={menuItemStyle} onClick={onClick}>
      {icon}
      {!collapsed && <span style={{ marginLeft: '10px', color: 'inherit' }}>{children}</span>}
    </div>
  );
};

export default MenuItem;
