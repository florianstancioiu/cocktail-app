export function getCocktailIngredients(cocktail) {
  const ingredients = [];

  for (let i = 1; i < 16; i++) {
    if (cocktail[`strIngredient${i}`] !== null) {
      ingredients.push(cocktail[`strIngredient${i}`]);
    }
  }

  return ingredients;
}
