import React from "react";
import { getHighProteinRecipeByTime } from "../../../utils";
import { ArrowRight, Clock, Star, TrendingUp } from "lucide-react";
import { Button } from "../../../components/ui/Button";
import ImageWithFallback from "../../../components/ImageWithFallback"

const Hero = () => {

    const heroRecipe = getHighProteinRecipeByTime();

    const getTimeGreeting = () => {
        // implement a function that returns greeting based on time of day
        // e.g., "Good Morning", "Good Afternoon", "Good Evening"
        return "Good Morning";
    }

  return (
    <section className="relative py-16 px-4 overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div
              className="inline-block px-4 py-2 rounded-full mb-4 text-sm font-['Lato'] font-semibold"
              style={{
                backgroundColor: "var(--bg-secondary)",
                color: "var(--brand-primary)",
              }}
            >
              {getTimeGreeting()} - High Protein Special
            </div>

            <h1
              className="font-['Poppins'] font-semibold mb-4"
              style={{
                color: "var(--text-primary)",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                lineHeight: "1.2",
              }}
            >
              {heroRecipe?.name}
            </h1>

            <p
              className="font-['Lato'] mb-6"
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.125rem",
                lineHeight: "1.6",
              }}
            >
              {heroRecipe?.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--brand-primary)" }}
                >
                  <Star
                    className="w-5 h-5"
                    style={{ color: "var(--bg-primary)" }}
                  />
                </div>
                <div>
                  <p
                    className="font-['Lato'] font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {heroRecipe?.rating}/5
                  </p>
                  <p
                    className="text-sm font-['Lato']"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {heroRecipe?.reviews} Reviews
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--brand-primary)" }}
                >
                  <Clock
                    className="w-5 h-5"
                    style={{ color: "var(--bg-primary)" }}
                  />
                </div>
                <div>
                  <p
                    className="font-['Lato'] font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {heroRecipe?.prepTime} + {heroRecipe?.cookTime}
                  </p>
                  <p
                    className="text-sm font-['Lato']"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Total Time
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-success)" }}
                >
                  <TrendingUp
                    className="w-5 h-5"
                    style={{ color: "var(--bg-primary)" }}
                  />
                </div>
                <div>
                  <p
                    className="font-['Lato'] font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {heroRecipe?.protein}g Protein
                  </p>
                  <p
                    className="text-sm font-['Lato']"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Per Serving
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                className="group transition-transform duration-500 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"
              >
                View Recipe
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]" />
              </Button>

              <Button variant="outline">
                All Recipes
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl blur-3xl opacity-30"
              style={{ backgroundColor: "var(--brand-primary)" }}
            />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={heroRecipe?.prevImage}
                alt={heroRecipe?.name}
                className="w-full aspect-square object-cover"
              />

              {/* Floating Info Card */}
              <div
                className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl backdrop-blur-lg"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid rgba(255, 127, 0, 0.2)",
                }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p
                      className="font-['Lato'] text-sm"
                      style={{ color: "#666" }}
                    >
                      Calories
                    </p>
                    <p
                      className="font-['Poppins'] font-semibold"
                      style={{ color: "#333", fontSize: "1.25rem" }}
                    >
                      {heroRecipe?.calories}
                    </p>
                  </div>
                  <div>
                    <p
                      className="font-['Lato'] text-sm"
                      style={{ color: "#666" }}
                    >
                      Cuisine
                    </p>
                    <p
                      className="font-['Poppins'] font-semibold"
                      style={{ color: "#333", fontSize: "1.25rem" }}
                    >
                      {heroRecipe?.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
