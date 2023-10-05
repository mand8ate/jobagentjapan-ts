"use client";

import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import SigninButtonClient from "@/components/buttons/SigninButtonClient";
import LoginFormEmail from "@/components/forms/LoginFormEmail";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function SigninDropdown() {
  return (
    <div className="relative">
      <Menu
        as="div"
        className="flex justify-center items-center rounded-[30px] px-4 py-2 violetGradient-bg text-white"
      >
        <Menu.Button className="flex">
          Signin
          <ChevronDownIcon className="w-5 h-5 ml-1" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            static
            className="absolute flex flex-col gap-2 right-0 top-9 mt-2 rounded-xl w-[250px] bg-white p-6 text-black"
          >
            <Menu.Item>
              <LoginFormEmail />
            </Menu.Item>
            <hr />
            <Menu.Item>
              <SigninButtonClient />
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
