import type { Property } from "../../types/propertyTypes";
import { PropertyCard } from "./PropertyCard";

type PropertyListProps = {
  properties: Property[];
};

export function PropertyList({ properties }: PropertyListProps) {
  if (properties.length == 0) {
    return (
      <section className="properties-section">
        <h3>Alojamientos disponibles</h3>
        <p>No encontramos alojamientos con esos criterios.</p>
      </section>
    );
  }

  return (
    <section className="properties-section">
      <h3>Alojamientos disponibles</h3>
      <div className="properties-grid">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            id={property.id}
            title={property.title}
            location={property.location}
            price={property.price}
            image={property.image}
            type={property.type}
            huesped={property.huesped}
          />
        ))}
      </div>
    </section>
  );
}
