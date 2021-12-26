import Icon from "@material-tailwind/react/Icon";
const Search = () => {
  return (
    <div className="flex items-center">
      <Icon name="search" size="3xl" colors="gray" />
      <input
        className="flex-grow px-5 text-base bg-transparent outline-none"
        type="text"
        placeholder="search"
      />
    </div>
  );
};

export default Search;
