import { clsx} from "clsx";
import { twMerge } from "tailwind-merge";
import { recipes } from "./data"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function isMobile() {
    // TODO: Implement a simple check if the device is mobile based on window width
}

export function scrollToTop() {
    // TODO: Implement a function to scroll to the top of the page
}


export const getRecipeById = (id) => {
  return recipes.find((recipe) => recipe.id === id);
};

export const getFeaturedRecipes = () => {
  return recipes.filter((recipe) => recipe.isFeatured).slice(0, 6);
};

export const getHighProteinRecipeByTime = () => {
  const hour = new Date().getHours();
  // timeOfDay == 'morning' | 'afternoon' | 'evening' | 'night'
  let timeOfDay;

  if (hour >= 5 && hour < 12) {
    timeOfDay = "morning";
  } else if (hour >= 12 && hour < 17) {
    timeOfDay = "afternoon";
  } else if (hour >= 17 && hour < 21) {
    timeOfDay = "evening";
  } else {
    timeOfDay = "night";
  }

  const timeBasedRecipes = recipes.filter(
    (recipe) => recipe.isHighProtein && recipe.timeOfDay === timeOfDay
  );
  return timeBasedRecipes[0] || recipes.filter((r) => r.isHighProtein)[0];
};

// category ==> 'Vegan' | 'Non-Veg' | 'Other' | 'All'
export const getRecipesByCategory = (category) => {
  if (category === "All") return recipes;
  return recipes.filter((recipe) => recipe.category === category);
};
