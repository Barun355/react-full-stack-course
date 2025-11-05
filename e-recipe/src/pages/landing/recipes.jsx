import React, { useEffect, useState } from 'react'
import { getAllRecipes } from '../../services/appwrite'

const Recipes = () => {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    async function getRecipes() {
      const res = await getAllRecipes()
      if (res.length > 0 ) {
        setRecipes(res)
      }
    }
    getRecipes()
  }, [])  

  console.log(recipes)

  return (
    <div>
      {
        recipes.length > 0 && recipes.map(item => (
          <div className="" key={item.$id}>
            <img src={item?.previewImageUrl} alt="" />
            {item?.name}
          </div>
        ))
      }
    </div>
  )
}

export default Recipes
