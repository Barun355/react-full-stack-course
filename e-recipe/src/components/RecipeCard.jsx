

export function RecipeCard({ recipe, onClick, featured = false }) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
      style={{ 
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border)'
      }}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <ImageWithFallback
          alt={recipe.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Category Badge */}
        <div 
          className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-['Lato'] font-semibold"
          style={{
            backgroundColor: 'var(--brand-primary)',
            color: 'var(--bg-primary)'
          }}
        >
        </div>
        
        {/* High Protein Badge */}
        // TODO: If the recipe is high in protein, show a badge at the bottom left corner of the image with text "High Protein"
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 
          className="font-['Poppins'] font-medium mb-2 line-clamp-1"
          style={{ 
            color: 'var(--text-primary)',
            fontSize: featured ? '1.125rem' : '1rem'
          }}
        >
          {recipe.name}
        </h3>

        <p 
          className="font-['Lato'] text-sm mb-3 line-clamp-2"
          style={{ color: 'var(--text-secondary)' }}
        >
          {recipe.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
            {/* TODO: */}
            {/* Add the rating, cook time and calories info here. */}
            {/* Rating, Reviews should be in a div with star icon followed by rating value and number of reviews in parentheses in the right side */}
            {/* Cook time and Calories should be in another div with clock icon followed by cook time and flame icon followed by calories in the left side */}
        </div>
      </div>
    </div>
  );
}
