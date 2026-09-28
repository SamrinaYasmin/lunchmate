const meals = [
  {
    id: 'samosa-chaat', name: 'Samosa chaat bowls', emoji: '🥙', time: 20, kind: 'quick', vegetarian: true,
    ingredients: ['samosa', 'chickpea', 'yogurt', 'tomato', 'cucumber', 'onion'], favoriteWords: ['samosa', 'chaat'],
    description: 'Crispy samosa pieces over chickpeas, cool yogurt, and fresh crunchy vegetables.', health: 7,
    healthText: 'A fun treat made more balanced with chickpeas, yogurt, and fresh vegetables.',
    image: 'https://images.deliveryhero.io/image/fd-pk/LH/joom-hero.jpg?height=640&quality=80&width=900',
    recipeIngredients: ['2 samosas, baked or warmed', '1 cup cooked chickpeas', '½ cup plain yogurt', '1 tomato and ½ cucumber, chopped', 'A little chaat masala and lemon'],
    steps: ['Warm the samosas and chickpeas.', 'Spoon chickpeas into bowls and add chopped tomato and cucumber.', 'Add yogurt, break a samosa over each bowl, and finish with lemon and a little chaat masala.']
  },
  {
    id: 'egg-rice', name: 'Rainbow egg fried rice', emoji: '🍚', time: 15, kind: 'quick', vegetarian: true,
    ingredients: ['egg', 'rice', 'carrot', 'peas', 'corn'], favoriteWords: ['rice', 'egg'],
    description: 'A quick, colorful way to turn leftover rice and vegetables into a filling lunch.', health: 8,
    healthText: 'Egg adds protein, while peas and carrots add color and vegetables.',
    image: 'https://c.ndtvimg.com/2023-01/p2crovd8_indian-meal_625x300_01_January_23.jpg?im=FeatureCrop%2Calgorithm%3Ddnn%2Cwidth%3D1200%2Cheight%3D675',
    recipeIngredients: ['2 cups cooked rice', '2 eggs', '½ cup peas and diced carrot', '1 teaspoon oil', 'A splash of soy sauce or a pinch of salt'],
    steps: ['Scramble the eggs in a warm pan, then set them aside.', 'Cook carrot and peas in a little oil until tender.', 'Add rice and seasoning; stir until hot, then fold the eggs back in.']
  },
  {
    id: 'chicken-pulao', name: 'Gentle chicken & veggie pulao', emoji: '🍛', time: 35, kind: 'comfort', vegetarian: false,
    ingredients: ['chicken', 'rice', 'carrot', 'peas', 'onion'], favoriteWords: ['chicken', 'rice', 'pulao'],
    description: 'Fragrant one-pot rice with tender chicken, peas, and carrots. Keep the spice mild for little ones.', health: 8,
    healthText: 'Chicken provides protein; peas and carrots add vegetables. Pair with cucumber yogurt if you like.',
    image: 'https://images.deliveryhero.io/image/fd-pk/LH/joom-hero.jpg?height=640&quality=80&width=900',
    recipeIngredients: ['300 g boneless chicken, diced', '1½ cups basmati rice, rinsed', '1 small onion, sliced', '½ cup peas and carrots', '½ teaspoon cumin and 3 cups water or stock'],
    steps: ['Soften onion with cumin in a pot, then add chicken and cook until it changes color.', 'Stir in peas, carrots, rice, and water or stock.', 'Cover and simmer gently until the rice is tender and liquid is absorbed.']
  },
  {
    id: 'spinach-dal', name: 'Spinach & lentil daal', emoji: '🥣', time: 35, kind: 'comfort', vegetarian: true,
    ingredients: ['lentil', 'spinach', 'tomato', 'onion'], favoriteWords: ['daal', 'lentil', 'rice'],
    description: 'Soft, comforting lentils with spinach and tomato. Serve with rice or warm roti.', health: 9,
    healthText: 'Lentils bring protein and fiber, and spinach adds vegetables. A lovely everyday balance.',
    image: 'https://creativityreigns.com/wp-content/uploads/2013/09/MG_8692.jpg',
    recipeIngredients: ['1 cup red lentils, rinsed', '2 cups chopped spinach', '1 tomato, chopped', '½ onion, chopped', '½ teaspoon turmeric and 4 cups water'],
    steps: ['Simmer lentils, tomato, onion, turmeric, and water until soft.', 'Stir in spinach and cook for 4–5 more minutes.', 'Taste, adjust salt, and serve with rice or roti.']
  },
  {
    id: 'chicken-curry', name: 'Mild chicken & potato curry', emoji: '🍲', time: 35, kind: 'comfort', vegetarian: false,
    ingredients: ['chicken', 'potato', 'tomato', 'onion', 'spinach'], favoriteWords: ['chicken', 'potato', 'curry'],
    description: 'A cozy tomato curry with soft potatoes. Keep chili on the side so everyone can enjoy it.', health: 7,
    healthText: 'Chicken provides protein and potato adds energy. Add spinach or a cucumber side for extra vegetables.',
    image: 'https://www.kkcfood.com/cdn/shop/files/Gemini_Generated_Image_35ttcv35ttcv35tt.jpg?v=1756022811',
    recipeIngredients: ['300 g chicken pieces', '1 potato, cubed', '2 tomatoes, chopped', '½ onion, sliced', '½ teaspoon each cumin and coriander, mild salt to taste'],
    steps: ['Cook onion with cumin and coriander until soft.', 'Add chicken and stir for a few minutes, then add tomato and a splash of water.', 'Add potato, cover, and simmer until chicken and potato are cooked through.']
  },
  {
    id: 'veggie-paratha', name: 'Potato & pea paratha plate', emoji: '🫓', time: 30, kind: 'comfort', vegetarian: true,
    ingredients: ['potato', 'peas', 'flour', 'yogurt'], favoriteWords: ['paratha', 'potato'],
    description: 'Soft potato and pea filling tucked into warm flatbread, with cool yogurt on the side.', health: 7,
    healthText: 'Peas add vegetables and the yogurt adds protein. Serve with cucumber or fruit for a fuller plate.',
    image: 'https://images.deliveryhero.io/image/fd-pk/LH/joom-hero.jpg?height=640&quality=80&width=900',
    recipeIngredients: ['2 cooked potatoes, mashed', '½ cup peas, lightly mashed', '2 cups whole-wheat flour', '½ teaspoon cumin', 'Plain yogurt to serve'],
    steps: ['Mix potato, peas, cumin, and a pinch of salt for the filling.', 'Make a soft dough with flour and water, divide into balls, and fill each with potato mixture.', 'Roll gently and cook each paratha on a warm pan until golden on both sides.']
  },
  {
    id: 'veggie-noodles', name: 'Happy veggie noodles', emoji: '🍜', time: 20, kind: 'quick', vegetarian: true,
    ingredients: ['noodles', 'carrot', 'cabbage', 'pepper', 'egg'], favoriteWords: ['noodle', 'pasta'],
    description: 'Colorful noodles with crisp vegetables. Add an egg for a little extra protein.', health: 8,
    healthText: 'A generous mix of vegetables makes this a bright, balanced quick lunch.',
    image: 'https://c.ndtvimg.com/2023-01/p2crovd8_indian-meal_625x300_01_January_23.jpg?im=FeatureCrop%2Calgorithm%3Ddnn%2Cwidth%3D1200%2Cheight%3D675',
    recipeIngredients: ['2 portions noodles', '1 carrot, thinly sliced', '1 cup shredded cabbage', '½ bell pepper, sliced', '1 egg (optional) and a little oil'],
    steps: ['Cook noodles according to the pack and drain.', 'Stir-fry carrot, cabbage, and pepper until just tender.', 'Add noodles and a little mild seasoning; stir through a scrambled egg if using.']
  }
];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const ingredients = new Set();
const childDefaults = [{ name: 'Child 1', likes: 'samosa' }, { name: 'Child 2', likes: '' }];
let children = readStored('lunchmate-children', childDefaults);
let weeklyIds = readStored('lunchmate-week', ['samosa-chaat', 'egg-rice', 'chicken-pulao', 'spinach-dal', 'chicken-curry', 'veggie-paratha', 'veggie-noodles']);

