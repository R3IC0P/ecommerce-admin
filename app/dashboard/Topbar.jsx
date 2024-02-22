'use client'

import { BreadcrumbItem, Breadcrumbs, SelectItem } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import { MdHome } from 'react-icons/md'

export default function Topbar() {
  const matchCrumb = (crumb) => {
    const crumbNames = {
      dashboard: 'Panel',
      help: 'Pomoc',
      messages: 'Wiadomości',
      orders: 'Zamówienia',
      settings: 'Ustawienia',
      tasks: 'Zadania',
      users: 'Użytkownicy',
      warehouse: 'Magazyn',
    }
    return crumbNames[crumb]
  }

  let currentLink = ''
  const crumbs = usePathname()
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`
      const crumbName = matchCrumb(crumb)
      return (
        <BreadcrumbItem key={crumb} href={currentLink}>
          {crumbName}
        </BreadcrumbItem>
      )
    })

  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem key="home" href="/">
          <MdHome />
        </BreadcrumbItem>
        {crumbs}
      </Breadcrumbs>
    </div>
  )
}
