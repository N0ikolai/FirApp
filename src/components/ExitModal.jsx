import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function ExitModal({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-5">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onCancel} />
      <div className="relative glass-card p-6 w-full max-w-sm">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-red-400" />
          </div>
        </div>
        <h3 className="text-lg font-bold text-white text-center mb-2">
          Тренування не завершено
        </h3>
        <p className="text-white/50 text-sm text-center mb-6">
          Точно вийти? Прогрес буде втрачено.
        </p>
        <div className="space-y-2">
          <button onClick={onConfirm} className="glass-button-danger">
            Так, вийти
          </button>
          <button onClick={onCancel} className="glass-button-secondary">
            Продовжити тренування
          </button>
        </div>
      </div>
    </div>
  );
}