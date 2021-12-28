import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState,  useEffect } from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useSession } from "next-auth/client";



const RowOptions = ({id, filename}) => {
  const [session] = useSession();
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState(filename)

  useEffect(() => {
    setInput(filename);
  
  }, [showModal])


  const deleteDoc = async() => {
    try{
      await db
      .collection("userDocs")
      .doc(session.user.email)
      .collection("docs").doc(id).delete();
      console.log('deleted');
    } catch (err) {
      console.log(err);
    }
  
  }

  const changeName = async() => {
    await db
    .collection("userDocs")
    .doc(session.user.email)
    .collection("docs").doc(id).update({'fileName': input});
  }

  const modal = (
    <Modal size="regular" active={showModal} toggler={() => setShowModal(false)}>
      <ModalBody className="cursor-auto">
        <h1 className="text-2xl">Rename</h1>
        <h2 className="py-2 text-md ">Please enter a new name for the item:</h2>
        <input
          value={input}
          onFocus={(event) => event.target.select()}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="w-full py-0.5 px-2 border border-[#0062F2] rounded-md outline-none"
          placeholder="Enter name of document.."
          onKeyDown={(e) => e.key === "Enter" && changeName()}
        />
      </ModalBody>
      <ModalFooter>
        <Button
          color="blue"
          buttonType="link"
          onClick={(e) => setShowModal(false)}
          ripple="dark"
        >
          Cancel
        </Button>
        <Button color="blue" onClick={() => {changeName(); setShowModal(false);}} ripple="light">
          OK
        </Button>
      </ModalFooter>
    </Modal>
  );

  return (
    <div className="">
      {modal}
      <Menu className="relative inline-block text-left ">
        {({ open }) => (
          <>
            <Menu.Button className={"relative !outline-none"}>
              <Button
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="border-0 "
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
              <Menu.Items className="absolute z-50 w-56 py-1 mt-1 origin-top bg-white divide-y divide-gray-100 rounded-md shadow-lg outline-none left-1/2 ring-1 ring-black ring-opacity-5 focus:outline-none" style={{transform: 'translateX(105%)'}}>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={
                        (active ? "bg-gray-50" : " ",
                        "block px-4 py-1 text-sm hover:bg-gray-50")
                      }
                      onClick={() => setShowModal(true)}
                    
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
                      onClick={() => deleteDoc()}
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
                      onClick={() => window.open(`/doc/${id}`, '_blank')}
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
