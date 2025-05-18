import React, { useState } from "react";
import "./styles.css";
import CharacterCard from "./components/CharacterCard";

export default function App() {
  const [result, setResult] = useState(null);

  const characters = [
    {
      name: "Borin",
      stats: {
        "Walka wręcz": 45,
        "Ogłada": 32,
        "Zręczność": 38
      }
    },
    {
      name: "Strażnik",
      stats: {
        "Walka wręcz": 40,
        "Ogłada": 28,
        "Zręczność": 35
      }
    }
  ];

  const handleRoll = (charName, stat) => {
    if (!stat) return;
    const character = characters.find((c) => c.name === charName);
    const target = character.stats[stat];
    const roll = Math.floor(Math.random() * 100) + 1;
    const success = roll <= target;
    setResult({
      charName,
      stat,
      roll,
      target,
      success
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">🎲 Testy Cech RPG</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {characters.map((char) => (
          <CharacterCard key={char.name} character={char} onRoll={handleRoll} />
        ))}
      </div>

      {result && (
        <div className="mt-6 bg-gray-800 p-4 rounded-xl shadow text-white">
          <p>
            <strong>{result.charName}</strong> rzucił na <strong>{result.stat}</strong>:{" "}
            <strong>{result.roll}</strong> / {result.target} →{" "}
            {result.success ? (
              <span className="text-green-400">SUKCES</span>
            ) : (
              <span className="text-red-400">PORAŻKA</span>
            )}
          </p>
        </div>
      )}
    </div>
  );
}