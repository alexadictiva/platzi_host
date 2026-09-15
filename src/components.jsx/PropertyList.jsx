import { PropertyCard } from './PropertyCard'

export function PropertyList(){

    return(
        <section className="properties-section">
          <div className="section-title">
            <h3>Alojamientos disponibles</h3>
            <p>Primeros pasos con React: estructura visual en JSX.</p>
          </div>

          <div className="properties-grid">
            <PropertyCard
                title="Apartamento moderno"
                location="Santiago, Chile"
                price="75"
                image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
            />
            <PropertyCard
                title="Casa frente al lago"
                location="Bariloche, Argentina"
                price="120"
                image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            />
            <PropertyCard
                title="Loft urbano"
                location="Ciudad de México, México"
                price="90"
                image="https://images.unsplash.com/photo-1494526585095-c41746248156"
            />
          </div>
        </section>
    )
}

