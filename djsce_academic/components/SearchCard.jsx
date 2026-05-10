import React, { useEffect } from "react";
import BookCard from "./BookCard";
import { useState } from "react";
import LibraryContext from "../src/LibraryContext";
import { useContext } from "react";

const SearchCard = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setHighlightedId } = useContext(LibraryContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // 1. Calculate the slice of books to show
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = books.slice(indexOfFirstItem, indexOfLastItem);

  // 2. Calculate total pages
  const totalPages = Math.ceil(books.length / itemsPerPage);

  // SearchCard.jsx
  useEffect(() => {
    // 1. Don't search if the query is empty
    if (!query.trim()) {
      setBooks([]);
      return;
    }

    const performSearch = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/search/?q=${query}`,
        );
        const data = await response.json();
        setBooks(data.books || []);
      } catch (error) {
        console.error("Search failed:", error);
      } finally {
        setLoading(false);
      }
    };

    // 2. THIS IS THE MISSING PART: Actually trigger the function
    const timeoutId = setTimeout(() => {
      performSearch();
    }, 300);

    // 3. Cleanup the timer if the user types again
    return () => clearTimeout(timeoutId);
  }, [query]); // Re-run when query changes

  return (
    <div className="w-1/3 bg-[#dbc397] my-3 ml-2 mr-3 rounded-2xl p-6 flex flex-col border-amber-900 border-2">
      <h2 className="text-2xl font-bold font-mono text-amber-900 mb-4">
        Find a Book
      </h2>
      <input
        type="text"
        id="book-search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setCurrentPage(1); // Reset to page 1 when searching
        }}
        placeholder="Enter Book Title or Topic..."
        className="w-full p-3 border-2 border-amber-700 text-xl text-amber-900 font-bold font-mono rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-900"
      />
      <div id="results-list" className="mt-6 flex-1 overflow-y-auto space-y-3">
        {currentItems.map((book, i) => (
          <div
            key={i}
            className="p-4 border bg-amber-100 border-amber-900 rounded-2xl"
          >
            <p className="font-bold text-xl text-amber-900">{book.title}</p>
            <p className="text-s text-[#ba3e1f] mb-3">{`${book.type} ${book.number} | ${book.side}`}</p>
            <button
              className="hover:scale-105 cursor-pointer bg-[#B83D1E] border-2 border-[#B83D1E] font-mono hover:bg-white hover:text-[#B83D1E] rounded-3xl w-30 h-10 text-white"
              onClick={() => setHighlightedId(book.location_id)}
            >
              Show on Map
            </button>
          </div>
        ))}
      </div>
      {/* Pagination controls */}
      {books.length > itemsPerPage && (
        <div className="flex justify-between m-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="disabled:opacity-30 hover:scale-105 cursor-pointer bg-[#B83D1E] border-2 border-[#B83D1E] font-mono hover:bg-white hover:text-[#B83D1E] rounded-3xl w-30 h-10 text-white"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="disabled:opacity-30 hover:scale-105 cursor-pointer bg-[#B83D1E] border-2 border-[#B83D1E] font-mono hover:bg-white hover:text-[#B83D1E] rounded-3xl w-30 h-10 text-white"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchCard;
