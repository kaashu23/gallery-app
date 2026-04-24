const MealList = ({ meals }) => {

  if (!meals || meals.length === 0) {
    return <h2 className="mt-10 text-gray-400 text-center">No Data Available 😢</h2>
  }

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
      {meals.map((meal) => (
        <div
          key={meal.idMeal}
          className='cursor-pointer bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition shadow-lg'
        >
          <div className='w-full h-56 sm:h-48'>
            <img
              className='w-full h-full object-cover'
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
          </div>

          <div className="p-3">
            <h2 className='font-semibold text-sm text-center line-clamp-2'>
              {meal.strMeal}
            </h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MealList