import React, { useState } from 'react';
import { ArrowLeft, Zap, Battery, BatteryLow, BatteryFull, Flame } from 'lucide-react';
import { generateWorkout, getReadinessAdvice, MUSCLE_GROUPS } from '../utils/workoutData';

const READINESS_ICONS = [BatteryLow, Battery, Battery, BatteryFull, Flame];
const READINESS_COLORS = [
  'text-red-400',
  'text-orange-400',
  'text-yellow-400',
  'text-green-400',
  'text-emerald-400',
];

export default function ReadinessScreen({ onStart, onBack }) {
  const [readiness, setReadiness] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleStart = () => {
    if (!readiness || !selectedGroup) return;

    const exercises = generateWorkout(selectedGroup, readiness);
    const groupName = MUSCLE_GROUPS[selectedGroup].name;

    onStart({
      exercises,
      groupName,
      groupKey: selectedGroup,
      readiness,
      startedAt: new Date().toISOString(),
    });
  };

  const resetReadiness = () => {
    setReadiness(null);
  };

  return (
    <div className="p-5 max-w-lg mx-auto">
      {/* Header */}
      <div className="pt-8 pb-6 flex items-center gap-3">
        <button onClick={onBack} className="p-2 rounded-xl bg-white/5 border border-white/10">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <div>
          <h1 className="text-xl font-bold text-white">Нове тренування</h1>
          <p className="text-white/50 text-xs">Оцініть свій стан</p>
        </div>
      </div>

      {/* Readiness Scale */}
      <div className="glass-card p-5 mb-4">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-4 h-4 text-yellow-400" />
          <h2 className="text-sm font-medium text-white/80">Оцініть свій стан</h2>
        </div>

        <div className="grid grid-cols-5 gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((level) => {
            const IconComp = READINESS_ICONS[level - 1];
            const isSelected = readiness === level;
            return (
              <button
                key={level}
                onClick={() => setReadiness(level)}
                className={`flex flex-col items-center gap-1 p-3 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-white/15 border-white/30 scale-105'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <IconComp className={`w-5 h-5 ${READINESS_COLORS[level - 1]}`} />
                <span className="text-xs text-white/70">{level}</span>
              </button>
            );
          })}
        </div>

        {readiness && (
          <div className="bg-white/5 rounded-xl p-3 border border-white/5">
            <p className="text-sm text-white/70">{getReadinessAdvice(readiness)}</p>
            <button
              onClick={resetReadiness}
              className="text-xs text-blue-400 mt-2 hover:text-blue-300"
            >
              Скинути оцінку
            </button>
          </div>
        )}
      </div>

      {/* Muscle Group Selection */}
      <div className="glass-card p-5 mb-6">
        <h2 className="text-sm font-medium text-white/80 mb-4">Група м'язів</h2>
        <div className="space-y-2">
          {Object.entries(MUSCLE_GROUPS).map(([key, group]) => (
            <button
              key={key}
              onClick={() => setSelectedGroup(key)}
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                selectedGroup === key
                  ? 'bg-white/15 border-white/30'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <span className="text-white font-medium">{group.name}</span>
              <span className="text-white/40 text-xs ml-2">
                {group.exercises.length} вправ
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Start Button */}
      <button
        onClick={handleStart}
        disabled={!readiness || !selectedGroup}
        className={`glass-button-primary ${
          !readiness || !selectedGroup ? 'opacity-40 cursor-not-allowed' : ''
        }`}
      >
        Старт
      </button>
    </div>
  );
}