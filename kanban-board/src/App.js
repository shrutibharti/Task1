import React, { useState, useEffect } from 'react';
import './styles.css';
import KanbanBoard from './KanbanBoard';
import Header from './Header';
import { ReactComponent as DisplayIcon } from './assets/icons_FEtask/Display.svg'; // Import SVG as React component

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState('status'); // Default group by status
  const [ordering, setOrdering] = useState('priority'); // Default order by priority
  const [showOptions, setShowOptions] = useState(false); // State to toggle options visibility

  // Fetch tickets from API
  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        setTickets(data.tickets);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Toggle the visibility of the dropdown menu
  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="app-container">
      <div className="button-container">
        <button className="display-button" onClick={handleButtonClick}>
          <DisplayIcon className="button-icon" />
          Display
        </button>
        {showOptions && (
          <div className="options-dropdown">
            <Header setGrouping={setGrouping} setOrdering={setOrdering} />
          </div>
        )}
        {}
      </div>
      <KanbanBoard tickets={tickets} grouping={grouping} ordering={ordering} />
    </div>
  );
};

export default App;
