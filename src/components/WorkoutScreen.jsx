import React, { useState, useEffect } from 'react';
import { Dumbbell, Cable, Check, Plus, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { saveSession } from '../utils/storage';
import ExitModal from './ExitModal';
import AddExerciseModal from './AddExerciseModal';
import { saveSession, getVibrationSetting } from '../utils/storage';

const ICON_MAP = {
  Dumbbell: Dumbbell,
  Cable: Cable,
};

const triggerVibration = (pattern) => {
  if (typeof window !== 'undefined' && 'vibrate' in navigator) {
    if (getVibrationSetting()) {
      navigator.vibrate(pattern);
    }
  }
};
export default function WorkoutScreen({ data, onFinish }) {
  const [exercises, setExercises] = useState(data.exercises);
  const [currentIndex, setCurrentIndex] = useState(
    data.exercises.findIndex((e) => !e.done) >= 0
      ? data.exercises.findIndex((e) => !e.done)
      : 0
  );
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [showExitModal, setShowExitModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    const currentEx = exercises[currentIndex];
    if (currentEx) {
      setWeight(currentEx.weight || currentEx.suggestedWeight || '');
      setReps(currentEx.reps || currentEx.targetReps || '');
    }
  }, [currentIndex, exercises]);

  useEffect(() => {
    saveSession({ ...data, exercises });
  }, [exercises, data]);

  const currentExercise = exercises[currentIndex];
  const IconComp = currentExercise ? ICON_MAP[currentExercise.icon] || Dumbbell : Dumbbell;

  const handleDone = () => {
    triggerVibration(100);

    const updated = [...exercises];
    updated[currentIndex] = {
      ...updated[currentIndex],
      weight,
      reps,
      done: true,
    };
    setExercises(updated);

    const nextUndone = updated.findIndex((e, i) => i > currentIndex && !e.done);

    if (nextUndone >= 0) {
      setCurrentIndex(nextUndone);
    } else if (currentIndex < updated.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const hasIncomplete = updated.some((e) => !e.done);
      if (!hasIncomplete) {
        triggerVibration([200, 100, 200]); // Подвійна вібрація на фініш
        onFinish({ ...data, exercises: updated });
      }
    }
  };

  const handleExit = () => {
    triggerVibration(40);
    const hasIncomplete = exercises.some((e) => !e.done);
    if (hasIncomplete) {
      setShowExitModal(true);
    } else {
      onFinish({ ...data, exercises });
    }
  };

  const handleConfirmExit = () => {
    onFinish({ ...data, exercises });
  };

  const handleAddExercise = (newExercise) => {
    const exercise = {
      id: crypto.randomUUID(),
      name: newExercise.name,
      icon: 'Dumbbell',
      targetSets: newExercise.sets || 3,
      targetReps: '10',
      completedSets: 0,
      weight: '',
      reps: '',
      done: false,
    };
    setExercises([...exercises, exercise]);
    setShowAddModal(false);
  };

  const totalExercises = exercises.length;
  const completedCount = exercises.filter((e) => e.done).length;
  const progress = totalExercises > 0 ? (completedCount / totalExercises) * 100 : 0;

  if (!currentExercise) return null;

  return (
    <div className="p-5 max-w-lg mx-auto min-h-dvh flex flex-col relative z-10">
      {/* Header */}
      <div className="pt-8 pb-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-white">{data.groupName}</h1>
          <p className="text-white/50 text-xs">
            {completedCount}/{totalExercises} вправ виконано
          </p>
        </div>
        <button
          onClick={handleExit}
          className="p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5 text-white/70" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-white/5 rounded-full mb-6 overflow-hidden border border-white/5">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Current Exercise Card */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 mb-6 shadow-2xl">

          <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 text-center">
            Вправа {currentIndex + 1} <span className="text-white/30">з</span> {totalExercises}
          </div>

          {/* Image or Icon */}
          <div className="flex justify-center mb-6">
            {currentExercise.image ? (
              <div className="w-full h-48 rounded-2xl bg-black/30 border border-white/10 overflow-hidden flex items-center justify-center p-2 shadow-inner">
                <img
                  src={currentExercise.image}
                  alt={currentExercise.name}
                  className="max-w-full max-h-full object-contain mix-blend-screen"
                />
              </div>
            ) : (
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                <IconComp className="w-10 h-10 text-blue-400" />
              </div>
            )}
          </div>

          {/* Exercise name */}
          <h2 className="text-2xl font-bold text-white text-center mb-1">
            {currentExercise.name}
          </h2>
          <p className="text-white/50 text-sm text-center mb-6">
            {currentExercise.targetSets} підходів {currentExercise.targetReps ? `× ${currentExercise.targetReps}` : ''}
          </p>

          {/* Past Record Info */}
          {currentExercise.lastWeight && (
             <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-3 mb-6 text-center flex flex-col items-center">
               <span className="text-xs text-blue-300/70 mb-1 uppercase tracking-wider">Минулого разу:</span>
               <div className="text-sm">
                 <span className="text-blue-100 font-bold">{currentExercise.lastWeight} кг</span> <span className="text-blue-300/50">×</span> <span className="text-blue-100">{currentExercise.lastReps}</span>
                 {Number(currentExercise.suggestedWeight) > Number(currentExercise.lastWeight) && (
                    <span className="text-emerald-400 font-bold block mt-1 bg-emerald-500/10 px-2 py-0.5 rounded-md inline-block">
                      ↑ Спробуй {currentExercise.suggestedWeight} кг
                    </span>
                 )}
               </div>
             </div>
          )}

          {/* Inputs */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-xs text-white/50 mb-2 block text-center uppercase tracking-widest">Вага (кг)</label>
              <input
                type="number"
                inputMode="decimal"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="0"
                className="w-full bg-black/20 border border-white/10 rounded-2xl py-4 text-center text-3xl font-bold text-white outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all shadow-inner"
              />
            </div>
            <div>
              <label className="text-xs text-white/50 mb-2 block text-center uppercase tracking-widest">Повторення</label>
              <input
                type="number"
                inputMode="numeric"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                placeholder="0"
                className="w-full bg-black/20 border border-white/10 rounded-2xl py-4 text-center text-3xl font-bold text-white outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all shadow-inner"
              />
            </div>
          </div>

          {/* Navigation & Done buttons */}
          <div className="flex items-center gap-3 mb-2">
            <button
              onClick={() => {
                triggerVibration(40);
                setCurrentIndex(Math.max(0, currentIndex - 1));
              }}
              disabled={currentIndex === 0}
              className={`p-4 rounded-2xl border flex items-center justify-center transition-all ${
                currentIndex === 0
                  ? 'bg-white/5 border-white/5 opacity-30 cursor-not-allowed'
                  : 'bg-white/10 border-white/20 hover:bg-white/20 active:scale-95 shadow-lg'
              }`}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={handleDone}
              className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl ${
                currentExercise.done
                  ? 'bg-emerald-600/80 hover:bg-emerald-600 text-white backdrop-blur-md border border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                  : 'bg-blue-600/80 hover:bg-blue-600 text-white backdrop-blur-md border border-blue-500/50 shadow-[0_0_20px_rgba(37,99,235,0.3)]'
              }`}
            >
              <Check className="w-6 h-6" />
              {currentExercise.done ? 'Оновити' : 'Виконано'}
            </button>

            <button
              onClick={() => {
                triggerVibration(40);
                setCurrentIndex(Math.min(exercises.length - 1, currentIndex + 1));
              }}
              disabled={currentIndex === exercises.length - 1}
              className={`p-4 rounded-2xl border flex items-center justify-center transition-all ${
                currentIndex === exercises.length - 1
                  ? 'bg-white/5 border-white/5 opacity-30 cursor-not-allowed'
                  : 'bg-white/10 border-white/20 hover:bg-white/20 active:scale-95 shadow-lg'
              }`}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Add exercise button */}
        <button
          onClick={() => {
            triggerVibration(40);
            setShowAddModal(true);
          }}
          className="w-full py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white/70 font-medium rounded-2xl transition-all flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Додати вправу
        </button>
      </div>

      {/* Modals */}
      {showExitModal && (
        <ExitModal
          onConfirm={handleConfirmExit}
          onCancel={() => setShowExitModal(false)}
        />
      )}
      {showAddModal && (
        <AddExerciseModal
          onAdd={handleAddExercise}
          onClose={() => setShowAddModal(false)}
        />
      )}
    </div>
  );
}