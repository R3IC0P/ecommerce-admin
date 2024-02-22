'use client'

import {
  Button,
  Divider,
  Input,
  Listbox,
  ListboxItem,
  User,
} from '@nextui-org/react'
import { ThemeSwitcher } from '../../components/ThemeSwitcher'
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
import { signOut } from 'next-auth/react'

export default function SideMenu({ userData }) {
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
        <ListboxItem href="/dashboard" startContent={<MdDashboard />}>
          Panel
        </ListboxItem>
        <ListboxItem
          href="/dashboard/orders"
          startContent={<MdOutlineShoppingCart />}>
          Zamówienia
        </ListboxItem>
        <ListboxItem href="/dashboard/warehouse" startContent={<MdWarehouse />}>
          Magazyn
        </ListboxItem>
        <ListboxItem href="/dashboard/tasks" startContent={<MdTask />}>
          Zadania
        </ListboxItem>
        <ListboxItem href="/dashboard/messages" startContent={<MdChat />}>
          Wiadomości
        </ListboxItem>
        <ListboxItem href="/dashboard/users" startContent={<MdPerson />}>
          Użytkownicy
        </ListboxItem>
      </Listbox>
      <Listbox className="mt-auto" aria-label="menu2">
        <ListboxItem href="/dashboard/help" startContent={<MdHelp />}>
          Pomoc
        </ListboxItem>
        <ListboxItem href="/dashboard/settings" startContent={<MdSettings />}>
          Ustawienia
        </ListboxItem>
      </Listbox>
      <Divider className="bg-neutral-300 dark:bg-neutral-800" />
      <div className="flex justify-between items-center">
        <User
          name={userData.name}
          description={userData.position}
          avatarProps={{ src: userData.image }}
        />
        <Button
          onClick={() => signOut()}
          isIconOnly
          variant="light"
          radius="sm"
          size="lg">
          <MdLogout />
        </Button>
      </div>
    </aside>
  )
}
