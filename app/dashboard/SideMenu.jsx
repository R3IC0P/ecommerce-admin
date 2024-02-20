'use client'

import {
  Button,
  Divider,
  Input,
  Listbox,
  ListboxItem,
  User,
} from '@nextui-org/react'
import { ThemeSwitcher } from '../components/ThemeSwitcher'
import {
  MdChat,
  MdDashboard,
  MdHelp,
  MdHome,
  MdLogout,
  MdOutlineShoppingCart,
  MdPerson,
  MdSearch,
  MdSettings,
  MdTask,
  MdWarehouse,
} from 'react-icons/md'

export default function SideMenu() {
  return (
    <aside className="flex flex-col gap-5 h-full w-60 p-5 bg-neutral-50 border border-neutral-300 dark:bg-neutral-950 dark:border-neutral-800">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Comapny Logo</h1>
        <ThemeSwitcher />
      </div>
      <Input
        variant="bordered"
        radius="sm"
        size="sm"
        labelPlacement="outside"
        placeholder="Szukaj"
        startContent={<MdSearch />}
      />
      <Listbox itemClasses={{ base: 'py-2' }} aria-label="menu">
        <ListboxItem startContent={<MdHome />}>Home</ListboxItem>
        <ListboxItem startContent={<MdDashboard />}>Panel</ListboxItem>
        <ListboxItem startContent={<MdOutlineShoppingCart />}>
          Zamówienia
        </ListboxItem>
        <ListboxItem startContent={<MdWarehouse />}>Magazyn</ListboxItem>
        <ListboxItem startContent={<MdTask />}>Zadania</ListboxItem>
        <ListboxItem startContent={<MdChat />}>Wiadomości</ListboxItem>
        <ListboxItem startContent={<MdPerson />}>Użytkownicy</ListboxItem>
      </Listbox>
      <Listbox className="mt-auto" aria-label="menu2">
        <ListboxItem startContent={<MdHelp />}>Pomoc</ListboxItem>
        <ListboxItem startContent={<MdSettings />}>Ustawienia</ListboxItem>
      </Listbox>
      <Divider className="bg-neutral-300 dark:bg-neutral-800" />
      <div className="flex justify-between items-center">
        <User name="Łukasz Walukiewicz" description="Programista" />
        <Button isIconOnly variant="light" radius="sm" size="lg">
          <MdLogout />
        </Button>
      </div>
    </aside>
  )
}