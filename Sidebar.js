import './Sidebar.css';

const users = [
  { id: 1, name: 'John Doe', status: 'Active' },
  { id: 2, name: 'Jane Smith', status: 'Waiting' },
  { id: 3, name: 'Bob Marley', status: 'Resolved' },
];

export default function Sidebar({ onUserSelect, selectedUser }) {
  return (
    <div className="sidebar">
      <h2>Inbox</h2>

      <div className="filters">
        <button className="filter active">All</button>
        <button className="filter">Active</button>
        <button className="filter">Waiting</button>
        <button className="filter">Resolved</button>
      </div>

      <div className="chat-list">
        {users.map((user) => (
          <div
            key={user.id}
            className={`chat-item ${selectedUser?.id === user.id ? 'active' : ''}`}
            onClick={() => onUserSelect(user)}
          >
            <div className="avatar">{user.name.charAt(0)}</div>
            <div className="chat-info">
              <div className="chat-name">{user.name}</div>
              <div className="chat-status">{user.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