function readStored(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}

function renderChildren() {
  const container = document.querySelector('#children');
  container.innerHTML = children.map((child, index) => `
    <label class="child" for="child-${index}">
      <span class="child-title"><span class="child-icon">${index === 0 ? '🧒' : '👧'}</span>${escapeText(child.name || `Child ${index + 1}`)}</span>
      <input id="child-${index}" type="text" data-child="${index}" value="${escapeAttr(child.likes)}" placeholder="What do they love? e.g. samosa, rice">
      <div class="tiny">We’ll use this to put familiar favorites near the top.</div>
    </label>`).join('') + (children.length < 4 ? '<button class="secondary" id="add-child" type="button">＋ Add another child</button>' : '');
  container.querySelectorAll('[data-child]').forEach(input => input.addEventListener('input', () => {
    children[Number(input.dataset.child)].likes = input.value;
    localStorage.setItem('lunchmate-children', JSON.stringify(children));
    document.querySelector('#suggestion-note').textContent = personalizedNote();
  }));
  document.querySelector('#add-child')?.addEventListener('click', () => {
    children.push({ name: `Child ${children.length + 1}`, likes: '' });
    localStorage.setItem('lunchmate-children', JSON.stringify(children));
    renderChildren();
  });
}

function escapeText(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]));
}
function escapeAttr(value) { return escapeText(value); }

