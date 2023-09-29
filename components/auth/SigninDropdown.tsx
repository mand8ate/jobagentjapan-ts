"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import AuthButtonClient from "../buttons/AuthButtonClient";

export default function ProfileMenu() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="relative">
    <Menu
      as="a"
      className="flex justify-center items-center rounded-[30px] px-4 py-2 border"
    >
      <Menu.Button onMouseEnter={() => setOpenModal(true)} className="">
        signin
      </Menu.Button>
      <Transition
        show={openModal}
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
          onMouseLeave={() => setOpenModal(false)}
          className="absolute left-0 mt-2 w-[200px] h-[60px] w-[200px] border"
        >
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && "bg-blue-500"}`}
                href="/account-settings"
              >
                Account settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && "bg-blue-500"}`}
                href="/account-settings"
              >
                Documentation
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
                <AuthButtonClient />
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
    </div>
  );
}
