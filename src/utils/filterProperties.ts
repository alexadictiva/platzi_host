import type { Property } from "../types/propertyTypes";

export function filterProperties(
  properties: Property[],
  searchText: string,
  searchType: string,
  searchHuesped: string
) {
  const city = searchText.trim().toLowerCase();
  const type = searchType.trim().toLowerCase();
  const huesped = searchHuesped;

  return properties.filter((property) => {
    // Si ciudad está vacía, acepta cualquier ciudad.
    const matchesCity = city === "" || property.location.toLowerCase().includes(city);

    // Si tipo está vacío, acepta cualquier tipo.
    const matchesType = type === "" || property.type.toLowerCase().includes(type);

    // Si huéspedes está vacío, acepta cualquier capacidad.
    // Si tiene un valor, comprueba que haya lugar suficiente.
    const matchesGuests = huesped === "" || property.huesped == Number(huesped);

    // La propiedad debe cumplir las tres condiciones.
    return matchesCity && matchesType && matchesGuests;
  });
}