function matchScore(meal) {
  const favorites = children.flatMap(child => (child.likes || '').toLowerCase().split(/[,\s]+/).filter(Boolean));
  const favoriteScore = favorites.reduce((score, favorite) => score + (meal.favoriteWords.some(word => word.includes(favorite) || favorite.includes(word)) || meal.name.toLowerCase().includes(favorite) ? 3 : 0), 0);
  const ingredientScore = [...ingredients].reduce((score, item) => score + (meal.ingredients.some(word => word.includes(item) || item.includes(word)) ? 2 : 0), 0);
  return favoriteScore + ingredientScore;
}

function mealCard(meal) {
  const score = matchScore(meal);
  const match = score > 0 ? 'A family match' : meal.vegetarian ? 'Veg friendly' : 'Family idea';
  return `<article class="dish">
    <img class="dish-photo" src="${meal.image}" alt="${escapeAttr(meal.name)}" loading="lazy" onerror="this.style.display='none'">
    <div class="dish-body"><div class="dish-title-row"><h3>${meal.emoji} ${meal.name}</h3><span class="health">${meal.health}/10 balance</span></div>
      <div class="dish-meta">⏱ ${meal.time} min · ${match}</div><p>${meal.description}</p>
      <div class="dish-actions"><button class="secondary recipe-button" data-meal="${meal.id}">View full recipe</button></div>
    </div></article>`;
}

function personalizedNote() {
  const likes = children.map(child => child.likes).filter(Boolean);
  return likes.length ? `Looking for family favorites like ${likes.join(' and ')}.` : 'Add a favorite or ingredient to personalize ideas.';
}

function renderSuggestions() {
  const style = document.querySelector('#meal-style').value;
  const maxTime = document.querySelector('#time').value;
  const list = meals.filter(meal => {
    if (style === 'quick' && meal.time > 20) return false;
    if (style === 'comfort' && meal.kind !== 'comfort') return false;
    if (style === 'vegetarian' && !meal.vegetarian) return false;
    if (maxTime !== 'any' && meal.time > Number(maxTime)) return false;
    return true;
  }).sort((a, b) => matchScore(b) - matchScore(a) || a.time - b.time).slice(0, 4);
  document.querySelector('#suggestion-note').textContent = personalizedNote();
  document.querySelector('#suggestions').innerHTML = list.map(mealCard).join('');
  bindMealButtons();
}

