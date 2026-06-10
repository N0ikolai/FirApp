const WORKOUT_DATA = [
  {
    id: "day1", title: "Ноги и Плечи", label: "День 1",
    exercises: [
      { id: "squat", name: "Приседания со штангой", sets: "4 × 10–12", targetReps: 12, src: "images/Legs-and-Shoulders/Barbell_squats.jpg", emoji: "🏋️", alternatives: ["Фронтальные приседания", "Приседания в Смите"] },
      { id: "legpress", name: "Жим ногами", sets: "4 × 10–15", targetReps: 15, src: "images/Legs-and-Shoulders/Leg_press_on_the_machine.jpg", emoji: "🦵", alternatives: ["Выпады с гантелями"] },
      { id: "legext", name: "Разгибания ног сидя", sets: "3 × 12–15", targetReps: 15, src: "images/Legs-and-Shoulders/Seated_leg_extensions.jpg", emoji: "🦵", alternatives: ["Сисси-приседания"] },
      { id: "legcurl", name: "Сгибания ног лёжа", sets: "3 × 12–15", targetReps: 15, src: "images/Legs-and-Shoulders/Lying_leg_curls.jpg", emoji: "🦵", alternatives: ["Мертвая тяга с гантелями"] },
      { id: "ohpress", name: "Армейский жим стоя", sets: "4 × 8–12", targetReps: 12, src: "images/Legs-and-Shoulders/Standing_military_press.jpg", emoji: "🏋️", alternatives: ["Жим гантелей стоя"] },
      { id: "dbpress", name: "Жим гантелей сидя", sets: "3 × 10–12", targetReps: 12, src: "images/Legs-and-Shoulders/Seated_dumbbell_press.jpg", emoji: "💪", alternatives: ["Жим Арнольда"] },
      { id: "lateral", name: "Махи гантелями в стороны", sets: "4 × 12–15", targetReps: 15, src: "images/Legs-and-Shoulders/Dumbbell_Lateral_Raises.jpg", emoji: "💪", alternatives: ["Тяга нижнего блока в сторону"] },
      { id: "uprightrow", name: "Тяга штанги к подбородку", sets: "3 × 10–12", targetReps: 12, src: "images/Legs-and-Shoulders/Barbell_chin-ups.jpg", emoji: "💪", alternatives: ["Махи перед собой"] }
    ]
  },
  {
    id: "day2", title: "Грудь и Бицепс", label: "День 2",
    exercises: [
      { id: "benchpress", name: "Жим штанги лёжа", sets: "4 × 8–12", targetReps: 12, src: "images/Chest-and-Biceps/Bench_press.jpg", emoji: "🏋️", alternatives: ["Жим гантелей лёжа", "Отжимания на брусьях"] },
      { id: "inclinedb", name: "Жим гантелей на наклонной", sets: "4 × 10–12", targetReps: 12, src: "images/Chest-and-Biceps/Incline_Dumbbell_Press.jpg", emoji: "💪", alternatives: ["Жим штанги на наклонной"] },
      { id: "dbfly", name: "Разведение гантелей лёжа", sets: "3 × 12–15", targetReps: 15, src: "images/Chest-and-Biceps/Lying_dumbbell_flyes.jpg", emoji: "💪", alternatives: ["Сведение рук в тренажере Бабочка"] },
      { id: "crossover", name: "Сведение рук в кроссовере", sets: "3 × 12–15", targetReps: 15, src: "images/Chest-and-Biceps/Crossover_arm_reduction.jpg", emoji: "🔗", alternatives: ["Пуловер с гантелью"] },
      { id: "bbcurl", name: "Подъём штанги на бицепс", sets: "4 × 10–12", targetReps: 12, src: "images/Chest-and-Biceps/Barbell_bicep-curl.jpg", emoji: "💪", alternatives: ["Подъем EZ-штанги"] },
      { id: "dbcurl", name: "Подъём гантелей с супинацией", sets: "3 × 10–12", targetReps: 12, src: "images/Chest-and-Biceps/Dumbbell-Supination_Curls.jpg", emoji: "💪", alternatives: ["Попеременный подъем гантелей"] },
      { id: "preacher", name: "Скамья Скотта (EZ-штанга)", sets: "3 × 10–12", targetReps: 12, src: "images/Chest-and-Biceps/Scott_Bench_(EZ-bar).jpg", emoji: "💪", alternatives: ["Сгибания на нижнем блоке"] },
      { id: "hammer", name: "«Молотки» с гантелями", sets: "3 × 10–12", targetReps: 12, src: "images/Chest-and-Biceps/Dumbbell_hammer_curls.jpg", emoji: "🔨", alternatives: ["Сгибания с канатом на блоке"] }
    ]
  },
  {
    id: "day3", title: "Спина и Трицепс", label: "День 3",
    exercises: [
      { id: "pullup", name: "Подтягивания широким хватом", sets: "4 × 8–12", targetReps: 12, src: "images/Back-and-Triceps/Wide-grip_pull-ups.jpg", emoji: "🏃", alternatives: ["Тяга верхнего блока широким хватом"] },
      { id: "bbrow", name: "Тяга штанги в наклоне", sets: "4 × 8–12", targetReps: 12, src: "images/Back-and-Triceps/Bent-over_barbell_row.jpg", emoji: "🏋️", alternatives: ["Тяга Т-грифа"] },
      { id: "cablerow", name: "Тяга нижнего блока к поясу", sets: "3 × 10–12", targetReps: 12, src: "images/Back-and-Triceps/Low_block_pulldown_to_the_waist.jpg", emoji: "🔗", alternatives: ["Тяга гантелей лежа на животе"] },
      { id: "dbrow", name: "Тяга гантели одной рукой", sets: "3 × 10–12", targetReps: 12, src: "images/Back-and-Triceps/One-arm dumbbell_row.jpg", emoji: "💪", alternatives: ["Тяга в рычажном тренажере"] },
      { id: "cgbench", name: "Жим узким хватом лёжа", sets: "4 × 8–12", targetReps: 12, src: "images/Back-and-Triceps/Close-grip_bench_press.jpg", emoji: "🏋️", alternatives: ["Отжимания от скамьи за спиной"] },
      { id: "skullcrush", name: "Французский жим EZ-штангой", sets: "3 × 10–12", targetReps: 12, src: "images/Back-and-Triceps/EZ-Bar_French_Press.jpg", emoji: "💀", alternatives: ["Французский жим с гантелями"] },
      { id: "pushdown", name: "Разгибания на блоке с канатом", sets: "3 × 12–15", targetReps: 15, src: "images/Back-and-Triceps/Cable_Pushdowns.jpg", emoji: "🔗", alternatives: ["Разгибания с прямой рукоятью"] },
      { id: "ohext", name: "Разгибание гантели из-за головы", sets: "3 × 10–12", targetReps: 12, src: "images/Back-and-Triceps/Overhead_Dumbbell_Extension.jpg", emoji: "💪", alternatives: ["Разгибание из-за головы в кроссовере"] }
    ]
  }
];

