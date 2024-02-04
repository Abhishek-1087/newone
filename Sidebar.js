import React from 'react';

const Sidebar = ({ children, collapsed }) => {
  return (
    <div style={{
        width: collapsed ? '60px' : '200px',
        background: collapsed ? 'linear-gradient(to bottom, #361c62, #ce5189)' : 'linear-gradient(to bottom, #361c62, #ce5189)',
        transition: 'width 0.3s ease'
      }}>
      
      {children}
    </div>
  );
};

export default Sidebar;

// linear-gradient(to right, #1f58d4, #01dbdf)