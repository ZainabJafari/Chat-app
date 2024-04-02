import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2 ">
      <input
        type="text"
        placeholder="Search..."
        className="input input-borderd rounded-full"
      />
      <button type="submit">
        <CiSearch />
      </button>
    </form>
  );
};

export default SearchInput;
