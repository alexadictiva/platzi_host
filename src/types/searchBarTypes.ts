export type searchBar = {
    value: string;
    searchedValue: string;
    onChange:(value:string) => void;
    onSearch:(value:string) => void;
    onClear: () => void;
}