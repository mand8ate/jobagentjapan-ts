"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import SignoutButtonClient from "@/components/buttons/SignouButtonClient";

export default function ProfileDropdown() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="relative">
      <Menu as="div">
        <Image
          className="shrink-0 cursor-pointer"
          alt=""
          src="/account-circle.svg"
          width={40}
          height={40}
          onMouseEnter={() => setOpenModal(true)}
        />

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
          <Menu.Items static onMouseLeave={() => setOpenModal(false)}>
            <Menu.Item>
              <SignoutButtonClient />
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
