// ===== WORKOUT DATA =====
const WORKOUT_DATA = [
  {
    id: "day1", title: "Ноги и Плечи", label: "День 1",
    exercises: [
      { id: "squat", name: "Приседания со штангой", sets: "4 × 10–12", targetReps: 12, src: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=600&h=400&fit=crop", emoji: "🏋️", alternatives: ["Фронтальные приседания", "Приседания в Смите"] },
      { id: "legpress", name: "Жим ногами", sets: "4 × 10–15", targetReps: 15, src: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=600&h=400&fit=crop", emoji: "🦵", alternatives: ["Выпады с гантелями"] },
      { id: "legext", name: "Разгибания ног сидя", sets: "3 × 12–15", targetReps: 15, src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop", emoji: "🦵", alternatives: ["Сисси-приседания"] },
      { id: "legcurl", name: "Сгибания ног лёжа", sets: "3 × 12–15", targetReps: 15, src: "https://images.unsplash.com/photo-1597347316205-36f6c451902a?w=600&h=400&fit=crop", emoji: "🦵", alternatives: ["Мертвая тяга с гантелями"] },
      { id: "ohpress", name: "Армейский жим стоя", sets: "4 × 8–12", targetReps: 12, src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&h=400&fit=crop", emoji: "🏋️", alternatives: ["Жим гантелей стоя"] },
      { id: "dbpress", name: "Жим гантелей сидя", sets: "3 × 10–12", targetReps: 12, src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop", emoji: "💪", alternatives: ["Жим Арнольда"] },
      { id: "lateral", name: "Махи гантелями в стороны", sets: "4 × 12–15", targetReps: 15, src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop", emoji: "💪", alternatives: ["Тяга нижнего блока в сторону"] },
      { id: "uprightrow", name: "Тяга штанги к подбородку", sets: "3 × 10–12", targetReps: 12, src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&h=400&fit=crop", emoji: "💪", alternatives: ["Махи перед собой"] }
    ]
  },
  {
    id: "day2", title: "Грудь и Бицепс", label: "День 2",
    exercises: [
      { id: "benchpress", name: "Жим штанги лёжа", sets: "4 × 8–12", targetReps: 12, src: "https://images.unsplash.com/photo-1534368786749-b63e05c92717?w=600&h=400&fit=crop", emoji: "🏋️", alternatives: ["Жим гантелей лёжа", "Отжимания на брусьях"] },
      { id: "inclinedb", name: "Жим гантелей на наклонной", sets: "4 × 10–12", targetReps: 12, src: "https://images.unsplash.com/photo-1598268030450-7a476f602edb?w=600&h=400&fit=crop", emoji: "💪", alternatives: ["Жим штанги на наклонной"] },
      { id: "dbfly", name: "Разведение гантелей лёжа", sets: "3 × 12–15", targetReps: 15, src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop", emoji: "💪", alternatives: ["Сведение рук в тренажере Бабочка"] },
      { id: "crossover", name: "Сведение рук в кроссовере", sets: "3 × 12–15", targetReps: 15, src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=400&fit=crop", emoji: "🔗", alternatives: ["Пуловер с гантелью"] },
      { id: "bbcurl", name: "Подъём штанги на бицепс", sets: "4 × 10–12", targetReps: 12, src: "https://images.unsplash.com/photo-1581009137042-c552e485697a?w=600&h=400&fit=crop", emoji: "💪", alternatives: ["Подъем EZ-штанги"] },
      { id: "dbcurl", name: "Подъём гантелей с супинацией", sets: "3 × 10–12", targetReps: 12, src: "https://images.unsplash.com/photo-1586401100295-7a8096fd231a?w=600&h=400&fit=crop", emoji: "💪", alternatives: ["Попеременный подъем гантелей"] },
      { id: "preacher", name: "Скамья Скотта (EZ-штанга)", sets: "3 × 10–12", targetReps: 12, src: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=600&h=400&fit=crop", emoji: "💪", alternatives: ["Сгибания на нижнем блоке"] },
      { id: "hammer", name: "«Молотки» с гантелями", sets: "3 × 10–12", targetReps: 12, src: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=600&h=400&fit=crop", emoji: "🔨", alternatives: ["Сгибания с канатом на блоке"] }
    ]
  },
  {
    id: "day3", title: "Спина и Трицепс", label: "День 3",
    exercises: [
      { id: "pullup", name: "Подтягивания широким хватом", sets: "4 × 8–12", targetReps: 12, src: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&h=400&fit=crop", emoji: "🏃", alternatives: ["Тяга верхнего блока широким хватом"] },
      { id: "bbrow", name: "Тяга штанги в наклоне", sets: "4 × 8–12", targetReps: 12, src: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=600&h=400&fit=crop", emoji: "🏋️", alternatives: ["Тяга Т-грифа"] },
      { id: "cablerow", name: "Тяга нижнего блока к поясу", sets: "3 × 10–12", targetReps: 12, src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop", emoji: "🔗", alternatives: ["Тяга гантелей лежа на животе"] },
      { id: "dbrow", name: "Тяга гантели одной рукой", sets: "3 × 10–12", targetReps: 12, src: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=600&h=400&fit=crop&q=80", emoji: "💪", alternatives: ["Тяга в рычажном тренажере"] },
      { id: "cgbench", name: "Жим узким хватом лёжа", sets: "4 × 8–12", targetReps: 12, src: "https://images.unsplash.com/photo-1534368786749-b63e05c92717?w=600&h=400&fit=crop&q=80", emoji: "🏋️", alternatives: ["Отжимания от скамьи за спиной"] },
      { id: "skullcrush", name: "Французский жим EZ-штангой", sets: "3 × 10–12", targetReps: 12, src: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&h=400&fit=crop", emoji: "💀", alternatives: ["Французский жим с гантелями"] },
      { id: "pushdown", name: "Разгибания на блоке с канатом", sets: "3 × 12–15", targetReps: 15, src: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=600&h=400&fit=crop", emoji: "🔗", alternatives: ["Разгибания с прямой рукоятью"] },
      { id: "ohext", name: "Разгибание гантели из-за головы", sets: "3 × 10–12", targetReps: 12, src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop&q=80", emoji: "💪", alternatives: ["Разгибание из-за головы в кроссовере"] }
    ]
  }
];

// ===== STATE =====
let activeDay = localStorage.getItem('activeDay') || 'day1';
let todayDone = JSON.parse(localStorage.getItem('todayDone') || '{}');

// ===== DOM ELEMENTS =====
const grid = document.getElementById('exercises-grid');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const btnTheme = document.getElementById('btn-theme');
const themeIcon = document.getElementById('theme-icon');
const btnCsv = document.getElementById('btn-csv');
const btnReset = document.getElementById('btn-reset');
const btnHistory = document.getElementById('btn-history');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');

// ===== THEME =====
function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  themeIcon.textContent = saved === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeIcon.textContent = next === 'dark' ? '☀️' : '🌙';
}

// ===== ADAPTIVE WEIGHT ALGORITHM =====
function getHistory(exId) {
  const raw = localStorage.getItem(`workout_log_${exId}`);
  return raw ? JSON.parse(raw) : [];
}

function saveToHistory(exId, weight, reps) {
  const history = getHistory(exId);
  history.push({ weight, reps, date: new Date().toISOString() });
  // Keep last 50 entries1
  if (history.length > 50) history.splice(0, history.length - 50);
  localStorage.setItem(`workout_log_${exId}`, JSON.stringify(history));
}

function suggestNextWeight(exId, targetReps) {
  const history = getHistory(exId);
  if (history.length === 0) return 0;
  const last = history[history.length - 1];
  const lastWeight = last.weight;
  const lastReps = last.reps;

  if (lastReps >= targetReps) {
    return lastWeight + 2.5;
  } else if (lastReps <= targetReps - 3) {
    return Math.max(0, lastWeight - 2.5);
  }
  return lastWeight;
}

// ===== PLATEAU DETECTION =====
function detectPlateau(exId) {
  const history = getHistory(exId);
  if (history.length < 3) return null;
  const last3 = history.slice(-3);
  const sameWeight = last3.every(h => h.weight === last3[0].weight);
  const sameReps = last3.every(h => h.reps === last3[0].reps);
  if (sameWeight && sameReps) return true;
  return false;
}

function getRandomAlternative(alternatives) {
  return alternatives[Math.floor(Math.random() * alternatives.length)];
}

// ===== RENDER EXERCISES =====
function renderExercises() {
  const dayData = WORKOUT_DATA.find(d => d.id === activeDay);
  if (!dayData) return;

  grid.innerHTML = '';

  dayData.exercises.forEach(ex => {
    const suggested = suggestNextWeight(ex.id, ex.targetReps);
    const plateau = detectPlateau(ex.id);
    const isDone = todayDone[ex.id] || false;
    const history = getHistory(ex.id);
    const lastEntry = history.length > 0 ? history[history.length - 1] : null;

    const card = document.createElement('div');
    card.className = `exercise-card${isDone ? ' done' : ''}`;
    card.dataset.exId = ex.id;

    let plateauHtml = '';
    if (plateau) {
      const alt = getRandomAlternative(ex.alternatives);
      plateauHtml = `<div class="plateau-alert"><strong>⚠️ Плато!</strong> Замени на: ${alt}</div>`;
    }

    let suggestionHtml = '';
    if (suggested > 0) {
      suggestionHtml = `<div class="suggestion-badge">🤖 Рекомендация: ${suggested} кг</div>`;
    }

    card.innerHTML = `
      <div class="card-image-wrapper">
        <img class="card-image" src="${ex.src}" alt="${ex.name}" loading="lazy">
        <div class="card-image-fallback hidden">${ex.emoji}</div>
      </div>
      <h3 class="card-title">${ex.name}</h3>
      <p class="card-sets">${ex.sets}</p>
      <div class="input-row">
        <div class="input-group">
          <label class="input-label">Вес (кг)</label>
          <input type="number" class="input-field input-weight" placeholder="0" min="0" step="0.5" value="${suggested > 0 ? suggested : ''}">
        </div>
        <div class="input-group">
          <label class="input-label">Повторения</label>
          <input type="number" class="input-field input-reps" placeholder="${ex.targetReps}" min="0" step="1" value="${lastEntry && !isDone ? '' : ''}">
        </div>
      </div>
      <div class="checkbox-wrapper">
        <input type="checkbox" class="custom-checkbox cb-done" id="cb-${ex.id}" ${isDone ? 'checked' : ''}>
        <label class="checkbox-label" for="cb-${ex.id}">Выполнено</label>
      </div>
      ${suggestionHtml}
      ${plateauHtml}
    `;

    // Image error handling
    const img = card.querySelector('.card-image');
    const fallback = card.querySelector('.card-image-fallback');
    img.addEventListener('error', () => {
      img.classList.add('hidden');
      fallback.classList.remove('hidden');
    });

    // Checkbox event
    const checkbox = card.querySelector('.cb-done');
    checkbox.addEventListener('change', () => {
      handleDone(ex, card, checkbox);
    });

    grid.appendChild(card);
  });

  updateProgress();
}

// ===== HANDLE DONE =====
function handleDone(ex, card, checkbox) {
  const weightInput = card.querySelector('.input-weight');
  const repsInput = card.querySelector('.input-reps');

  if (checkbox.checked) {
    const weight = parseFloat(weightInput.value) || 0;
    const reps = parseInt(repsInput.value) || 0;

    if (weight > 0 && reps > 0) {
      saveToHistory(ex.id, weight, reps);
    }

    todayDone[ex.id] = true;
    card.classList.add('done');
  } else {
    todayDone[ex.id] = false;
    card.classList.remove('done');
  }

  localStorage.setItem('todayDone', JSON.stringify(todayDone));
  updateProgress();
}

// ===== PROGRESS =====
function updateProgress() {
  const dayData = WORKOUT_DATA.find(d => d.id === activeDay);
  if (!dayData) return;
  const total = dayData.exercises.length;
  const done = dayData.exercises.filter(ex => todayDone[ex.id]).length;
  const pct = total > 0 ? (done / total) * 100 : 0;
  progressFill.style.width = `${pct}%`;
  progressText.textContent = `${done} / ${total}`;
}

// ===== DAY TABS =====
function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    if (tab.dataset.day === activeDay) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }

    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeDay = tab.dataset.day;
      localStorage.setItem('activeDay', activeDay);
      renderExercises();
    });
  });
}

// ===== CSV EXPORT =====
function exportCSV() {
  let csv = 'Дата,Упражнение,Вес (кг),Повторения\n';
  let hasData = false;

  WORKOUT_DATA.forEach(day => {
    day.exercises.forEach(ex => {
      const history = getHistory(ex.id);
      history.forEach(entry => {
        hasData = true;
        const date = new Date(entry.date).toLocaleDateString('ru-RU');
        csv += `${date},"${ex.name}",${entry.weight},${entry.reps}\n`;
      });
    });
  });

  if (!hasData) {
    alert('Нет данных для экспорта. Выполните хотя бы одно упражнение.');
    return;
  }

  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `workout_history_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// ===== RESET DAY =====
function resetDay() {
  const dayData = WORKOUT_DATA.find(d => d.id === activeDay);
  if (!dayData) return;

  if (!confirm('Сбросить все отметки "Выполнено" для текущего дня?')) return;

  dayData.exercises.forEach(ex => {
    delete todayDone[ex.id];
  });
  localStorage.setItem('todayDone', JSON.stringify(todayDone));
  renderExercises();
}

// ===== HISTORY MODAL =====
function showHistory() {
  let html = '';
  let hasData = false;

  WORKOUT_DATA.forEach(day => {
    day.exercises.forEach(ex => {
      const history = getHistory(ex.id);
      if (history.length > 0) {
        hasData = true;
        // Show last 5 entries per exercise
        const recent = history.slice(-5).reverse();
        recent.forEach(entry => {
          const date = new Date(entry.date).toLocaleDateString('ru-RU', {
            day: 'numeric', month: 'short', year: 'numeric'
          });
          html += `<div class="history-item">
            <div class="history-date">${date}</div>
            <div>${ex.name} — ${entry.weight} кг × ${entry.reps} повт.</div>
          </div>`;
        });
      }
    });
  });

  if (!hasData) {
    html = '<div class="history-empty">📭 История пуста. Начните тренировку!</div>';
  }

  modalBody.innerHTML = html;
  modalOverlay.classList.add('active');
}

function closeModal() {
  modalOverlay.classList.remove('active');
}

// ===== EVENT LISTENERS =====
btnTheme.addEventListener('click', toggleTheme);
btnCsv.addEventListener('click', exportCSV);
btnReset.addEventListener('click', resetDay);
btnHistory.addEventListener('click', showHistory);
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

// Close modal on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ===== INIT =====
initTheme();
initTabs();
renderExercises();