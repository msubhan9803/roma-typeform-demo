import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BiWorld } from "react-icons/bi";
import { CgChevronDown } from "react-icons/cg";
import { Fragment } from "react";

function LanguageDropdown() {
  const [languageList, setLanguageList] = useState(["English", "Español"]);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center text-sm text-gray-500 hover:text-gray-400">
          <BiWorld className="text-gray-600 h-5 w-5 mr-2" />
          English
          <CgChevronDown className="text-gray-600 h-3 w-3 ml-1" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-24 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="py-2">
            {languageList.map((lang, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <button
                    type="button"
                    className={`${
                      active ? "bg-gray-100" : ""
                    } group flex w-full items-center text-sm text-gray-700 hover:bg-stone-100 px-6 py-4 !min-h-8`}
                  >
                    {lang}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default LanguageDropdown;
