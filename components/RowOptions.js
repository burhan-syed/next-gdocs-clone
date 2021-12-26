import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
const RowOptions = () => {
  return (
    <div className="">
      <Menu className="relative inline-block text-left">
        {({ open }) => (
          <>
            <Menu.Button className={"relative border"}>
              <Button
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="border-0"
              >
                <Icon name="more_vert" size="3xl"></Icon>
              </Button>
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute z-50 w-56 py-1 mx-auto mt-1 origin-top bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={
                        (active ? "bg-gray-50" : " ",
                        "block px-4 py-1 text-sm hover:bg-gray-50")
                      }
                    >
                      <div className="flex flex-row items-center h-10 cursor-pointer">
                        <Icon name="text_fields" size="3xl"></Icon>
                        <span className="ml-5"> Rename </span>
                      </div>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={
                        (active ? "bg-gray-50" : " ",
                        "block px-4 py-1 text-sm hover:bg-gray-50")
                      }
                    >
                      <div className="flex flex-row items-center h-10 cursor-pointer">
                        <Icon name="delete_outline" size="3xl"></Icon>
                        <span className="ml-5"> Remove </span>
                      </div>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={
                        (active ? "bg-gray-50" : " ",
                        "block px-4 py-1 text-sm hover:bg-gray-50")
                      }
                    >
                      <div className="flex flex-row items-center h-10 cursor-pointer">
                        <Icon name="open_in_new" size="3xl"></Icon>
                        <span className="ml-5"> Open in New Tab </span>
                      </div>
                    </div>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

export default RowOptions;
