import type { Property } from "./../types/propertyTypes"

export function filterProperties(properties:Property[], searchText:string) {
  const normalizedSearch = searchText.trim().toLowerCase();

  if (!normalizedSearch) {
    return properties;
  }

  return properties.filter((property) => {
    return (
      property.title.toLowerCase().includes(searchText) ||
      property.location.toLowerCase().includes(searchText) ||
      property.type.toLowerCase().includes(searchText)
    );
  });
}
