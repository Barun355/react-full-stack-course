import React from "react";

function FeatureRecipes({ featuredRecipes, onRecipeClick, onViewAllClick }) {
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
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          // TODO: Use the featuredRecipes prop to render recipe cards here
        </div>
      </div>
    </section>
  );
};

export default FeatureRecipes;
