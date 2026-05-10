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

  useEffect(() => {
    if(query===""){
        setBooks([])
        return;
    }
    const performSearch = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/search/?q=${query}`);
        const data = await response.json();
        setBooks(data.books);
      } catch (error) {
        console.error("Search failed:", error);
      } finally {
        setLoading(false);
      }

      const timeoutId = setTimeout(() => {
        performSearch();
      } , 300);
      return () => clearTimeout(timeoutId);
    };
  }, [query]);

  return (
    <div className="w-1/3 bg-[#dbc397] my-3 ml-2 mr-3 rounded-2xl p-6 flex flex-col border-amber-900 border-2">
      <h2 className="text-2xl font-bold font-mono text-amber-900 mb-4">
        Find a Book
      </h2>
      <input
        type="text"
        id="book-search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter Book Title or Topic..."
        className="w-full p-3 border-2 border-amber-700 text-xl text-amber-900 font-bold font-mono rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-900"
      />
      <div id="results-list" className="mt-6 flex-1 overflow-y-auto space-y-3">
        {books.map((book) => (
          <div className="p-4 border bg-amber-100 border-amber-900 rounded-2xl">
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
    </div>
  );
};

export default SearchCard;
