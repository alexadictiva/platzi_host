export function PropertyCard({image, title, type, location, price}){
    return(
        <article className="property-card">
              <img
                src={image}
                alt={title}
              />
              <div className="property-card-content">
                <h4>{title}</h4>
                <p>{location}</p>
                <p><small>{type}</small></p>
                <strong>${price} / noche</strong>
              </div>
            </article>
    )
}

