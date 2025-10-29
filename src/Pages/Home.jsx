import React from "react";
import "../Css/Home.css";
import "../Css/AccountBox.css";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home">
            <header className="home-hero">
                <div className="hero-left">
                    <div className="badge">CO2 Tracker</div>
                    <h1>Houd je CO2-voetafdruk bij</h1>
                    <p className="lead">
                        Volg jouw impact, ontdek besparingen en zet kleine stappen met groot
                        effect. Snel inzicht, duidelijke doelen en slimme tips.
                    </p>

                    <div className="ActivatedAccount">
                        <header className="activatedAccount-box">
                            <div className="account-card">
                                <div className="account-info">
                                    <div className="account-name">""</div>
                                    <div className="account-sub">Actief sinds 2025</div>
                                </div>
                                <div className="account-actions">
                                    <Link to="/profile" className="btn small">Bekijk profiel</Link>
                                </div>
                            </div>
                        </header>
                    </div>

                    <div className="hero-actions">
                        <Link to="/register" className="btn primary">Account aanmaken</Link>
                        <Link to="/login" className="btn primary">Login</Link>
                        <Link to="/" className="btn ghost">Meer info</Link>
                    </div>
                </div>


                <div className="hero-right" aria-hidden="true">
                    <div className="meter">
                        <div className="meter-needle" style={{ transform: "rotate(-10deg)" }} />
                        <div className="meter-label">Jaarlijkse CO2 (ton)</div>
                        <div className="meter-value">8.6</div>
                    </div>
                </div>
            </header>

            <section className="quick-stats">
                <article className="stat">
                    <div className="stat-value">2.5</div>
                    <div className="stat-label">Vervoer (ton)</div>
                </article>

                <article className="stat">
                    <div className="stat-value">1.8</div>
                    <div className="stat-label">Voeding (ton)</div>
                </article>

                <article className="stat">
                    <div className="stat-value">3.3</div>
                    <div className="stat-label">Wonen (ton)</div>
                </article>

                <article className="stat callout">
                    <div className="stat-value">+0.9</div>
                    <div className="stat-label">Besparen mogelijk</div>
                </article>
            </section>

            <section className="explain">
                <h2>Hoe het werkt</h2>
                <p>
                    Vul je data in per categorie. De tracker berekent je jaarlijkse
                    uitstoot en geeft praktische tips om die te verlagen. Begin klein:
                    één verandering kan al veel schelen.
                </p>
                <ul className="tips">
                    <li>Reis meer met de fiets of het OV</li>
                    <li>Kies voor seizoens- en plantaardige maaltijden</li>
                    <li>Verbeter isolatie en verwarmingsinstellingen thuis</li>
                </ul>
            </section>

        </div>
    );
}
