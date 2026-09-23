import { searchBar } from "./../../types/searchBarTypes";
import type { ChangeEvent, SubmitEvent } from "react";

export function SearchBar({
  cityValue,
  typeValue,
  huespedValue,
  searchedValue,
  searchedType,
  searchedHuesped,
  onSearch,
  onSearchType,
  onSearchHuesped,
  onCityChange,
  onTypeChange,
  onHuespedsChange,
  onClear,
}: searchBar) {
  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(cityValue.trim());
    onSearchType(typeValue.trim());
    onSearchHuesped(huespedValue);
  }

  return (
    <>
      <form className="search-section" onSubmit={handleSubmit}>
        <label>
          Ciudad
          <span className="city-input-wrapper">
            <input
              type="text"
              placeholder="Santiago, Chile"
              value={cityValue}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                onCityChange(event.target.value);
              }}
            />
            {(cityValue || searchedValue) && (
              <button
                className="clear-city-button"
                type="button"
                onClick={onClear}
              >
                x
              </button>
            )}
          </span>
        </label>
        <label>
          Tipo
          <span className="city-input-wrapper">
            <input
              type="text"
              placeholder="Apartamento"
              value={typeValue}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                onTypeChange(event.target.value);
              }}
            />
            {(typeValue || searchedType) && (
              <button
                className="clear-city-button"
                type="button"
                onClick={onClear}
              >
                x
              </button>
            )}
          </span>
        </label>
        <label>
          Huéspedes
          <span className="city-input-wrapper">
            <input
              type="number"
              placeholder="2"
              value={huespedValue}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                onHuespedsChange(event.target.value);
              }}
              />
            {(huespedValue || searchedHuesped) && (
              <button
                className="clear-city-button"
                type="button"
                onClick={onClear}
              >
                x
              </button>
            )}
            </span>
        </label>
        <button type="submit">Buscar</button>
      </form>
      <p>
        Resultados de búsqueda:{" "}
        <strong>{searchedValue || "Sin búsqueda"}</strong>
      </p>
    </>
  );
}
