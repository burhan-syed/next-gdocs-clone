import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Search from "./Search";

import { signOut, useSession } from "next-auth/client";
const Header = ({setSearchFilter}) => {
  const [session] = useSession();
  
  return (
    <header className="sticky top-0 z-50 flex items-center px-4 bg-white shadow-md">
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="border-0 w-14 h-14 md:inline-flex"
      >
        <Icon name="menu" size="3xl" />
      </Button>
      <Icon name="description" size="5xl" color="blue" />
      <h1 className="ml-2 text-2xl text-gray-700 md:inline-flex">Docs</h1>
      <div className="flex items-center flex-grow px-5 py-2 mx-5 text-gray-600 bg-gray-100 rounded-lg focus-within:text-gray-600 focus-within:shadow-md md:mx-20">
        <Search setSearchFilter={setSearchFilter}/>
      </div>

      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="w-20 h-20 ml-5 border-0 md:inline-flex md:ml-20"
      >
        <Icon name="apps" size="3xl" color="gray" />
      </Button>

      <img
        loading="lazy"
        className="w-12 h-12 ml-2 rounded-full cursor-pointer"
        src={session?.user?.image}
        alt=""
        onClick={signOut}
      />
    </header>
  );
};

export default Header;
