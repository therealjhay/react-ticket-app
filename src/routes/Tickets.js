import React, { useState } from "react";
import TicketForm from "../components/TicketForm";
import TicketCard from "../components/TicketCard";
import Footer from "../components/Footer";

export default function Tickets() {
  // Example ticket state (use localStorage/mockApi in real app)
  const [tickets, setTickets] = useState([]);
  const [editing, setEditing] = useState(null);

  const handleCreate = (ticket) => setTickets([...tickets, ticket]);
  const handleEdit = (updated) =>
    setTickets(tickets.map(t => (t.id === updated.id ? updated : t)));
  const handleDelete = (id) =>
    setTickets(tickets.filter(t => t.id !== id));

  return (
    <div>
      <TicketForm
        onCreate={handleCreate}
        onEdit={handleEdit}
        editing={editing}
        setEditing={setEditing}
      />
      <div className="ticket-list">
        {tickets.map(t => (
          <TicketCard
            key={t.id}
            ticket={t}
            onEdit={() => setEditing(t)}
            onDelete={() => handleDelete(t.id)}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
