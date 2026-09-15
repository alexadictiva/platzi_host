export function SearchBar(){
    return(
        <section className="search-box">
          <label>
            Ciudad
            <input type="text" placeholder="Santiago, Chile" />
          </label>
          <label>
            Tipo
            <input type="text" placeholder="Apartamento" />
          </label>
          <label>
            Huéspedes
            <input type="number" placeholder="2" />
          </label>
          <button>Buscar</button>
        </section>
    )
}

