'use client'

import matchNames from '@/utils/matchNames'
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import { MdHome } from 'react-icons/md'

export default function Topbar() {
  let currentLink = ''
  const crumbs = usePathname()
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`
      const crumbName = matchNames(crumb)
      return (
        <BreadcrumbItem key={crumb} href={currentLink}>
          {crumbName}
        </BreadcrumbItem>
      )
    })

  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem key="home" href="/">
          <MdHome />
        </BreadcrumbItem>
        {crumbs}
      </Breadcrumbs>
    </>
  )
}
