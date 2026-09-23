import { Property } from "../../types/propertyTypes";

export function PropertyCard({
  image,
  title,
  type,
  location,
  price,
  huesped
}: Property) {
  return (
    <article className="property-card">
      <img src={image} alt={title} />
      <div className="property-card-content">
        <h4>{title}</h4>
        <p>{location}</p>
        <p>
          <small>{type}</small>
        </p>
        <p>
          <strong>${price} / noche</strong>
        </p>
        <p>
          Máximo de huespedes: <span className="red">{huesped}</span>
        </p>
      </div>
    </article>
  );
}
