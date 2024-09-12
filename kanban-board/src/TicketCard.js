import React from 'react';
import './TicketCard.css';

// Import SVGs for the priority and status
import UrgentPrioritySVG from './assets/icons_FEtask/SVG - Urgent Priority colour.svg';
import HighPrioritySVG from './assets/icons_FEtask/Img - High Priority.svg';
import MediumPrioritySVG from './assets/icons_FEtask/Img - Medium Priority.svg';
import LowPrioritySVG from './assets/icons_FEtask/Img - Low Priority.svg';
import NoPrioritySVG from './assets/icons_FEtask/No-priority.svg';

import ToDoSVG from './assets/icons_FEtask/To-do.svg';
import InProgressSVG from './assets/icons_FEtask/in-progress.svg';
import DoneSVG from './assets/icons_FEtask/down.svg';

function TicketCard({ ticket }) {
  // Determine the appropriate priority image
  const getPriorityImage = (priority) => {
    switch (priority) {
      case 4: return UrgentPrioritySVG;
      case 3: return HighPrioritySVG;
      case 2: return MediumPrioritySVG;
      case 1: return LowPrioritySVG;
      default: return NoPrioritySVG;
    }
  };

  // Determine the appropriate status image
  const getStatusImage = (status) => {
    switch (status.toLowerCase()) {
      case 'to-do': return ToDoSVG;
      case 'in-progress': return InProgressSVG;
      case 'done': return DoneSVG;
      default: return NoPrioritySVG; // Fallback if no matching status is found
    }
  };

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        {/* Ticket ID on the left */}
        <span className="ticket-id">#{ticket.id}</span>
      </div>

      {/* Ticket Title on the next line */}
      <div className="ticket-title-next-line">
        <h4>{ticket.title}</h4>
      </div>

      <div className="ticket-body">
        <p>{ticket.description}</p>
        <div className="ticket-meta">
          <div className="ticket-priority">
            <img src={getPriorityImage(ticket.priority)} alt="Priority" className="priority-icon" />
          </div>
          <div className="ticket-status">
            <img src={getStatusImage(ticket.status)} alt="Status" className="status-icon" />
          </div>

          {/* Ticket tag and gray disc */}
          <div className="ticket-tag">
            {/* Gray bullet disc */}
            <span className="disc-bullet"></span>
            <span className="tag-text">{ticket.tag}</span>
          </div>
        </div>
      </div>

      <div className="ticket-footer">
        <div className="ticket-user">
          {/* Display the user's name instead of avatar */}
          <p>{ticket.user}</p>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
