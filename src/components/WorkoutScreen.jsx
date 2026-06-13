import React, { useState, useEffect } from 'react';
import { Dumbbell, Cable, Check, Plus, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { saveSession } from '../utils/storage';
import ExitModal from './ExitModal';
import AddExerciseModal from './AddExerciseModal';

const ICON_MAP = {
  Dumbbell: Dumbbell,
  Cable: Cable,
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
        onFinish({ ...data, exercises: updated });
      }
    }
  };

  const handleExit = () => {
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
    <div className="p-5 max-w-lg mx-auto min-h-dvh flex flex-col">
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
          className="p-2 rounded-xl bg-white/5 border border-white/10"
        >
          <X className="w-5 h-5 text-white/70" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1 bg-white/10 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Current Exercise Card */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="glass-card p-6 mb-6">

          <div className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 text-center">
            Вправа {currentIndex + 1} з {totalExercises}
          </div>

          {/* Image or Icon */}
          <div className="flex justify-center mb-4">
            {currentExercise.image ? (
              <img
                src={currentExercise.image}
                alt={currentExercise.name}
                className="w-full h-48 object-contain rounded-2xl border border-white/10 bg-black/20"
              />
            ) : (
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <IconComp className="w-8 h-8 text-blue-400" />
              </div>
            )}
          </div>

          {/* Exercise name */}
          <h2 className="text-xl font-bold text-white text-center mb-1">
            {currentExercise.name}
          </h2>
          <p className="text-white/40 text-sm text-center mb-6">
            {currentExercise.targetSets} підходів {currentExercise.targetReps ? `× ${currentExercise.targetReps}` : ''}
          </p>

          {/* Past Record Info */}
          {currentExercise.lastWeight && (
             <div className="bg-white/5 border border-white/10 rounded-xl p-3 mb-6 text-center flex flex-col items-center">
               <span className="text-xs text-white/50 mb-1">Минулого разу:</span>
               <div className="text-sm">
                 <span className="text-white font-bold">{currentExercise.lastWeight} кг</span> × {currentExercise.lastReps}
                 {Number(currentExercise.suggestedWeight) > Number(currentExercise.lastWeight) && (
                    <span className="text-emerald-400 ml-2 font-medium block mt-1">↑ Спробуй {currentExercise.suggestedWeight} кг</span>
                 )}
               </div>
             </div>
          )}

          {/* Inputs */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div>
              <label className="text-xs text-white/50 mb-1 block">Вага (кг)</label>
              <input
                type="number"
                inputMode="decimal"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="0"
                className="glass-input text-center text-2xl"
              />
            </div>
            <div>
              <label className="text-xs text-white/50 mb-1 block">Повторення</label>
              <input
                type="number"
                inputMode="numeric"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                placeholder="0"
                className="glass-input text-center text-2xl"
              />
            </div>
          </div>

          {/* Navigation & Done buttons */}
          <div className="flex items-center gap-3 mb-2">
            <button
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
              className={`p-3 rounded-xl border flex items-center justify-center transition-all ${
                currentIndex === 0
                  ? 'bg-white/5 border-white/5 opacity-30 cursor-not-allowed'
                  : 'bg-white/10 border-white/20 hover:bg-white/20 active:scale-95'
              }`}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button onClick={handleDone} className="glass-button-primary flex-1 flex items-center justify-center gap-2 py-3">
              <Check className="w-5 h-5" />
              {currentExercise.done ? 'Оновити' : 'Виконано'}
            </button>

            <button
              onClick={() => setCurrentIndex(Math.min(exercises.length - 1, currentIndex + 1))}
              disabled={currentIndex === exercises.length - 1}
              className={`p-3 rounded-xl border flex items-center justify-center transition-all ${
                currentIndex === exercises.length - 1
                  ? 'bg-white/5 border-white/5 opacity-30 cursor-not-allowed'
                  : 'bg-white/10 border-white/20 hover:bg-white/20 active:scale-95'
              }`}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Add exercise button */}
        <button
          onClick={() => setShowAddModal(true)}
          className="glass-button-secondary flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4" />
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