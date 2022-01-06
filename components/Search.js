import Icon from "@material-tailwind/react/Icon";
import { useState } from "react";
const Search = ({setSearchFilter}) => {
  const [value,setValue] = useState("");

  return (
    <div className="flex items-center min-w-full pr-4">
      <Icon name="search" size="3xl" colors="gray" />
      <input
        className="flex-grow min-w-full px-5 text-base bg-transparent outline-none"
        type="text"
        placeholder="Search"
        input={value}
        onChange={e => {setValue(e.target.value); setSearchFilter(e.target.value);}}
      />
    </div>
  );
};

export default Search;
