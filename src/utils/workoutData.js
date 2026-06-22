import { loadHistory } from './storage';

export const EXERCISE_DATABASE = {
  'Ноги': [
    { name: 'Присідання зі штангою', icon: 'Dumbbell', image: 'images/Legs-and-Shoulders/Barbell_squats.jpg' },
    { name: 'Жим ногами', icon: 'Dumbbell', image: 'images/Legs-and-Shoulders/Leg_press_on_the_machine.jpg' },
    { name: 'Розгинання ніг сидячи', icon: 'Cable', image: 'images/Legs-and-Shoulders/Seated_leg_extensions.jpg' },
    { name: 'Згинання ніг лежачи', icon: 'Cable', image: 'images/Legs-and-Shoulders/Lying_leg_curls.jpg' },
    { name: 'Випади з гантелями', icon: 'Dumbbell', image: 'images/Legs-and-Shoulders/Lunges.jpg' }, // Якщо файлу ще немає, додай його з такою назвою
    { name: 'Румунська тяга', icon: 'Dumbbell', image: 'images/Legs-and-Shoulders/Romanian_deadlift.jpg' }
  ],
  'Плечі': [
    { name: 'Армійський жим стоячи', icon: 'Dumbbell', image: 'images/Legs-and-Shoulders/Standing_military_press.jpg' },
    { name: 'Жим гантелей сидячи', icon: 'Dumbbell', image: 'images/Legs-and-Shoulders/Seated_dumbbell_press.jpg' },
    { name: 'Махи гантелями в сторони', icon: 'Dumbbell', image: 'images/Legs-and-Shoulders/Dumbbell_Lateral_Raises.jpg' },
    { name: 'Тяга штанги до підборіддя', icon: 'Dumbbell', image: 'images/Legs-and-Shoulders/Barbell_chin-ups.jpg' },
    { name: 'Махи в нахилі (задня дельта)', icon: 'Dumbbell', image: 'images/Legs-and-Shoulders/Reverse_flyes.jpg' },
    { name: 'Жим в тренажері Сміта', icon: 'Dumbbell', image: 'images/Legs-and-Shoulders/Smith_machine_press.jpg' }
  ],
  'Груди': [
    { name: 'Жим штанги лежачи', icon: 'Dumbbell', image: 'images/Chest-and-Biceps/Bench_press.jpg' },
    { name: 'Жим гантелей на похилій лаві', icon: 'Dumbbell', image: 'images/Chest-and-Biceps/Incline_Dumbbell_Press.jpg' },
    { name: 'Розведення гантелей лежачи', icon: 'Dumbbell', image: 'images/Chest-and-Biceps/Lying_dumbbell_flyes.jpg' },
    { name: 'Зведення рук у кросовері', icon: 'Cable', image: 'images/Chest-and-Biceps/Crossover_arm_reduction.jpg' },
    { name: 'Віджимання на брусах', icon: 'Dumbbell', image: 'images/Chest-and-Biceps/Dips.jpg' },
    { name: 'Жим у тренажері (Хаммер)', icon: 'Cable', image: 'images/Chest-and-Biceps/Hammer_press.jpg' }
  ],
  'Біцепс': [
    { name: 'Підйом штанги на біцепс', icon: 'Dumbbell', image: 'images/Chest-and-Biceps/Barbell_bicep-curl.jpg' },
    { name: 'Підйом гантелей із супінацією', icon: 'Dumbbell', image: 'images/Chest-and-Biceps/Dumbbell-Supination_Curls.jpg' },
    { name: 'Лава Скотта (EZ-штанга)', icon: 'Dumbbell', image: 'images/Chest-and-Biceps/Scott_Bench_(EZ-bar).jpg' },
    { name: '«Молотки» з гантелями', icon: 'Dumbbell', image: 'images/Chest-and-Biceps/Dumbbell_hammer_curls.jpg' },
    { name: 'Згинання рук у нижньому блоці', icon: 'Cable', image: 'images/Chest-and-Biceps/Cable_curl.jpg' }
  ],
  'Спина': [
    { name: 'Підтягування широким хватом', icon: 'Dumbbell', image: 'images/Back-and-Triceps/Wide-grip_pull-ups.jpg' },
    { name: 'Тяга штанги в нахилі', icon: 'Dumbbell', image: 'images/Back-and-Triceps/Bent-over_barbell_row.jpg' },
    { name: 'Тяга нижнього блоку до пояса', icon: 'Cable', image: 'images/Back-and-Triceps/Low_block_pulldown_to_the_waist.jpg' },
    { name: 'Тяга гантелі однією рукою', icon: 'Dumbbell', image: 'images/Back-and-Triceps/One-arm dumbbell_row.jpg' },
    { name: 'Тяга верхнього блоку', icon: 'Cable', image: 'images/Back-and-Triceps/Lat_pulldown.jpg' },
    { name: 'Пуловер у кросовері', icon: 'Cable', image: 'images/Back-and-Triceps/Cable_pullover.jpg' }
  ],
  'Трицепс': [
    { name: 'Жим вузьким хватом лежачи', icon: 'Dumbbell', image: 'images/Back-and-Triceps/Close-grip_bench_press.jpg' },
    { name: 'Французький жим EZ-штангою', icon: 'Dumbbell', image: 'images/Back-and-Triceps/EZ-Bar_French_Press.jpg' },
    { name: 'Розгинання на блоці з канатом', icon: 'Cable', image: 'images/Back-and-Triceps/Cable_Pushdowns.jpg' },
    { name: 'Розгинання гантелі з-за голови', icon: 'Dumbbell', image: 'images/Back-and-Triceps/Overhead_Dumbbell_Extension.jpg' },
    { name: 'Віджимання від лави ззаду', icon: 'Dumbbell', image: 'images/Back-and-Triceps/Bench_dips.jpg' }
  ]
};

