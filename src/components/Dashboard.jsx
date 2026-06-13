import React, { useState } from 'react';
import { Settings, Activity, Trash2, History, Plus, X, TrendingUp } from 'lucide-react';
import { clearAllData, loadHistory, deleteFromHistory } from '../utils/storage';

export default function Dashboard({ onNewWorkout }) {
  const [history, setHistory] = useState(loadHistory());
  const [showSettings, setShowSettings] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const stats = {
    totalWorkouts: history.length,
    totalTonnage: history.reduce((sum, entry) => sum + (entry.tonnage || 0), 0)
  };

  const handleClearData = () => {
    if (window.confirm('Ви впевнені, що хочете видалити всі дані? Цю дію неможливо скасувати.')) {
      clearAllData();
      window.location.reload();
    }
  };

  const handleDeleteRecord = (id, e) => {
    e.stopPropagation();
    if (window.confirm('Видалити це тренування з історії?')) {
      deleteFromHistory(id);
      setHistory(loadHistory());
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return 'Сьогодні';
    if (date.toDateString() === yesterday.toDateString()) return 'Вчора';
    return date.toLocaleDateString('uk-UA', { day: 'numeric', month: 'short' });
  };

  const getGroupColor = (groupName) => {
    if (!groupName) return 'bg-gray-500';
    if (groupName.toLowerCase().includes('ноги')) return 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]';
    if (groupName.toLowerCase().includes('груди')) return 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]';
    if (groupName.toLowerCase().includes('спина')) return 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]';
    return 'bg-purple-500';
  };

  const displayTonnage = stats.totalTonnage >= 1000
    ? (stats.totalTonnage / 1000).toFixed(1) + 'т'
    : stats.totalTonnage + ' кг';

  // Підготовка даних для графіка (останні 7 тренувань, сортування від старіших до новіших)
  const chartData = [...history].slice(0, 7).reverse();
  const maxTonnage = chartData.length > 0 ? Math.max(...chartData.map(s => s.tonnage)) : 1;

  return (
    <div className="p-5 max-w-lg mx-auto min-h-dvh flex flex-col relative z-10">
      {/* Header */}
      <div className="pt-8 pb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Strength Tracker</h1>
          <p className="text-white/50 text-sm">Ваш щоденник тренувань</p>
        </div>
        <button
          onClick={() => setShowSettings(true)}
          className="p-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
        >
          <Settings className="w-6 h-6 text-white/70" />
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl">
          <div className="text-white/50 text-xs mb-1 flex items-center gap-1">
            <Activity className="w-3 h-3" /> Тренувань
          </div>
          <div className="text-2xl font-bold text-white">{stats.totalWorkouts}</div>
        </div>
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl">
          <div className="text-white/50 text-xs mb-1 flex items-center gap-1">
            <Activity className="w-3 h-3" /> Тоннаж
          </div>
          <div className="text-2xl font-bold text-white">{displayTonnage}</div>
        </div>
      </div>

      {/* Mini Chart */}
      {chartData.length > 0 && (
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 mb-6 shadow-xl">
          <div className="text-white/50 text-xs mb-4 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> Динаміка (останні 7 тренувань)
          </div>
          <div className="h-24 flex items-end justify-between gap-2">
            {chartData.map((session) => {
              // Вираховуємо висоту стовпця у відсотках (мінімум 5% щоб було видно)
              const heightPercent = Math.max((session.tonnage / maxTonnage) * 100, 5);
              // Беремо тільки колір без тіні для графіка
              const bgColorClass = getGroupColor(session.group).split(' ')[0];

              return (
                <div key={session.id} className="w-full flex flex-col items-center gap-2 group relative">
                  {/* Tooltip з цифрою */}
                  <div className="absolute -top-8 bg-zinc-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                    {session.tonnage} кг
                  </div>
                  {/* Стовпець графіка */}
                  <div
                    className={`w-full rounded-t-md opacity-70 hover:opacity-100 transition-all cursor-pointer ${bgColorClass}`}
                    style={{ height: `${heightPercent}%` }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* History Toggle Button */}
      <button
        onClick={() => setShowHistory(!showHistory)}
        className={`w-full flex items-center justify-between p-4 mb-4 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl transition-colors ${showHistory ? 'bg-white/10' : 'bg-white/5 hover:bg-white/10'}`}
      >
        <div className="flex items-center gap-3">
          <History className="w-5 h-5 text-blue-400" />
          <span className="text-white font-medium">Історія тренувань</span>
        </div>
        <span className="text-white/50 text-sm">
          {showHistory ? 'Сховати' : `${history.length} записів`}
        </span>
      </button>

      {/* History List */}
      {showHistory && (
        <div className="flex-1 overflow-y-auto mb-6 space-y-3 pb-24">
          {history.length === 0 ? (
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center shadow-xl">
              <p className="text-white/40 text-sm">Історія порожня</p>
            </div>
          ) : (
            history.map((session) => (
              <div key={session.id} className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex justify-between items-center shadow-xl hover:bg-white/10 transition-colors overflow-hidden">
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${getGroupColor(session.group)}`} />
                <div className="pl-2">
                  <div className="text-white font-medium text-sm">{session.group}</div>
                  <div className="text-white/40 text-xs mt-1">
                    {formatDate(session.date)}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-white font-bold text-sm">{session.tonnage} кг</div>
                    <div className="text-white/40 text-xs mt-1">{session.exerciseCount} вправ</div>
                  </div>
                  <button
                    onClick={(e) => handleDeleteRecord(session.id, e)}
                    className="p-2 text-white/20 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {!showHistory && <div className="flex-1" />}

      {/* Start Button */}
      <div className={`${showHistory ? 'fixed bottom-5 left-5 right-5 max-w-lg mx-auto z-20' : ''}`}>
        <button
          onClick={onNewWorkout}
          className="w-full py-4 bg-blue-600/80 hover:bg-blue-600 backdrop-blur-md border border-blue-500/50 text-white font-bold rounded-2xl shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" /> Нове тренування
        </button>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/60 backdrop-blur-sm">
          <div className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 w-full max-w-sm shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Налаштування</h2>
              <button onClick={() => setShowSettings(false)} className="p-2 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <X className="w-5 h-5 text-white/70" />
              </button>
            </div>

            <button
              onClick={handleClearData}
              className="w-full flex items-center justify-center gap-2 p-4 bg-red-500/10 border border-red-500/20 text-red-500 font-medium rounded-xl hover:bg-red-500/20 transition-colors"
            >
              <Trash2 className="w-5 h-5" />
              Скинути всі дані
            </button>
          </div>
        </div>
      )}
    </div>
  );
}