function renderWeek() {
  document.querySelector('#week-grid').innerHTML = days.map((day, index) => {
    const meal = meals.find(item => item.id === weeklyIds[index]) || meals[index % meals.length];
    return `<article class="day"><div class="day-name">${day}</div><div class="day-content">
      <img class="day-photo" src="${meal.image}" alt="${escapeAttr(meal.name)}" loading="lazy" onerror="this.style.display='none'">
      <h3>${meal.emoji} ${meal.name}</h3><div class="day-meta">${meal.time} min · ${meal.health}/10 balance</div>
      <select class="change" aria-label="Change ${day} lunch" data-day="${index}">${meals.map(option => `<option value="${option.id}" ${option.id === meal.id ? 'selected' : ''}>Change: ${option.name}</option>`).join('')}</select>
    </div></article>`;
  }).join('');
  document.querySelectorAll('.change').forEach(select => select.addEventListener('change', () => {
    const index = Number(select.dataset.day);
    weeklyIds[index] = select.value;
    localStorage.setItem('lunchmate-week', JSON.stringify(weeklyIds));
    renderWeek();
  }));
}

function bindMealButtons() {
  document.querySelectorAll('.recipe-button').forEach(button => button.addEventListener('click', () => showRecipe(button.dataset.meal)));
}

function showRecipe(id) {
  const meal = meals.find(item => item.id === id);
  document.querySelector('#recipe-image').src = meal.image;
  document.querySelector('#recipe-image').alt = meal.name;
  document.querySelector('#recipe-title').textContent = `${meal.emoji} ${meal.name}`;
  document.querySelector('#recipe-meta').textContent = `${meal.time} minutes · ${meal.health}/10 meal balance`;
  document.querySelector('#recipe-description').innerHTML = `<p>${meal.description}</p>`;
  document.querySelector('#recipe-ingredients').innerHTML = meal.recipeIngredients.map(item => `<li>${escapeText(item)}</li>`).join('');
  document.querySelector('#recipe-steps').innerHTML = meal.steps.map(item => `<li>${escapeText(item)}</li>`).join('');
  document.querySelector('#health-note').textContent = `Family balance guide: ${meal.health}/10. ${meal.healthText} This is a simple meal-planning guide, not a medical nutrition score.`;
  document.querySelector('#recipe-modal').classList.add('open');
}

function renderChips() {
  const container = document.querySelector('#chips');
  container.innerHTML = [...ingredients].map(item => `<span class="chip">${escapeText(item)}<button type="button" aria-label="Remove ${escapeAttr(item)}" data-remove="${escapeAttr(item)}">×</button></span>`).join('');
  container.querySelectorAll('[data-remove]').forEach(button => button.addEventListener('click', () => {
    ingredients.delete(button.dataset.remove);
    renderChips();
  }));
}

document.querySelector('#ingredient-form').addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('#ingredient-input');
  input.value.split(',').map(value => value.trim().toLowerCase()).filter(Boolean).forEach(value => ingredients.add(value));
  input.value = '';
  renderChips();
});
document.querySelectorAll('.quick button').forEach(button => button.addEventListener('click', () => {
  ingredients.add(button.dataset.ingredient);
  renderChips();
}));
document.querySelector('#suggest-button').addEventListener('click', renderSuggestions);
document.querySelector('#close-recipe').addEventListener('click', () => document.querySelector('#recipe-modal').classList.remove('open'));
document.querySelector('#recipe-modal').addEventListener('click', event => {
  if (event.target.id === 'recipe-modal') event.currentTarget.classList.remove('open');
});

renderChildren();
renderSuggestions();
renderWeek();
