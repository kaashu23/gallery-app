import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import MealList from './components/MealList'

const App = () => {

  const [meals, setMeals] = useState([])
  const [mealName, setMealName] = useState('')

  const getData = async (a) => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName || a}`
    )
    setMeals(response.data.meals || [])
  }

  useEffect(() => {// eslint-disable-next-line react-hooks/set-state-in-effect
    getData('Chicken')
  }, [])

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center px-4 py-8">

      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-center tracking-wide">
        Meals Names
      </h1>


      <SearchBar
        mealName={mealName}
        setMealName={setMealName}
        getData={getData}
      />

      {/* 🍗 Meals Component */}
      <MealList meals={meals} />

    </div>
  )
}

export default App