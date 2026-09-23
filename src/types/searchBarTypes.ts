export type searchBar = {
  cityValue: string;
  typeValue: string;
  huespedValue: string;
  searchedValue: string;
  searchedType: string;
  searchedHuesped: string;
  onCityChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onHuespedsChange: (value: string) => void;
  onSearch: (value: string) => void;
  onSearchType: (value: string) => void;
  onSearchHuesped: (value: string) => void;
  onClear: () => void;
};
