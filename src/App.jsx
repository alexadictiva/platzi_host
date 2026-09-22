import {Header} from './components.jsx/Header'
import {Hero} from './components.jsx/Hero'
import {SearchBar} from './components.jsx/SearchBar'
import {PropertyList} from './components.jsx/PropertyList'
import { properties } from './data/properties'
import { useState } from 'react'

function App() {
  const [search, setSearch] = useState("")

  const filteredProperties = properties.filter((property) => {
    const searchText = search.toLowerCase();
    
    return (
      property.title.toLowerCase().includes(searchText) ||
      property.location.toLowerCase().includes(searchText) ||
      property.type.toLowerCase().includes(searchText));
  });

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <Hero />
        <SearchBar onSearch={setSearch}/>        
        <PropertyList properties={filteredProperties} />        
      </main>
    </div>
  );
}

export default App;