import React, { useState, useEffect } from "react";

const statusOptions = [
  { value: "open", label: "Open" },
  { value: "in_progress", label: "In Progress" },
  { value: "closed", label: "Closed" }
];

export default function TicketForm({
  onCreate, onEdit, editing, setEditing
}) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("open");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    if (editing) {
      setTitle(editing.title);
      setStatus(editing.status);
      setDesc(editing.desc || "");
    } else {
      setTitle("");
      setStatus("open");
      setDesc("");
    }
  }, [editing]);
  const validate = () => {
    if (!title) return "Title is required.";
    if (!["open", "in_progress", "closed"].includes(status)) return "Status invalid.";
    if (desc.length > 300) return "Max 300 chars allowed.";
    return "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) return setError(err);
    setError("");
    const ticket = {
      id: editing ? editing.id : Date.now().toString(),
      title,
      status,
      desc
    };
    if (editing) onEdit(ticket);
    else onCreate(ticket);
    setEditing && setEditing(null);
    setTitle(""); setStatus("open"); setDesc("");
  };
  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <h3>{editing ? "Edit Ticket" : "Create Ticket"}</h3>
      {error && <div className="error-msg">{error}</div>}
      <input
        type="text"
        placeholder="Ticket Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <select
        value={status}
        onChange={e => setStatus(e.target.value)}
        required
      >
        {statusOptions.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <textarea
        placeholder="Description (optional, max 300 chars)"
        value={desc}
        onChange={e => setDesc(e.target.value)}
        maxLength={300}
      />
      <button type="submit">{editing ? "Update" : "Create"}</button>
      {editing && <button type="button" onClick={() => setEditing(null)}>Cancel</button>}
    </form>
  );
}
