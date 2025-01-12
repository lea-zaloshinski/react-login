// Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div style={{ width: '200px', padding: '10px', borderRight: '1px solid #ccc' }}>
      <h3>תפריט</h3>
      <ul>
        <li>
          <Link to="/home">בית</Link>
        </li>
        <li>
          <Link to="/about">אודות</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