// ===== STATE =====
let activeDay = localStorage.getItem('activeDay') || 'day1';
let todayDone = JSON.parse(localStorage.getItem('todayDone') || '{}');
let sessionRpe = {}; // Temporary RPE values for current session

// ===== DOM ELEMENTS =====
const grid = document.getElementById('exercises-grid');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const btnTheme = document.getElementById('btn-theme');
const themeIcon = document.getElementById('theme-icon');
const btnCsv = document.getElementById('btn-csv');
const btnReset = document.getElementById('btn-reset');
const btnHistory = document.getElementById('btn-history');
const btnTonnage = document.getElementById('btn-tonnage');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');
const modalTitle = document.getElementById('modal-title');
const readinessOverlay = document.getElementById('readiness-overlay');
const readinessSubmit = document.getElementById('readiness-submit');
const deloadBanner = document.getElementById('deload-banner');
const readinessBadge = document.getElementById('readiness-badge');
const readinessTextEl = document.getElementById('readiness-text');

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

// ===== DELOAD SYSTEM =====
function getTrainingWeeks() {
  return parseInt(localStorage.getItem('training_weeks') || '0', 10);
}

function setTrainingWeeks(count) {
  localStorage.setItem('training_weeks', String(count));
}

function getLastTrainingWeek() {
  return localStorage.getItem('last_training_week') || '';
}