// Хелпер: шукає до якої групи м'язів належить вправа
export const getMuscleGroupByExercise = (exerciseName) => {
  for (const [group, exercises] of Object.entries(EXERCISE_DATABASE)) {
    if (exercises.some(ex => ex.name === exerciseName)) {
      return group;
    }
  }
  return null; // Якщо вправу не знайдено в базі
};

// --- ОСНОВНІ ШАБЛОНИ ---
export const MUSCLE_GROUPS = {
  day1: {
    name: 'День 1: Ноги та плечі',
    exercises: [
      { name: 'Присідання зі штангою', icon: 'Dumbbell', sets: 4, reps: '10–12', image: 'images/Legs-and-Shoulders/Barbell_squats.jpg' },
      { name: 'Армійський жим стоячи', icon: 'Dumbbell', sets: 4, reps: '8–12', image: 'images/Legs-and-Shoulders/Standing_military_press.jpg' },
      { name: 'Жим ногами', icon: 'Dumbbell', sets: 4, reps: '10–15', image: 'images/Legs-and-Shoulders/Leg_press_on_the_machine.jpg' },
      { name: 'Жим гантелей сидячи', icon: 'Dumbbell', sets: 3, reps: '10–12', image: 'images/Legs-and-Shoulders/Seated_dumbbell_press.jpg' },
      { name: 'Розгинання ніг сидячи', icon: 'Cable', sets: 3, reps: '12–15', image: 'images/Legs-and-Shoulders/Seated_leg_extensions.jpg' },
      { name: 'Махи гантелями в сторони', icon: 'Dumbbell', sets: 4, reps: '12–15', image: 'images/Legs-and-Shoulders/Dumbbell_Lateral_Raises.jpg' },
      { name: 'Згинання ніг лежачи', icon: 'Cable', sets: 3, reps: '12–15', image: 'images/Legs-and-Shoulders/Lying_leg_curls.jpg' },
      { name: 'Тяга штанги до підборіддя', icon: 'Dumbbell', sets: 3, reps: '10–12', image: 'images/Legs-and-Shoulders/Barbell_chin-ups.jpg' }
    ],
  },
  day2: {
    name: 'День 2: Груди та біцепс',
    exercises: [
      { name: 'Жим штанги лежачи', icon: 'Dumbbell', sets: 4, reps: '8–12', image: 'images/Chest-and-Biceps/Bench_press.jpg' },
      { name: 'Підйом штанги на біцепс', icon: 'Dumbbell', sets: 4, reps: '10–12', image: 'images/Chest-and-Biceps/Barbell_bicep-curl.jpg' },
      { name: 'Жим гантелей на похилій лаві', icon: 'Dumbbell', sets: 4, reps: '10–12', image: 'images/Chest-and-Biceps/Incline_Dumbbell_Press.jpg' },
      { name: 'Підйом гантелей із супінацією', icon: 'Dumbbell', sets: 3, reps: '10–12', image: 'images/Chest-and-Biceps/Dumbbell-Supination_Curls.jpg' },
      { name: 'Розведення гантелей лежачи', icon: 'Dumbbell', sets: 3, reps: '12–15', image: 'images/Chest-and-Biceps/Lying_dumbbell_flyes.jpg' },
      { name: 'Лава Скотта (EZ-штанга)', icon: 'Dumbbell', sets: 3, reps: '10–12', image: 'images/Chest-and-Biceps/Scott_Bench_(EZ-bar).jpg' },
      { name: 'Зведення рук у кросовері', icon: 'Cable', sets: 3, reps: '12–15', image: 'images/Chest-and-Biceps/Crossover_arm_reduction.jpg' },
      { name: '«Молотки» з гантелями', icon: 'Dumbbell', sets: 3, reps: '10–12', image: 'images/Chest-and-Biceps/Dumbbell_hammer_curls.jpg' }
    ],
  },
  day3: {
    name: 'День 3: Спина та трицепс',
    exercises: [
      { name: 'Підтягування широким хватом', icon: 'Dumbbell', sets: 4, reps: '8–12', image: 'images/Back-and-Triceps/Wide-grip_pull-ups.jpg' },
      { name: 'Жим вузьким хватом лежачи', icon: 'Dumbbell', sets: 4, reps: '8–12', image: 'images/Back-and-Triceps/Close-grip_bench_press.jpg' },
      { name: 'Тяга штанги в нахилі', icon: 'Dumbbell', sets: 4, reps: '8–12', image: 'images/Back-and-Triceps/Bent-over_barbell_row.jpg' },
      { name: 'Французький жим EZ-штангою', icon: 'Dumbbell', sets: 3, reps: '10–12', image: 'images/Back-and-Triceps/EZ-Bar_French_Press.jpg' },
      { name: 'Тяга нижнього блоку до пояса', icon: 'Cable', sets: 3, reps: '10–12', image: 'images/Back-and-Triceps/Low_block_pulldown_to_the_waist.jpg' },
      { name: 'Розгинання на блоці з канатом', icon: 'Cable', sets: 3, reps: '12–15', image: 'images/Back-and-Triceps/Cable_Pushdowns.jpg' },
      { name: 'Тяга гантелі однією рукою', icon: 'Dumbbell', sets: 3, reps: '10–12', image: 'images/Back-and-Triceps/One-arm dumbbell_row.jpg' },
      { name: 'Розгинання гантелі з-за голови', icon: 'Dumbbell', sets: 3, reps: '10–12', image: 'images/Back-and-Triceps/Overhead_Dumbbell_Extension.jpg' }
    ],
  },
};

