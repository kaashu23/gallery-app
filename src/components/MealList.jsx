

const MealList = ({ meals }) => {

  if (meals.length === 0) {
    return <h2 className="mt-10 text-gray-400">No Data Available 😢</h2>
  }

  return (
    <div className="mt-10 flex flex-wrap gap-6 justify-center">
      {meals.map((meal) => (
        <div
          key={meal.idMeal}
          className='cursor-pointer flex flex-col items-center gap-2 bg-gray-900 rounded-xl p-2 hover:bg-gray-700 transition'
        >
          <div className='rounded-xl overflow-hidden h-40 w-44'>
            <img
              className='h-full w-full object-cover'
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
          </div>
          <h2 className='font-bold text-sm text-center px-1'>
            {meal.strMeal}
          </h2>
        </div>
      ))}
    </div>
  )
}

export default MealList