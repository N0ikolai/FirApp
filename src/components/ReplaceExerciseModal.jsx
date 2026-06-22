import React from 'react';
import { X, RefreshCw } from 'lucide-react';
import { EXERCISE_DATABASE, getMuscleGroupByExercise } from '../utils/workoutData';

export default function ReplaceExerciseModal({ currentExerciseName, onSelect, onClose }) {
  const group = getMuscleGroupByExercise(currentExerciseName);
  const alternatives = group ? EXERCISE_DATABASE[group].filter(ex => ex.name !== currentExerciseName) : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/80 backdrop-blur-sm">
      <div className="bg-zinc-900 border border-white/10 rounded-3xl w-full max-w-sm flex flex-col max-h-[80vh] shadow-2xl overflow-hidden">

        <div className="p-5 flex justify-between items-center border-b border-white/10">
          <div>
            <h2 className="text-lg font-bold text-white">Заміна вправи</h2>
            <p className="text-white/50 text-xs text-left">Група: {group || 'Не визначено'}</p>
          </div>
          <button onClick={onClose} className="p-2 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
            <X className="w-5 h-5 text-white/70" />
          </button>
        </div>

        <div className="p-2 overflow-y-auto">
          {alternatives.length > 0 ? (
            alternatives.map((ex, idx) => (
              <button
                key={idx}
                onClick={() => onSelect(ex)}
                className="w-full text-left p-4 flex items-center justify-between hover:bg-white/5 rounded-2xl transition-colors border border-transparent hover:border-white/5"
              >
                <span className="text-white font-medium text-sm">{ex.name}</span>
                <RefreshCw className="w-4 h-4 text-blue-400 opacity-50" />
              </button>
            ))
          ) : (
            <div className="p-6 text-center text-white/50 text-sm">
              Альтернатив не знайдено.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}