import React from 'react';
import { Activity, TrendingUp, Calendar, Plus } from 'lucide-react';
import { getStats, loadHistory } from '../utils/storage';

export default function Dashboard({ onNewWorkout }) {
  const { totalWorkouts, totalTonnage } = getStats();
  const history = loadHistory();

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('uk-UA', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="p-5 pb-24 max-w-lg mx-auto">
      {/* Header */}
      <div className="pt-8 pb-6">
        <h1 className="text-2xl font-bold text-white">Strength Tracker</h1>
        <p className="text-white/50 text-sm mt-1">Ваш щоденник тренувань</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="glass-card p-4">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-white/50">Тренувань</span>
          </div>
          <p className="text-2xl font-bold text-white">{totalWorkouts}</p>
        </div>
        <div className="glass-card p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-purple-400" />
            <span className="text-xs text-white/50">Тоннаж (кг)</span>
          </div>
          <p className="text-2xl font-bold text-white">
            {totalTonnage > 1000 ? `${(totalTonnage / 1000).toFixed(1)}т` : totalTonnage}
          </p>
        </div>
      </div>

      {/* History */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-4 h-4 text-white/50" />
          <h2 className="text-sm font-medium text-white/70">Історія тренувань</h2>
        </div>

        {history.length === 0 ? (
          <div className="glass-card p-6 text-center">
            <p className="text-white/40 text-sm">Поки що немає тренувань</p>
            <p className="text-white/30 text-xs mt-1">Почніть перше тренування!</p>
          </div>
        ) : (
          <div className="space-y-2">
            {history.slice(0, 10).map((entry) => (
              <div key={entry.id} className="glass-card p-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-medium text-sm">{entry.group}</p>
                  <p className="text-white/40 text-xs">{formatDate(entry.date)}</p>
                </div>
                <div className="text-right">
                  <p className="text-white/70 text-sm">{entry.tonnage} кг</p>
                  <p className="text-white/40 text-xs">{entry.exerciseCount} вправ</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* New Workout Button */}
      <div className="fixed bottom-6 left-5 right-5 max-w-lg mx-auto">
        <button onClick={onNewWorkout} className="glass-button-primary flex items-center justify-center gap-2">
          <Plus className="w-5 h-5" />
          Нове тренування
        </button>
      </div>
    </div>
  );
}