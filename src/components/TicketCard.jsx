import React from "react";
const statusColors = {
  open: "green",
  in_progress: "orange",
  closed: "gray"
};
export default function TicketCard({ ticket, onEdit, onDelete }) {
  return (
    <div className={`ticket-card ${ticket.status}`}>
      <div className="ticket-header">
        <span className="ticket-title">{ticket.title}</span>
        <span className={`status-tag ${ticket.status}`}>{ticket.status.replace('_', ' ')}</span>
      </div>
      {ticket.desc && <div className="ticket-desc">{ticket.desc}</div>}
      <div className="ticket-actions">
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}
