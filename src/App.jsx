import {Header} from './components.jsx/Header'
import {Hero} from './components.jsx/Hero'
import {SearchBar} from './components.jsx/SearchBar'
import {PropertyList} from './components.jsx/PropertyList'
import { properties } from './data/properties'

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <Hero />
        <SearchBar />        
        <PropertyList properties={properties} />        
      </main>
    </div>
  );
}

export default App;