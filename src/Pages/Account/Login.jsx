import React, { useState } from "react";
import "../../Css/Account/AccountRegister.css";
import "../../Css/Theme.css";
import "../../Css/Home.css";
import {Link, useNavigate} from "react-router-dom";

export default function AccountRegister() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const validate = () => {
        if (!username.trim()) return "Vul een gebruikersnaam in";
        if (password.length < 6) return "Wachtwoord moet minstens 6 tekens zijn";
        return "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        const err = validate();
        if (err) {
            setError(err);
            return;
        }

        setLoading(true);
        try {
            const payload = {
                username: username.trim(),
                password
            };

            const resp = await fetch("http://localhost:8080/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!resp.ok) {
                const text = await resp.text();
                throw new Error(text || `Status ${resp.status}`);
            }

            // Succes — navigeer naar home of dashboard
            navigate("/");
        } catch (err) {
            console.error("Login fout:", err);
            setError("Kon niet inloggen. Probeer het later opnieuw.");
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        navigate("/");
    };

    return (
        <div className="register-card" role="region" aria-labelledby="register-title">
            <div className="card-header">
                <h2 id="register-title">Log in</h2>
                <p>Vul je gegevens in om je CO2-voetafdruk bij te houden.</p>
            </div>

            <form className="register-form" onSubmit={handleSubmit} noValidate>
                <div className="form-field">
                    <label htmlFor="username">Gebruikersnaam</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Bijv. jan123"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        autoComplete="username"
                        required
                    />
                </div>

                <div className="password-row">
                    <div className="form-field">
                        <label htmlFor="password">Wachtwoord</label>
                        <input
                            id="password"
                            name="password"
                            type={showPass ? "text" : "password"}
                            placeholder="Sterk wachtwoord"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="new-password"
                            required
                        />
                    </div>

                    <button
                        type="button"
                        className="show-pass"
                        aria-pressed={showPass}
                        onClick={() => setShowPass((s) => !s)}
                    >
                        {showPass ? "Verberg" : "Toon"}
                    </button>
                </div>

                <Link to="/register" className="btn primary">Nog geen account?</Link>

                {error && <div className="field-error" role="alert">{error}</div>}

                <div className="form-actions">
                    <button type="button" className="btn secondary" onClick={handleCancel} disabled={loading}>
                        Annuleren
                    </button>
                    <button type="submit" className="btn primary buttonAccount" disabled={loading}>
                            {loading ? "Bezig..." : "Inloggen"}
                    </button>
                </div>
            </form>
        </div>
    );
}