function getCurrentWeekId() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const weekNum = Math.ceil(((now - startOfYear) / 86400000 + startOfYear.getDay() + 1) / 7);
  return `${now.getFullYear()}-W${weekNum}`;
}

function isDeloadWeek() {
  return getTrainingWeeks() >= 3;
}

function checkAndUpdateWeek() {
  const currentWeek = getCurrentWeekId();
  const lastWeek = getLastTrainingWeek();

  if (currentWeek !== lastWeek) {
    localStorage.setItem('last_training_week', currentWeek);
    const weeks = getTrainingWeeks();
    if (weeks >= 3) {
      // Deload week just finished, reset counter
      setTrainingWeeks(0);
    } else {
      setTrainingWeeks(weeks + 1);
    }
  }
}

function getDeloadMultiplier() {
  return isDeloadWeek() ? 0.8 : 1.0;
}

function updateDeloadBanner() {
  if (isDeloadWeek()) {
    deloadBanner.style.display = 'flex';
  } else {
    deloadBanner.style.display = 'none';
  }
}

// ===== READINESS CHECK =====
function getTodayDateStr() {
  return new Date().toISOString().slice(0, 10);
}

function getReadiness() {
  const raw = localStorage.getItem('readiness_data');
  return raw ? JSON.parse(raw) : null;
}

function getTodayReadiness() {
  const data = getReadiness();
  if (data && data.date === getTodayDateStr()) {
    return data;
  }
  return null;
}

function saveReadiness(sleep, stress) {
  const data = { sleep, stress, date: getTodayDateStr() };
  localStorage.setItem('readiness_data', JSON.stringify(data));
  return data;
}

function isReadinessPoor(readiness) {
  if (!readiness) return false;
  return readiness.sleep <= 2 || readiness.stress >= 4;
}

function getReadinessMultiplier() {
  const r = getTodayReadiness();
  return isReadinessPoor(r) ? 0.85 : 1.0;
}

function updateReadinessBadge() {
  const r = getTodayReadiness();
  if (!r) {
    readinessBadge.style.display = 'none';
    return;
  }
  readinessBadge.style.display = 'flex';
  const poor = isReadinessPoor(r);
  readinessBadge.classList.toggle('poor', poor);
  readinessBadge.classList.toggle('good', !poor);
  if (poor) {
    readinessTextEl.textContent = `Готовность: низкая (сон: ${r.sleep}/5, стресс: ${r.stress}/5) — веса -15%`;
  } else {
    readinessTextEl.textContent = `Готовность: хорошая (сон: ${r.sleep}/5, стресс: ${r.stress}/5)`;
  }
}

function showReadinessCheck() {
  const today = getTodayReadiness();
  if (today) {
    // Already checked today
    updateReadinessBadge();
    return;
  }
  readinessOverlay.classList.add('active');
}

function initReadinessModal() {
  let selectedSleep = 0;
  let selectedStress = 0;

  const sleepBtns = document.querySelectorAll('#sleep-buttons .readiness-btn');
  const stressBtns = document.querySelectorAll('#stress-buttons .readiness-btn');

  sleepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sleepBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedSleep = parseInt(btn.dataset.value, 10);
      readinessSubmit.disabled = !(selectedSleep > 0 && selectedStress > 0);
    });
  });

  stressBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      stressBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedStress = parseInt(btn.dataset.value, 10);
      readinessSubmit.disabled = !(selectedSleep > 0 && selectedStress > 0);
    });
  });

  readinessSubmit.addEventListener('click', () => {
    if (selectedSleep > 0 && selectedStress > 0) {
      saveReadiness(selectedSleep, selectedStress);
      readinessOverlay.classList.remove('active');
      updateReadinessBadge();
      renderExercises();
    }
  });
}

// ===== ADAPTIVE WEIGHT ALGORITHM =====
function getHistory(exId) {
  const raw = localStorage.getItem(`workout_log_${exId}`);
  return raw ? JSON.parse(raw) : [];
}

