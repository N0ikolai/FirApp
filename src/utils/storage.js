const KEYS = {
  SESSION: 'st_current_session',
  HISTORY: 'st_history',
};

export function saveSession(session) {
  try {
    localStorage.setItem(KEYS.SESSION, JSON.stringify(session));
  } catch (e) {
    console.warn('Failed to save session', e);
  }
}

export function loadSession() {
  try {
    const data = localStorage.getItem(KEYS.SESSION);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function clearSession() {
  localStorage.removeItem(KEYS.SESSION);
}

export function saveToHistory(entry) {
  try {
    const history = loadHistory();
    history.unshift(entry);
    localStorage.setItem(KEYS.HISTORY, JSON.stringify(history));
  } catch (e) {
    console.warn('Failed to save history', e);
  }
}

export function loadHistory() {
  try {
    const data = localStorage.getItem(KEYS.HISTORY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function getStats() {
  const history = loadHistory();
  const totalWorkouts = history.length;
  const totalTonnage = history.reduce((sum, entry) => sum + (entry.tonnage || 0), 0);
  return { totalWorkouts, totalTonnage };
}

export function clearAllData() {
  localStorage.clear();
}

export function deleteFromHistory(id) {
  try {
    const history = loadHistory();
    const updated = history.filter(entry => entry.id !== id);
    localStorage.setItem(KEYS.HISTORY, JSON.stringify(updated));
  } catch (e) {
    console.warn('Failed to delete from history', e);
  }
}