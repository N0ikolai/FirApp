Скажу прямо: чтобы математика сработала, нам нужно вытащить историю прямо перед стартом тренировки, найти там прошлый раз для этой же группы мышц, посмотреть оценку и переписать suggestedWeight.

Логика жесткая:

Было easy — накидываем +2.5 кг.

Было hard — срезаем -2.5 кг (чтобы не словить перетрен).

Было normal — оставляем прошлый вес.

Я добавил импорт хранилища и внедрил этот алгоритм пересчета прямо в функцию handleStart. Полностью замени код в src/components/ReadinessScreen.jsx:

JavaScript
import React, { useState } from 'react';
import { ArrowLeft, Battery, BatteryMedium, BatteryFull, Flame, Zap } from 'lucide-react';
import { MUSCLE_GROUPS, generateWorkout, getReadinessAdvice } from '../utils/workoutData';
import { loadHistory } from '../utils/storage';

const READINESS_LEVELS = [
  { value: 1, icon: Battery, color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/30' },
  { value: 2, icon: BatteryMedium, color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
  { value: 3, icon: BatteryFull, color: 'text-yellow-500', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30' },
  { value: 4, icon: Zap, color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
  { value: 5, icon: Flame, color: 'text-cyan-500', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30' },
];

export default function ReadinessScreen({ onStart, onBack }) {
  const [readiness, setReadiness] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleStart = () => {
    if (!readiness || !selectedGroup) return;

    let exercises = generateWorkout(selectedGroup, readiness);
    const groupName = MUSCLE_GROUPS[selectedGroup].name;

    // Читаємо історію і шукаємо останнє тренування на цю ж групу
    const history = loadHistory();
    const lastWorkout = history
      .filter(w => w.group === groupName)
      .sort((a, b) => new Date(b.date) - new Date(a.date))[0];

    // Якщо є минуле тренування з оцінкою – коригуємо ваги
    if (lastWorkout && lastWorkout.difficulty) {
      exercises = exercises.map(ex => {
        const pastEx = lastWorkout.exercises.find(e => e.name === ex.name);
        if (pastEx && pastEx.weight) {
          let weight = parseFloat(pastEx.weight);

          if (lastWorkout.difficulty === 'easy') {
            weight += 2.5; // Накидаємо за легке
          } else if (lastWorkout.difficulty === 'hard') {
            weight = Math.max(0, weight - 2.5); // Зрізаємо за важке
          }

          return { ...ex, suggestedWeight: weight.toString() };
        }
        return ex;
      });
    }

    onStart({
      groupKey: selectedGroup,
      groupName,
      readiness,
      exercises,
    });
  };

  return (
    <div className="p-5 max-w-lg mx-auto min-h-dvh flex flex-col relative z-10">
      {/* Header */}
      <div className="pt-8 pb-6 flex items-center gap-4">
        <button onClick={onBack} className="p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-white">Нове тренування</h1>
          <p className="text-white/50 text-sm">Оцініть свій стан</p>
        </div>
      </div>

      {/* Readiness Section */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-5 mb-6 shadow-xl">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-yellow-400" />
          <h2 className="font-medium text-white">Оцініть свій стан (ЦНС)</h2>
        </div>

        <div className="flex justify-between gap-2 mb-4">
          {READINESS_LEVELS.map((level) => {
            const Icon = level.icon;
            const isSelected = readiness === level.value;
            return (
              <button
                key={level.value}
                onClick={() => setReadiness(level.value)}
                className={`flex-1 aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transition-all border ${
                  isSelected
                    ? `${level.bg} ${level.border} scale-105 shadow-lg`
                    : 'bg-white/5 border-white/5 hover:bg-white/10'
                }`}
              >
                <Icon className={`w-6 h-6 ${isSelected ? level.color : 'text-white/40'}`} />
                <span className={`text-xs font-bold ${isSelected ? level.color : 'text-white/40'}`}>
                  {level.value}
                </span>
              </button>
            );
          })}
        </div>

        {readiness && (
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <p className="text-sm text-white/70 text-center">
              {getReadinessAdvice(readiness)}
            </p>
          </div>
        )}
      </div>

      {/* Muscle Group Section */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-5 mb-6 shadow-xl flex-1">
        <h2 className="font-medium text-white mb-4">Група м'язів</h2>
        <div className="space-y-3">
          {Object.entries(MUSCLE_GROUPS).map(([key, group]) => {
            const isSelected = selectedGroup === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedGroup(key)}
                className={`w-full p-4 rounded-2xl text-left transition-all border flex items-center justify-between ${
                  isSelected
                    ? 'bg-blue-600/20 border-blue-500/50 shadow-[0_0_15px_rgba(37,99,235,0.2)]'
                    : 'bg-white/5 border-white/5 hover:bg-white/10'
                }`}
              >
                <span className={`font-medium ${isSelected ? 'text-blue-400' : 'text-white'}`}>
                  {group.name}
                </span>
                <span className="text-xs text-white/30">
                  {group.exercises.length} вправ
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Start Button */}
      <div className="pt-2">
        <button
          onClick={handleStart}
          disabled={!readiness || !selectedGroup}
          className={`w-full py-4 rounded-2xl font-bold text-lg transition-all shadow-xl ${
            !readiness || !selectedGroup
              ? 'bg-white/5 text-white/20 border border-white/5 cursor-not-allowed'
              : 'bg-blue-600/80 hover:bg-blue-600 text-white backdrop-blur-md border border-blue-500/50 shadow-[0_0_20px_rgba(37,99,235,0.3)]'
          }`}
        >
          Старт
        </button>
      </div>
    </div>
  );
}