"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import AuthButtonClient from "../buttons/AuthButtonClient";

const links = [
  { href: "/account-settings", label: "Account settings" },
  { href: "/support", label: "Support" },
  { href: "/license", label: "License" },
  { href: "/sign-out", label: "Sign out" },
];

export default function ProfileMenu() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Menu
      as="a"
      className="flex justify-center items-center rounded-[30px] border"
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
          className="absolute"
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
            {({ active }) => (
              <div className="rounded-full p-2 violetGradient-bg">
                <AuthButtonClient
                  title="Login"
                  customClasses="flex"
                  url="const"
                />
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
