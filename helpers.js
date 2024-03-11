export function getCocktailIngredients(cocktail) {
  const ingredients = [];

  for (let i = 1; i < 16; i++) {
    if (cocktail[`strIngredient${i}`] !== null) {
      ingredients.push(cocktail[`strIngredient${i}`]);
    }
  }

  return ingredients;
}

export function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}
