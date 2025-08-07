import React, { useState, useEffect } from 'react';
import './ThemeLab.css';

export default function ThemeLab() {
  const [selectedTheme, setSelectedTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const [primaryColor, setPrimaryColor] = useState(() => {
    return localStorage.getItem('primary-color') || '#FB6000';
  });

  const [fontStyle, setFontStyle] = useState(() => {
    return localStorage.getItem('font-style') || 'sans-serif';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', selectedTheme);
    localStorage.setItem('theme', selectedTheme);
  }, [selectedTheme]);

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    localStorage.setItem('primary-color', primaryColor);
  }, [primaryColor]);

  useEffect(() => {
    document.documentElement.style.setProperty('--font-family', fontStyle);
    localStorage.setItem('font-style', fontStyle);
  }, [fontStyle]);

  return (
    <div className="theme-lab-container">
      <h3>🎨 Theme Lab</h3>
      <p>Customize your theme live:</p>

      <div className="theme-buttons">
        {['light', 'dark'].map((theme) => (
          <button
            key={theme}
            className={selectedTheme === theme ? 'active' : ''}
            onClick={() => setSelectedTheme(theme)}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </button>
        ))}
      </div>

      <label>
        Primary Color:
        <input
          type="color"
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
        />
      </label>

      <label>
        Font Style:
        <select
          value={fontStyle}
          onChange={(e) => setFontStyle(e.target.value)}
        >
          <option value="sans-serif">Sans</option>
          <option value="serif">Serif</option>
          <option value="monospace">Monospace</option>
        </select>
      </label>
    </div>
  );
}
// ThemeLab.jsx
// This component allows users to customize the theme of the page

