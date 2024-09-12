import React from 'react';
import './styles.css'; // Ensure this file contains relevant styles

function Header({ setGrouping, setOrdering }) {
  return (
    <div className="header">
      {/* Grouping options on the first line */}
      <div className="grouping">
        <label>Grouping: </label>
        <select onChange={(e) => setGrouping(e.target.value)}>
          <option value="status">By Status</option>
          <option value="user">By User</option>
          <option value="priority">By Priority</option>
        </select>
      </div>

      {/* Ordering options on the second line */}
      <div className="ordering">
        <label>Ordering: </label>
        <select onChange={(e) => setOrdering(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
