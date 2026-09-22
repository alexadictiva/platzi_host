import { filterProperties } from "./utils/filterProperties";
import { Header } from "./components/layout/Header";
import { Hero } from "./components/ui/Hero";
import { SearchBar } from "./components/ui/SearchBar";
import { PropertyList } from "./components/properties/PropertyList";
import { properties } from "./data/properties";
import { useState, useEffect } from "react";

function App() {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");
  const [propertyList, setPropertyList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timerId = setTimeout(() => {
      try {
        setPropertyList(properties);
      } catch {
        setError("No se cargaron las propiedades. Intentalo de nuevo.");
      } finally {
        setIsLoading(false);
      }
    }, 3000);

    return () => clearTimeout(timerId);
  }, []);

  const filteredProperties = filterProperties(propertyList, search);

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
