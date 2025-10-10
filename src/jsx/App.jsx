import { useState } from 'react';
import "../Css/App.css";

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = async () => {
        const persoon = {
            username: username,
            password: password,
            age: parseInt(age) // age moet een integer zijn
        };

        try {
            const response = await fetch('http://localhost:8080/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(persoon)
            });

            const result = await response.text();
            alert(`Backend zegt: ${result}`);
        } catch (error) {
            console.error('Fout bij versturen:', error);
            alert('Er ging iets mis bij het versturen naar de backend.');
        }
    };

    return (
        <div style={{ padding: '10px', fontFamily: 'Arial', maxWidth: '400px' }}>
            <p>Geef uw gebruikersnaam:</p>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Typ hier uw gebruikersnaam..."
                style={{ padding: '5px', fontSize: '16px', width: '100%' }}
            />

            <p>Geef uw wachtwoord:</p>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Typ hier uw wachtwoord..."
                style={{ padding: '5px', fontSize: '16px', width: '100%' }}
            />

            <p>Geef uw leeftijd:</p>
            <input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Typ hier uw leeftijd..."
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