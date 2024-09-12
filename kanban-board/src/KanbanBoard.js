import React from 'react';
import TicketCard from './TicketCard';

function KanbanBoard({ tickets, grouping, ordering }) {
  const groupBy = (tickets, key) => {
    return tickets.reduce((result, ticket) => {
      (result[ticket[key]] = result[ticket[key]] || []).push(ticket);
      return result;
    }, {});
  };

  const orderBy = (tickets, key) => {
    return tickets.sort((a, b) => {
      if (key === 'priority') {
        return b.priority - a.priority; // Descending order for priority
      }
      if (key === 'title') {
        return a.title.localeCompare(b.title); // Ascending order for title
      }
      return 0;
    });
  };

  let groupedTickets = groupBy(tickets, grouping);
  let orderedTickets = Object.keys(groupedTickets).reduce((acc, group) => {
    acc[group] = orderBy(groupedTickets[group], ordering);
    return acc;
  }, {});

  return (
    <div className="kanban-board">
      {Object.keys(orderedTickets).map((group) => (
        <div key={group} className="kanban-column">
          <h3>{group}</h3>
          {orderedTickets[group].map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
