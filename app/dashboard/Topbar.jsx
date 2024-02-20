'use client'

import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'
import { MdHome } from 'react-icons/md'

export default function Topbar() {
  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem>
          <MdHome />
        </BreadcrumbItem>
        <BreadcrumbItem>Panel</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  )
}