function saveToHistory(exId, weight, reps, rpe) {
  const history = getHistory(exId);
  history.push({ weight, reps, rpe, date: new Date().toISOString() });
  // Keep last 50 entries
  if (history.length > 50) history.splice(0, history.length - 50);
  localStorage.setItem(`workout_log_${exId}`, JSON.stringify(history));
}

function suggestNextWeight(exId, targetReps) {
  const history = getHistory(exId);
  if (history.length === 0) return 0;
  const last = history[history.length - 1];
  const lastWeight = last.weight;
  const lastReps = last.reps;
  const lastRpe = last.rpe || 0;

  let suggested = lastWeight;

  // RPE-based logic: if RPE >= 9, don't increase even if target reps hit
  if (lastRpe >= 10) {
    // Complete failure - suggest same or slightly less
    suggested = lastWeight;
  } else if (lastRpe >= 9) {
    // Very hard - don't increase
    suggested = lastWeight;
  } else if (lastReps >= targetReps) {
    suggested = lastWeight + 2.5;
  } else if (lastReps <= targetReps - 3) {
    suggested = Math.max(0, lastWeight - 2.5);
  }

  // Apply deload multiplier
  suggested = Math.round((suggested * getDeloadMultiplier()) * 2) / 2;

  // Apply readiness multiplier
  suggested = Math.round((suggested * getReadinessMultiplier()) * 2) / 2;

  return suggested;
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

// ===== TONNAGE CALCULATION =====
function getWeekStart(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  d.setHours(0, 0, 0, 0);
  return d.toISOString().slice(0, 10);
}

function calculateWeeklyTonnage() {
  const tonnageByMuscle = {};
  const weeklyData = {};

  Object.entries(MUSCLE_GROUPS).forEach(([muscle, info]) => {
    tonnageByMuscle[muscle] = { label: info.label, weeks: {} };

    info.ids.forEach(exId => {
      const history = getHistory(exId);
      const exData = findExercise(exId);
      const setsNum = exData ? exData.setsNum : 3;

      history.forEach(entry => {
        const weekStart = getWeekStart(entry.date);
        if (!tonnageByMuscle[muscle].weeks[weekStart]) {
          tonnageByMuscle[muscle].weeks[weekStart] = 0;
        }
        // Tonnage = weight × reps × sets (assuming 1 log = 1 completed set worth of data)
        tonnageByMuscle[muscle].weeks[weekStart] += entry.weight * entry.reps * setsNum;
      });
    });

    // Get sorted weeks
    const sortedWeeks = Object.keys(tonnageByMuscle[muscle].weeks).sort();
    tonnageByMuscle[muscle].sortedWeeks = sortedWeeks;
    tonnageByMuscle[muscle].values = sortedWeeks.map(w => tonnageByMuscle[muscle].weeks[w]);
  });

  return tonnageByMuscle;
}

function findExercise(exId) {
  for (const day of WORKOUT_DATA) {
    const found = day.exercises.find(e => e.id === exId);
    if (found) return found;
  }
  return null;
}

function detectTonnageStagnation(values) {
  // Stagnation = last 4 weeks have less than 5% variation
  if (values.length < 4) return false;
  const last4 = values.slice(-4);
  const avg = last4.reduce((a, b) => a + b, 0) / 4;
  if (avg === 0) return false;
  const maxDev = Math.max(...last4.map(v => Math.abs(v - avg)));
  return (maxDev / avg) < 0.05;
}

function showTonnageModal() {
  const tonnage = calculateWeeklyTonnage();
  let html = '';
  let maxTonnage = 0;

  // Find max for bar scaling
  Object.values(tonnage).forEach(muscle => {
    const vals = muscle.values;
    if (vals.length > 0) {
      maxTonnage = Math.max(maxTonnage, ...vals);
    }
  });

  if (maxTonnage === 0) {
    html = '<div class="history-empty">📭 Нет данных о тоннаже. Выполните тренировки!</div>';
  } else {
    const currentWeek = getWeekStart(new Date().toISOString());
    html += `<p class="tonnage-week-label">Текущая неделя: ${currentWeek}</p>`;

    Object.entries(tonnage).forEach(([muscle, data]) => {
      const lastValue = data.values.length > 0 ? data.values[data.values.length - 1] : 0;
      const stagnation = detectTonnageStagnation(data.values);
      const barWidth = maxTonnage > 0 ? (lastValue / maxTonnage) * 100 : 0;

      html += `<div class="tonnage-section">
        <div class="tonnage-muscle-title">${data.label}</div>
        <div class="tonnage-value">Последняя неделя: ${Math.round(lastValue).toLocaleString('ru-RU')} кг</div>
        <div class="tonnage-bar-wrapper">
          <div class="tonnage-bar-fill" style="width: ${barWidth}%"></div>
        </div>
        ${stagnation ? '<div class="tonnage-stagnation">⚠️ Тоннаж стагнирует 4+ недели. Попробуйте увеличить количество подходов или сменить упражнения.</div>' : ''}
      </div>`;
    });
  }

  modalTitle.textContent = '📈 Недельный тоннаж';
  modalBody.innerHTML = html;
  modalOverlay.classList.add('active');
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
    const currentRpe = sessionRpe[ex.id] || 0;

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
      let label = `🤖 Рекомендация: ${suggested} кг`;
      if (isDeloadWeek()) label += ' (разгрузка)';
      if (isReadinessPoor(getTodayReadiness())) label += ' (↓готовность)';
      suggestionHtml = `<div class="suggestion-badge">${label}</div>`;
    }

    // RPE buttons HTML
    let rpeHtml = '<div class="rpe-section"><div class="rpe-label">RPE (нагрузка)</div><div class="rpe-buttons">';
    for (let i = 1; i <= 10; i++) {
      const activeClass = currentRpe === i ? ' active' : '';
      const levelClass = i >= 10 ? ' rpe-max' : (i >= 8 ? ' rpe-high' : '');
      rpeHtml += `<button class="rpe-btn${activeClass}${levelClass}" data-rpe="${i}">${i}</button>`;
    }
    rpeHtml += '</div></div>';

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
          <input type="number" class="input-field input-reps" placeholder="${ex.targetReps}" min="0" step="1">
        </div>
      </div>
      ${rpeHtml}
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

    // RPE buttons event
    const rpeBtns = card.querySelectorAll('.rpe-btn');
    rpeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        rpeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        sessionRpe[ex.id] = parseInt(btn.dataset.rpe, 10);
      });
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
    const rpe = sessionRpe[ex.id] || 0;

    if (weight > 0 && reps > 0) {
      saveToHistory(ex.id, weight, reps, rpe);
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
  let csv = 'Дата,Упражнение,Вес (кг),Повторения,RPE\n';
  let hasData = false;

  WORKOUT_DATA.forEach(day => {
    day.exercises.forEach(ex => {
      const history = getHistory(ex.id);
      history.forEach(entry => {
        hasData = true;
        const date = new Date(entry.date).toLocaleDateString('ru-RU');
        const rpe = entry.rpe || '-';
        csv += `${date},"${ex.name}",${entry.weight},${entry.reps},${rpe}\n`;
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
    delete sessionRpe[ex.id];
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
          const rpeStr = entry.rpe ? `<span class="history-rpe">RPE: ${entry.rpe}</span>` : '';
          html += `<div class="history-item">
            <div class="history-date">${date}</div>
            <div>${ex.name} — ${entry.weight} кг × ${entry.reps} повт.${rpeStr}</div>
          </div>`;
        });
      }
    });
  });

  if (!hasData) {
    html = '<div class="history-empty">📭 История пуста. Начните тренировку!</div>';
  }

  modalTitle.textContent = '📊 История тренировок';
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
btnTonnage.addEventListener('click', showTonnageModal);
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

// Close modal on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    readinessOverlay.classList.remove('active');
  }
});

// ===== INIT =====
initTheme();
checkAndUpdateWeek();
updateDeloadBanner();
initReadinessModal();
initTabs();
renderExercises();
showReadinessCheck();