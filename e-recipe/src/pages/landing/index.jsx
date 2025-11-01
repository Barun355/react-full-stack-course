import React from 'react'
import Hero from './components/Hero'
import FeatureRecipes from './components/FeatureRecipes'
import RecipeGallery from './components/RecipeGallery'

const Landing = () => {
  return (
    <>
      <Hero />
      <FeatureRecipes />
      <RecipeGallery />

      // TODO: Create Blogs Component in /pages/landing/components/Blogs.jsx and use it here
    </>
  )
}

export default Landing
