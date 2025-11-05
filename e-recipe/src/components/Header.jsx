import { ChefHat } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        backgrourecipesndColor: "var(--bg-primary)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: "var(--brand-primary)",
              }}
            >
              <ChefHat className="w-6 h-6 text-text-primary" />
            </div>
            <div>
              <h1
                className="font-['Poppins'] font-semibold"
                style={{
                  color: "var(--text-primary)",
                  fontSize: "1.25rem",
                }}
              >
                RecipeReveal
              </h1>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                Unlock Your Culinary Journey
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-12">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink
                to="/"
                className="font-['Lato'] font-medium transition-colors"
              >
                Home
              </NavLink>
            </div>
            {/* Dark Mode Toggle */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