export function generateWorkout(groupKey, readinessLevel) {
  const group = MUSCLE_GROUPS[groupKey];
  if (!group) return [];

  const history = loadHistory();

  return group.exercises.map((ex) => {
    let adjustedSets = ex.sets;

    if (readinessLevel <= 2) {
      adjustedSets = Math.max(2, Math.round(ex.sets * 0.8));
    } else if (readinessLevel >= 4) {
      adjustedSets = ex.sets + 1;
    }

    // Ищем прошлый результат для этого упражнения в истории
    let lastWeight = '';
    let lastReps = '';
    let suggestedWeight = '';

    for (let entry of history) {
      if (entry.exercises) {
        const found = entry.exercises.find(e => e.name === ex.name);
        if (found) {
          lastWeight = found.weight;
          lastReps = found.reps;
          break; // Нашли самую свежую запись, останавливаем поиск
        }
      }
    }

    // Если в прошлый раз делали это упражнение, определяем новый вес
    if (lastWeight) {
      if (readinessLevel >= 4) {
        // Самочувствие топ — накидываем 2.5 кг к прошлому весу
        suggestedWeight = String(Number(lastWeight) + 2.5);
      } else {
        // Иначе просто подставляем прошлый рабочий вес
        suggestedWeight = lastWeight;
      }
    }

    return {
      id: crypto.randomUUID(),
      name: ex.name,
      icon: ex.icon,
      image: ex.image,
      targetSets: adjustedSets,
      targetReps: ex.reps,
      lastWeight: lastWeight,
      lastReps: lastReps,
      suggestedWeight: suggestedWeight,
      completedSets: 0,
      weight: '',
      reps: '',
      done: false,
    };
  });
}

export function getReadinessAdvice(level) {
  if (level <= 2) {
    return 'Об\'єм знижено на 20%. Бережіть ЦНС, працюйте технічно.';
  } else if (level === 3) {
    return 'Стандартне навантаження. Працюйте в робочому режимі.';
  } else {
    return 'Можна йти на рекорди! Додано додатковий підхід.';
  }
}