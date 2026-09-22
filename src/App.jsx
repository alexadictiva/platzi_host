import { Header } from "./components.jsx/Header";
import { Hero } from "./components.jsx/Hero";
import { SearchBar } from "./components.jsx/SearchBar";
import { PropertyList } from "./components.jsx/PropertyList";
import { properties } from "./data/properties";
import { useState, useEffect } from "react";

function App() {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");
  const [propertiesFromApi, setPropertiesFromApi] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timerId = setTimeout(() => {
      try {
        setPropertiesFromApi(properties);
        
        
      } catch {
        setError("No se cargaron las propiedades. Intentalo de nuevo.");
      } finally {
        setIsLoading(false);
      }
    }, 3000);

    return () => clearTimeout(timerId);
  }, []);

  const filteredProperties = propertiesFromApi.filter((property) => {
    const searchText = search.toLowerCase();

    return (
      property.title.toLowerCase().includes(searchText) ||
      property.location.toLowerCase().includes(searchText) ||
      property.type.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <Hero />
        <SearchBar
          value={city}
          searchedValue={search}
          onChange={setCity}
          onSearch={setSearch}
          onClear={() => {
            setCity("");
            setSearch("");
          }}
        />
        {isLoading && <p>Cargando propiedades...</p>}
        {error && <p>{error}</p>}
        {!isLoading && !error && (
          <PropertyList properties={filteredProperties} />
        )}
      </main>
    </div>
  );
}

export default App;
