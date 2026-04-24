const MealList = ({ meals }) => {


  if (!meals) {
    return (
      <h2 className="mt-10 text-gray-400 text-center text-lg">
        Loading... ⏳
      </h2>
    )
  }


  if (meals.length === 0) {
    return (
      <h2 className="mt-10 text-gray-400 text-center text-lg">
        No meals found 😢
      </h2>
    )
  }

  return (
    <div
      className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4"
    >
      {meals.map((meal) => (
        <div
          key={meal.idMeal}className="cursor-pointer bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
        >
          {/* Image */}
          <div className="w-full h-56 sm:h-48 md:h-44 lg:h-40">
            <img
              loading="lazy"
              className="w-full h-full object-cover"
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
          </div>

          {/* Title */}
          <div className="p-3">
            <h2 className="font-semibold text-sm text-center line-clamp-2">
              {meal.strMeal}
            </h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MealList