import "./search.scss"

export default function Search() {
  return (
    <div className="search-container">
      <form className="search-form" action="">
        <div className="search-input-wrapper">
          <svg 
            className="search-icon" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
          <input 
            type="search" 
            className="search-input" 
            placeholder="Rechercher un film, une série..."
          />
          <button type="submit" className="search-button">
            Rechercher
          </button>
        </div>
      </form>
    </div>
  )
}
