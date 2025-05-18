import React from "react";

export default function CharacterCard({ character, onRoll }) {
  return (
    <div className="rounded-xl shadow-md bg-gray-800 p-4 text-white w-full max-w-sm">
      <h2 className="text-xl font-bold mb-2">{character.name}</h2>
      <ul className="mb-4">
        {Object.entries(character.stats).map(([stat, value]) => (
          <li key={stat} className="flex justify-between">
            <span>{stat}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
      <select
        className="w-full mb-2 p-1 rounded bg-gray-700 text-white"
        onChange={(e) => onRoll(character.name, e.target.value)}
      >
        <option value="">Wybierz test</option>
        {Object.keys(character.stats).map((stat) => (
          <option key={stat} value={stat}>
            {stat}
          </option>
        ))}
      </select>
    </div>
  );
}