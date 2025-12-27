import { CiSearch } from "react-icons/ci"

interface IInput {
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>,
  onSubmit?: () => void
  placeholder?: string,
  showBtn?: boolean
}

export const SearchBar = ({ search, setSearch, onSubmit, placeholder = 'Pesquisar', showBtn = true }: IInput) => {
  return (
    <form
      className="searchbar"
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit?.()
      }}
    >
      <input
        className="searchbar__input"
        placeholder={placeholder}
        onChange={(e) => { setSearch(e.target.value) }}
        value={search}
      />
      {showBtn && <button className="searchbar__btn" type="submit">
        <CiSearch />
      </button>}
    </form>
  )
}