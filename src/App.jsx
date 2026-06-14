import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import ReadinessScreen from './components/ReadinessScreen';
import WorkoutScreen from './components/WorkoutScreen';
import { loadSession, clearSession, saveToHistory, loadHistory } from './utils/storage';
import confetti from 'canvas-confetti';

export default function App() {
  const [screen, setScreen] = useState('dashboard');
  const [workoutData, setWorkoutData] = useState(null);

  useEffect(() => {
    const saved = loadSession();
    if (saved && saved.exercises && saved.exercises.length > 0) {
      setWorkoutData(saved);
      setScreen('workout');
    }
  }, []);

  const handleNewWorkout = () => {
    setScreen('readiness');
  };

  const handleStartWorkout = (data) => {
    setWorkoutData(data);
    setScreen('workout');
  };

  const handleFinish = (completedData) => {
    if (completedData) {
      const tonnage = completedData.exercises.reduce((sum, ex) => {
        if (ex.done && ex.weight && ex.reps) {
          return sum + (parseFloat(ex.weight) * parseInt(ex.reps) * ex.targetSets);
        }
        return sum;
      }, 0);

      const finalTonnage = Math.round(tonnage);

      // Читаємо історію, щоб знайти попередній рекорд для цієї групи
      const history = loadHistory() || [];
      const groupHistory = history.filter(h => h.group === completedData.groupName);
      const maxPastTonnage = groupHistory.length > 0
        ? Math.max(...groupHistory.map(h => h.tonnage))
        : 0;

      // Якщо є хоча б одне минуле тренування і ми його побили — стріляємо мінімалістичне конфетті
      if (groupHistory.length > 0 && finalTonnage > maxPastTonnage) {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.65 },
          colors: ['#3b82f6', '#10b981', '#ffffff'], // Синій, зелений, білий (в стилі додатку)
          disableForReducedMotion: true,
          zIndex: 9999
        });
      }

      saveToHistory({
        id: crypto.randomUUID(),
        date: new Date().toISOString(),
        group: completedData.groupName,
        difficulty: completedData.difficulty || 'normal',
        tonnage: finalTonnage,
        exerciseCount: completedData.exercises.filter((e) => e.done).length,
        exercises: completedData.exercises.filter((e) => e.done).map((e) => ({
          name: e.name,
          weight: e.weight,
          reps: e.reps
        }))
      });
    }

    clearSession();
    setWorkoutData(null);
    setScreen('dashboard');
  };

  const handleBackToDashboard = () => {
    setScreen('dashboard');
  };

  return (
    <div className="relative min-h-dvh overflow-hidden bg-zinc-950">
      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-blue-600 opacity-15 blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-72 h-72 rounded-full bg-purple-600 opacity-15 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-64 h-64 rounded-full bg-indigo-500 opacity-10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-dvh">
        {screen === 'dashboard' && <Dashboard onNewWorkout={handleNewWorkout} />}
        {screen === 'readiness' && (
          <ReadinessScreen onStart={handleStartWorkout} onBack={handleBackToDashboard} />
        )}
        {screen === 'workout' && (
          <WorkoutScreen data={workoutData} onFinish={handleFinish} />
        )}
      </div>
    </div>
  );
}