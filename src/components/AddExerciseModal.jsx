import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

export default function AddExerciseModal({ onAdd, onClose }) {
  const [name, setName] = useState('');
  const [sets, setSets] = useState('3');

  const handleSubmit = () => {
    if (!name.trim()) return;
    onAdd({ name: name.trim(), sets: parseInt(sets) || 3 });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-5">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative glass-card p-6 w-full max-w-sm">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-bold text-white">Додати вправу</h3>
          <button onClick={onClose} className="p-1 rounded-lg bg-white/5">
            <X className="w-5 h-5 text-white/50" />
          </button>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label className="text-xs text-white/50 mb-1 block">Назва вправи</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Наприклад: Підтягування"
              className="glass-input"
            />
          </div>
          <div>
            <label className="text-xs text-white/50 mb-1 block">Кількість підходів</label>
            <input
              type="number"
              inputMode="numeric"
              value={sets}
              onChange={(e) => setSets(e.target.value)}
              placeholder="3"
              className="glass-input"
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!name.trim()}
          className={`glass-button-primary flex items-center justify-center gap-2 ${
            !name.trim() ? 'opacity-40 cursor-not-allowed' : ''
          }`}
        >
          <Plus className="w-4 h-4" />
          Додати
        </button>
      </div>
    </div>
  );
}