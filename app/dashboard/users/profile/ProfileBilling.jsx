'use client'

import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'

export default function ProfileBilling() {
  return (
    <Card
      shadow="none"
      className="max-w-5xl mr-auto p-3 rounded-md border border-neutral-300 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
      <CardHeader>
        <div className="flex flex-col">
          <h3 className="text-2xl">Płatności</h3>
          <p className="text-sm text-neutral-500">
            Sprawdź swoje płatności i nimi zarządzaj.
          </p>
        </div>
      </CardHeader>
      <Divider className="my-3" />
      <CardBody>
        <p>Nie masz żadnych płatności</p>
      </CardBody>
    </Card>
  )
}
