import { useState } from 'react';
import "../Css/App.css";


function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = () => {
        alert(`Account aangemaakt!\nGebruikersnaam: ${username}\nWachtwoord: ${password}`);

    };

    return (
        <div style={{ padding: '10px', fontFamily: 'Arial', maxWidth: '400px' }}>
            <p>Geef uw gebruikersnaam:</p>
            <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Typ hier uw gebruikersnaam..."
                style={{ padding: '5px', fontSize: '16px', width: '100%' }}
            />

            <p>Geef uw wachtwoord:</p>
            <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Typ hier uw wachtwoord..."
                style={{ padding: '5px', fontSize: '16px', width: '100%' }}
            />

            <button
                onClick={handleSubmit}
                style={{ marginTop: '10px', padding: '8px 12px', fontSize: '16px', cursor: 'pointer' }}
            >
                Account aanmaken
            </button>
        </div>
    );
}

export default App;
