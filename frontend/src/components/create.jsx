// MatchForm.js

import React, { useState } from 'react';

const teams = ["CSK", "GT", "DC", "KKR", "LSG", "MI", "PK", "RR", "RCB", "SH"];

function MatchForm() {
  const [formData, setFormData] = useState({
    team1: '',
    team2: '',
    matchDate: '',
    time: '',
    venue: '',
    tossWinner: '',
    matchWinner: '',
    matchNumber: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const matchNumber = formData.matchNumber.toString().padStart(2, '0');
    const uniqueId = `IPL24_${matchNumber}`;

    try {
      const response = await fetch('http://localhost:3000/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...formData, uniqueId })
      });

      if (!response.ok) {
        throw new Error('Failed to create match.');
      }

      alert('Match created successfully.');
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>Create a New Match</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="team1">Team 1:</label>
        <select id="team1" name="team1" value={formData.team1} onChange={handleChange} required>
          <option value="">Select Team</option>
          {teams.map((team, index) => (
            <option key={index} value={team}>{team}</option>
          ))}
        </select><br /><br />

        <label htmlFor="team2">Team 2:</label>
        <select id="team2" name="team2" value={formData.team2} onChange={handleChange} required>
          <option value="">Select Team</option>
          {teams.map((team, index) => (
            <option key={index} value={team}>{team}</option>
          ))}
        </select><br /><br />

        <label htmlFor="matchDate">Match Date:</label>
        <input type="date" id="matchDate" name="matchDate" value={formData.matchDate} onChange={handleChange} required /><br /><br />

        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required /><br /><br />

        <label htmlFor="venue">Venue:</label>
        <input type="text" id="venue" name="venue" value={formData.venue} onChange={handleChange} required /><br /><br />

        <label htmlFor="tossWinner">Toss Winner:</label>
        <select id="tossWinner" name="tossWinner" value={formData.tossWinner} onChange={handleChange} required>
          <option value="">Select Team</option>
          <option value={formData.team1}>Team 1</option>
          <option value={formData.team2}>Team 2</option>
        </select><br /><br />

        <label htmlFor="matchWinner">Match Winner:</label>
        <select id="matchWinner" name="matchWinner" value={formData.matchWinner} onChange={handleChange} required>
          <option value="">Select Team</option>
          <option value={formData.team1}>Team 1</option>
          <option value={formData.team2}>Team 2</option>
        </select><br /><br />



        {/* <label htmlFor="tossWinner">Toss Winner:</label>
        <select id="tossWinner" name="tossWinner" value={formData.tossWinner} onChange={handleChange}>
          <option value="">Select Team</option>
          {teams.map((team, index) => (
            <option key={index} value={team}>{team}</option>
          ))}
        </select><br /><br />

        <label htmlFor="matchWinner">Match Winner:</label>
        <select id="matchWinner" name="matchWinner" value={formData.matchWinner} onChange={handleChange}>
          <option value="">Select Team</option>
          {teams.map((team, index) => (
            <option key={index} value={team}>{team}</option>
          ))}
        </select><br /><br /> */}
        <label htmlFor="matchNumber">Match Number:</label>
        <input type="number" id="matchNumber" name="matchNumber" value={formData.matchNumber} onChange={handleChange} min="1" required /><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MatchForm;
