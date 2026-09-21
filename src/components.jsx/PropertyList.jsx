
import { PropertyCard } from './PropertyCard'

export function PropertyList({properties}){

    if(properties.length == 0){
        return(
            <section className='properties-section'>
                <h3>Alojamientos disponibles</h3>
                <p>No encontramos alojamientos con esos criterios.</p>
            </section>
        )
    }

    return(
        <section className="properties-section">
          <div className="section-title">
            <h3>Alojamientos disponibles</h3>
            <p>Primeros pasos con React: estructura visual en JSX.</p>
          </div>

          <div className="properties-grid">
            {properties.map((property)=>(
                <PropertyCard
                        key={property.id}
                        title={property.title}
                        location={property.location}
                        price={property.price}
                        type={property.type || 'Tipo sin especificar'}
                        image={property.image}
                    />
                ))
            }
          </div>
        </section>
    )
}

