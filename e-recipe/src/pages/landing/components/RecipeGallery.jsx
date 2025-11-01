import React from "react";

function RecipeGallery({ recipes, onViewAllClick }) {
  return (
    <section
      className="py-16 px-4"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="font-['Poppins'] font-semibold mb-4"
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            }}
          >
            Recipe Gallery
          </h2>
          <p
            className="font-['Lato']"
            style={{
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Explore our diverse collection of authentic Indian recipes
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              // TODO: Use the recipes prop to render 8 recipe images here to showcase them as featured recipes and onclick of the image user should be taken to the respective recipes page
              // Hint: Each image should be inside a div with square aspect ratio with rounded corners and a hover effect that slightly scales up the image. In the same div use onClick prop to handle click event and move the user to the respective recipe page.
        </div>

        <div className="text-center mt-8">
          <Button
            className="rounded-full px-8 py-6 font-['Lato'] font-semibold"
            style={{
              backgroundColor: "var(--brand-primary)",
              color: "var(--bg-primary)",
            }}
          >
            Explore All Recipes
          </Button>
        </div>
      </div>
    </section>
  );
}

export default RecipeGallery;
