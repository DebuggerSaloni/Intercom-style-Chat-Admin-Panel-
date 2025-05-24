// App.js
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="app">
      <Sidebar onUserSelect={setSelectedUser} />
      <Main selectedUser={selectedUser} />
    </div>
  );
}

export default App;
