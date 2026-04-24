import React from 'react'

const SearchBar = ({ mealName, setMealName, getData }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl">

      <input
        type="text"
        placeholder="Search any recipe..."
        value={mealName}
        onChange={(e) => setMealName(e.target.value)}
        className="w-full px-4 py-2 rounded-xl text-white outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      <button
        onClick={() => getData()}
        className="bg-blue-500 hover:bg-blue-600 transition px-6 py-2 rounded-xl font-semibold shadow-md"
      >
        Search
      </button>

    </div>
  )
}

export default SearchBar