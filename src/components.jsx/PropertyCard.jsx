export function PropertyCard({image, title, location, price}){
    return(
        <article className="property-card">
              <img
                src={image}
                alt={title}
              />
              <div className="property-card-content">
                <h4>{title}</h4>
                <p>{location}</p>
                <strong>${price} / noche</strong>
              </div>
            </article>
    )
}

