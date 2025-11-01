import React from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetailPage = () => {
    const { id } = useParams()

  return (
    <div>
      Recipe Detail Page {id}
    </div>
  )
}

export default RecipeDetailPage
