import React from 'react'

const SearchCard = () => {
  return (
    <div className="w-1/3 bg-[#dbc397] my-3 ml-2 mr-3 rounded-2xl p-6 flex flex-col border-amber-900 border-2">
        <h2 className="text-2xl font-bold font-mono text-amber-900 mb-4">Find a Book</h2>
        <input
          type="text"
          id="book-search"
          placeholder="Enter Book Title or Topic..."
          className="w-full p-3 border-2 border-amber-700 text-xl text-amber-900 font-bold font-mono rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-900"
        />
        <div
          id="results-list"
          className="mt-6 flex-1 overflow-y-auto space-y-3"
        >
        </div>
      </div>
  )
}

export default SearchCard