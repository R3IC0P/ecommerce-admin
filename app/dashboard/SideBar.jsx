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
  MdArrowBackIos,
  MdArrowForwardIos,
  MdHome,
  MdLogout,
  MdSearch,
} from 'react-icons/md'
import { signOut } from 'next-auth/react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import mathcIcons from '@/utils/matchIcons'
import matchNames from '@/utils/matchNames'
import Link from 'next/link'

export default function Sidebar({ userData }) {
  const [active, setActive] = useState(false)
  const pathname = usePathname()
  const firstList = [
    { name: 'dashboard', href: '/dashboard' },
    { name: 'orders', href: '/dashboard/orders' },
    { name: 'warehouse', href: '/dashboard/warehouse' },
    { name: 'tasks', href: '/dashboard/tasks' },
    { name: 'messages', href: '/dashboard/messages' },
    { name: 'users', href: '/dashboard/users' },
  ]
  const secondList = [
    { name: 'help', href: '/dashboard/help' },
    { name: 'settings', href: '/dashboard/settings' },
  ]

  const createList = (siteList) => {
    return siteList.map((site) => (
      <ListboxItem
        key={site.name}
        href={site.href}
        startContent={mathcIcons(site.name)}
        className={
          pathname === site.href && 'bg-neutral-300 dark:bg-neutral-700'
        }>
        {matchNames(site.name)}
      </ListboxItem>
    ))
  }

  return (
    <aside
      className={`flex flex-col gap-5 h-full w-60 p-5 bg-neutral-50 border border-neutral-300 dark:bg-neutral-950 dark:border-neutral-800 fixed top-0 left-0 ${
        active ? 'translate-x-0' : '-translate-x-full'
      } transition-transform lg:relative lg:translate-x-0`}>
      <Button
        onClick={() => setActive(!active)}
        isIconOnly
        variant="light"
        size="lg"
        className="absolute top-0 left-full h-10 ml-5 lg:hidden">
        {active ? <MdArrowBackIos /> : <MdArrowForwardIos />}
      </Button>
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
      <Listbox itemClasses={{ base: 'py-2 text-2xl' }} aria-label="menu">
        <ListboxItem href="/" startContent={<MdHome />}>
          Home
        </ListboxItem>
        {createList(firstList)}
      </Listbox>
      <Listbox
        className="mt-auto"
        itemClasses={{ base: 'py-2 text-2xl' }}
        aria-label="menu2">
        {createList(secondList)}
      </Listbox>
      <Divider className="bg-neutral-300 dark:bg-neutral-800" />
      <div className="flex justify-between items-center">
        <Link href={'/dashboard/users/profile#settings'}>
          <User
            name={userData.name}
            description={userData.position}
            avatarProps={{ src: userData.image }}
          />
        </Link>
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
