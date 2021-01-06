const btn = document.querySelector('.btn');
const image = document.querySelector('.image');
const info = document.querySelector('.info');
const ingredientsList = document.querySelector('.ingredients');
const instructions = document.querySelector('.instructions');
const container = document.querySelector('.container');

btn.addEventListener('click', async (e) => {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const data = await res.json();
  const meal = data.meals[0];

  const ingredients = [];
  for (i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }

  image.innerHTML = `<img src="${meal.strMealThumb}" alt="Meal thumbnail" />`;
  info.innerHTML = `<ul class="info-list">
      <li>Category: ${meal.strCategory}</li>
      <li>Area: ${meal.strArea}</li>
      <li>Tags: ${meal.strTags ? meal.strTags : 'none'}</li>
    </ul>`;
  ingredientsList.innerHTML = '<h3>Ingredients:</h3>';
  ingredients.forEach((ingredient) => {
    ingredientsList.innerHTML += `<li>${ingredient}</li>`;
  });
  instructions.innerHTML = `<p>${meal.strInstructions}</p>`;

  // container.innerHTML += `<iframe width="560" height="315" src="https://www.youtube.com/embed/${meal.strYoutube.slice(
  //   -11
  // )}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
});
