import React from "react";
import { Button } from "../../../components/ui/Button";
import { RecipeCard } from "../../../components/RecipeCard";
import { ArrowRight } from "lucide-react";
import { getFeaturedRecipes } from "../../../utils";
import { useNavigate } from "react-router-dom";

function FeatureRecipes() {

  const navigate = useNavigate();

  const featuredRecipes = getFeaturedRecipes();

  return (
    <section className="py-16 px-4" id="featured-recipes">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2
              className="font-['Poppins'] font-semibold mb-2"
              style={{
                color: "var(--text-primary)",
                fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
              }}
            >
              Featured Recipes
            </h2>
            <p
              className="font-['Lato']"
              style={{ color: "var(--text-secondary)" }}
            >
              Our top 6 handpicked recipes for you
            </p>
          </div>

          <Button
            variant="ghost"
            className="hidden md:flex items-center gap-2 font-['Lato'] font-semibold"
            style={{ color: "var(--brand-primary)" }}
            onClick={() => navigate('/recipes')}
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onClick={() => navigate(`/recipes/${recipe.id}`)}
                featured
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureRecipes;
