'use client'

import { Tabs, Tab } from '@nextui-org/react'
import SiteTitle from '@/components/SiteTitle'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import ProfileSettings from './ProfileSettings'
import ProfileTeam from './ProfileTeam'
import ProfileBilling from './ProfileBilling'

export default function Profile() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState(
    searchParams.get('activeTab') || 'settings'
  )

  const handleTabChange = (value) => {
    setActiveTab(value)
    router.push(`?activeTab=${value}`)
  }

  return (
    <>
      <SiteTitle title="Mój profil" />
      <div className="flex w-full flex-col">
        <Tabs
          onSelectionChange={handleTabChange}
          selectedKey={activeTab}
          aria-label="Options"
          variant="underlined">
          <Tab key="settings" title="Ustawienia">
            <ProfileSettings />
          </Tab>
          <Tab key="team" title="Zespół">
            <ProfileTeam />
          </Tab>
          <Tab key="billing" title="Płatności">
            <ProfileBilling />
          </Tab>
        </Tabs>
      </div>
    </>
  )
}
