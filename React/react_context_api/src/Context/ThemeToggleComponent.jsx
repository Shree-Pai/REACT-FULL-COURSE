import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeToggleComponent({ children }) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const style = {
        backgroundColor: theme === "light" ? '#fff' : '#333',
        color: theme === "light" ? '#000' : '#fff',
        padding: '2.5rem 2rem 2rem 2rem',
        borderRadius: '18px',
        textAlign: 'center',
        transition: 'all 0.3s ease-in-out',
        fontFamily: 'Arial,sans-serif',
        margin: '32px auto',
        maxWidth: '700px',
        width: '95%',
        boxShadow: theme === "light"
            ? '0 4px 24px rgba(0,0,0,0.10)'
            : '0 4px 24px rgba(255,255,255,0.07)',
        border: theme === "light" ? '1px solid #e0e0e0' : '1px solid #444',
        fontSize: '1.08rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: '1.5rem',
    };

    return (
        <div style={style}>
            <div className="theme-toggle-row" style={{ marginBottom: '0.5rem', justifyContent: 'center' }}>
                <button onClick={toggleTheme}>
                    Switch to {theme === "light" ? "dark" : "light"} Mode
                </button>
            </div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 700, margin: '0 0 1.2rem 0', letterSpacing: '1px' }}>Task Manager</h1>
            {children}
        </div>
    );
}

export default ThemeToggleComponent;